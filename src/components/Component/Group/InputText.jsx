import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../../components/Component/Home/Style/GroupDetailStyle";
import instance from "../../../assets/api/axios";
import { useParams, useLocation } from "react-router-dom";

import chevron_right_Blue from "../../../assets/chevron_right_Blue.svg";
import Synonym from "./Synonym"; 


import BarLoader from "react-spinners/BarLoader";


function InputText() {

const [byteCount, setByteCount] = useState(0);
const [inputText, setInputText] = useState("");
const [isTextSaved, setIsTextSaved] = useState(false);
const [uploadStatus, setUploadStatus] = useState("");
const [synonyms, setSynonyms] = useState([]);
const [selectedWord, setSelectedWord] = useState(null);
const [synonymsLoading, setSynonymsLoading] = useState(false);





const { paramsGroupId, paramsUserId } = useParams();
  const location = useLocation();
  // console.log("location: ", location);
  const info = location.state;
  // console.log("info:", info);

    
    // 글자 바이트 수 계산
const calculateByteCount = (text) => {
    let byteCount = 0;
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
  
      if (charCode <= 0x7f) {
        byteCount += 1;
      } else if (charCode <= 0x7ff) {
        byteCount += 2;
      } else if (charCode <= 0xffff) {
        byteCount += 3;
      } else {
        byteCount += 4;
      }
    }
  
    return byteCount;
  };

    // 생활기록부 POST 함수

    const saveData = async () => {
      const requestBody = {
        content: inputText,
      };
  
      try {
        const postResponse = await instance.post(
          `/api/record/excel/${paramsGroupId}/${paramsUserId}`,
          requestBody
        );
  
        if (postResponse.status === 201) {
          console.log("생활기록부 작성 성공!");
          setIsTextSaved(true);
          console.log("생활기록부 작성 내용:", requestBody.content);
          alert("성공적으로 저장되었습니다");
          return postResponse.data;
        } else {
          console.error(
            "예상치 못한 상태 코드:",
            postResponse.status,
            postResponse.data
          );
        }
      } catch (error) {
        console.error("데이터 저장 중 오류 발생:", error);
      }
      return null;
    };


    
  // //생활기록부 엑셀 파일 업로드 POST 함수
  // const handleFileChange = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
      

  //     // 서버에 파일 업로드
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     try {
  //       const response = await instance.post(
  //         `/api/record/excel/${paramsGroupId}`,
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       if (response.status === 201) {
  //         console.log("생활기록부 파일 업로드 성공!");
  //         setUploadStatus("업로드 성공!");
  //         await fetchText();
  //       } else {
  //         console.error(
  //           "예상치 못한 상태 코드:",
  //           response.status,
  //           response.data
  //         );
  //         setUploadStatus("업로드 실패: 예상치 못한 상태 코드");
  //       }
  //     } catch (error) {
  //       console.error("생활기록부 파일 업로드 중 오류 발생:", error);
  //       setUploadStatus("업로드 실패: 오류 발생");
  //     }
  //   }
  // };

  

  // //생활기록부 내용 불러오기 함수
  // const fetchText = async () => {
  //   try {
  //     const response = await instance.get(
  //       `/api/record/excel/${paramsGroupId}/${paramsUserId}`
  //     );
  //     if (response.status == 200 || response.data.result) {
  //       setInputText(response.data.result);
  //       // await deleteFile(paramsGroupId);
  //       console.log("생활기록부 내용:", response.data.result);
  //     } else {
  //       console.error(
  //         "fetchText데이터를 가져오는 데 실패했습니다:",
  //         response.status
  //       );
  //     }
  //   } catch (error) {
  //     console.error("데이터 불러오기 중 오류 발생:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (paramsGroupId && paramsUserId) {
  //     fetchText();
  //   }
  // }, [paramsGroupId, paramsUserId]);


  // useEffect(() => {
  //   if (selectedWord) {
  //     fetchSynonyms(selectedWord);
  //   }
  // }, [selectedWord]);
  
  // const fetchSynonyms = async (word) => {
  //   setSynonymsLoading(true);
  //   try {
  //     const response = await instance.get(`/api/synonym?word=${word}`);
  //     if (Array.isArray(response.data.result)) {
  //       setSynonyms(response.data.result.slice(0, 4));
  //     } else {
  //       console.error("Error: synonym data is not an array");
  //       setSynonyms([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching synonyms:", error);
  //     setSynonyms([]);
  //   } finally {
  //     setSynonymsLoading(false);
  //   }
  // };
  

  return (
        <>
            <S.SaveButton onClick={saveData}>저장하기</S.SaveButton>
            <S.WritingBox
              onContextMenu={(event) => {
                event.preventDefault();
                const selectedText = window.getSelection().toString().trim();
                if (selectedText) {
                  // handleWordSelection(selectedText);
                  setSelectedWord(selectedText);
                }
              }}
            >
              {/*생활기록부 입력창*/}

              <S.Textarea
                value={inputText}
                placeholder="단어를 드래그한 뒤 우클릭하시면 유의어가 출력됩니다."
                spellCheck={false}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setByteCount(calculateByteCount(e.target.value));
                }}
              />

              <S.ByteCounting>{byteCount}/1500 byte</S.ByteCounting>
            </S.WritingBox>
            <Synonym selectedWord={selectedWord} synonyms={synonyms} synonymsLoading={synonymsLoading} />

            
            {/* <S.HancellButton>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".xls,.xlsx,.csv,.cell"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                  }}
                />
                한셀에서 가져오기
                <img src={chevron_right_Blue} alt="chevron_right_Blue" />
              </S.HancellButton> */}
        </>
  );





};

export default InputText;