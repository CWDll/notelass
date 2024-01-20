import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../../components/Component/Home/Style/GroupDetailStyle";

import { useNavigate, useParams, useLocation } from "react-router-dom";

import arrow_repeat from "../../../assets/arrow_repeat.svg";
import chevron_right_Blue from "../../../assets/chevron_right_Blue.svg";
import exit from "../../../assets/exit.svg";
import instance from "../../../assets/api/axios";

function GuideLine() {
  const { paramsGroupId, paramsUserId } = useParams();
  const [guideLineText, setGuideLineText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showStudentBook, setShowStudentBook] = useState(false);
  const [studentBookEntries, setStudentBookEntries] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);


    

  const handleRemoveKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleSyncButtonClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const getKeywords = () => [
    "성실",
    "리더십",
    "창의성",
    "책임",
    "협력",
    "자기주도",
    "도전",
    "봉사",
    "인내",
    "해결능력",
    "독립적",
    "주도적",
    "유연성",
    "혁신",
    "성취",
    "논리",
    "팀워크",
  ];

  const [selectedKeywords, setSelectedKeywords] = useState([]);

  // 키워드 토글
  const toggleKeywordSelection = (keyword) => {
    setSelectedKeywords((prevSelectedKeywords) =>
      prevSelectedKeywords.includes(keyword)
        ? prevSelectedKeywords.filter((k) => k !== keyword)
        : [...prevSelectedKeywords, keyword]
    );
  };

  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

 


  const handleAddKeyword = (keyword) => {
    setKeywords([...keywords, keyword]);
    setInputValue("");
  };


  // 가이드라인 get 함수
  const fetchGuideLine = useCallback(async () => {
    setLoading(true);
    const checkedHandbookIds = studentBookEntries
      .filter((entry) => entry.checked)
      .map((entry) => entry.id)
      .join(",");

    const allKeywords = [...keywords, ...selectedKeywords].join(",");

    try {
      const response = await instance.get(
        `/api/guideline/${paramsGroupId}/${paramsUserId}`,
        {
          params: {
            keywords: allKeywords,
            handbookIds: checkedHandbookIds,
          },
        }
      );

      console.log("가이드라인 내용:", response.data);
      if (response.status === 200) {
        setGuideLineText(response.data.result);
      } else {
        console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
      }
    } catch (error) {
      console.error("가이드라인 에러:", error);
    } finally {
      setLoading(false);
    }
  }, [
    paramsGroupId,
    paramsUserId,
    keywords,
    selectedKeywords,
    studentBookEntries,
  ]);



    return (
        <>
        <S.GuidelineContainer>
        <S.GuidelineTitle>가이드라인 문장</S.GuidelineTitle>
        <S.SyncButton onClick={handleSyncButtonClick}>
          학생 수첩 연동하기
          <img src={chevron_right_Blue} alt="chevron_right_Blue" />
        </S.SyncButton>
        <>
          {/* *키워드 입력창 */}
          <S.Text style={{ marginLeft: "-25px", marginTop: "-8px" }}>
            단어를 입력하세요 :{" "}
          </S.Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <S.SuggestWordContainer
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <S.SuggestWord>
                    {keyword}

                    <S.XIMG
                      src={exit}
                      alt="exit"
                      onClick={() => handleRemoveKeyword(keyword)}
                      style={{
                        display: "flex",
                        marginLeft: "3px",
                        width: "10px",
                        height: "10px",
                      }}
                    />
                  </S.SuggestWord>
                </div>
              ))}
            </S.SuggestWordContainer>

            <S.Keyword
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddKeyword(e.target.value);
              }}
            />
          </div>
          <S.ReapeatImg
            src={arrow_repeat}
            alt="arrow_repeat"
            onClick={fetchGuideLine}
          />

          <S.KeywordContainer>
            {getKeywords().map((keyword) => (
              <S.KeywordChip
                key={keyword}
                selected={selectedKeywords.includes(keyword)}
                onClick={() => toggleKeywordSelection(keyword)}
              >
                {keyword}
              </S.KeywordChip>
            ))}
          </S.KeywordContainer>
        </>
      </S.GuidelineContainer>


      <S.GuidelineBox>
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "40px",
                  }}
                >
                  <S.BeatLoader color="#4849ff" loading={loading} size={10} />
                </div>
              ) : (
                <S.Text>{guideLineText}</S.Text>
              )}
            </S.GuidelineBox>
            
        

      
      </>
    )
};

export default GuideLine;