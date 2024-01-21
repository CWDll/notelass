import React, { useState, useEffect, useCallback } from "react";
import * as S from "../../../components/Component/Home/Style/GroupDetailStyle";
import instance from "../../../assets/api/axios";
import { useParams, useLocation } from "react-router-dom";

import noncheck from "../../../assets/noncheck.svg";
import check from "../../../assets/check.svg";

function StudentMemo() {
    const { paramsGroupId, paramsUserId } = useParams();
    const location = useLocation();
    // console.log("location: ", location);
    const info = location.state;


  //학생 수첩 조회 Get 함수
  const [studentBookEntries, setStudentBookEntries] = useState([]);
 // 학생 수업 관련 state
 const [showStudentBook, setShowStudentBook] = useState(false);
 const [selectedGroupId, setSelectedGroupId] = useState(null);
 const [selectedUserId, setSelectedUserId] = useState(null);
 const [contentId, setContentId] = useState();
 // 학생 선택
 const [students, setStudents] = useState([]);
 //
 // const [byteCount, setByteCount] = useState(0);
 const [savedTextFromStudentBook, setSavedTextFromStudentBook] = useState("");
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const [checkedState, setCheckedState] = useState({});

  useEffect(() => {
    const fetchStudentBook = async () => {
      try {
        const response = await instance.get(
          `/api/handbook/${paramsGroupId}/${paramsUserId}`
        );
        console.log("학생 수첩 조회 내용:", response.data);
        if (response.status === 200) {
          setSavedTextFromStudentBook(response.data.result);
          setStudentBookEntries(response.data.result);
          console.log("학생 수첩 조회 내용2: ", response.data.result);
        } else {
          console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
        }
      } catch (error) {
        console.error("학생 수첩을 가져오지 못했습니다.:", error);
      }
    };

    if (paramsGroupId && paramsUserId) {
      fetchStudentBook();
    }
  }, [paramsGroupId, paramsUserId]);

  // 학생 수첩 내용 DELETE 함수
  const deleteStudentBookEntry = async (handbookContentId) => {
    try {
      const response = await instance.delete(
        `/api/handbook/${handbookContentId}`
      );
      if (response.status === 204) {
        setStudentBookEntries((currentEntries) =>
          currentEntries.filter((entry) => entry.id !== handbookContentId)
        );
        alert("항목이 성공적으로 삭제되었습니다.");
      } else {
        // 오류가 있을 경우
        console.error("삭제에 실패했습니다:", response);
      }
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다:", error);
    }
  };


  

  // 학생 수첩 관련 함수
  // StudentBook 모달을 열기 위한 함수
  const openStudentBook = (groupId, userId) => {
    setSelectedGroupId(groupId);
    setSelectedUserId(userId);
    setShowStudentBook(true);
  };

  // StudentBook 모달을 닫기 위한 함수
  const closeStudentBook = () => {
    setShowStudentBook(false);
  };

  const findGroupAndUserIdByEntryId = (entryId) => {
    console.log(entryId);
    console.log(
      "findGroupAndUserIdByEntryId에서의 studentBookEntries: ",
      studentBookEntries
    );
    const entry = studentBookEntries.find((entry) => entry.id === entryId);
    if (entry) {
      return { groupId: entry.groupId, userId: entry.userId };
    }
    return { groupId: null, userId: null };
  };

   // 학생 수첩 수정 버튼 클릭 핸들러
   const handleStudentBookEdit = (entryId) => {
    console.log("작동중입니다...");
    const entry = studentBookEntries.find((e) => e.id === entryId);
    console.log("entry", entry);
    console.log("entry.id", entry.id);
    console.log("entryIdType", typeof entry.id);
    console.log("entryId", entryId);

    if (entry) {
      setSelectedGroupId(paramsGroupId);
      setSelectedUserId(paramsUserId);
      setShowStudentBook(true);
      setContentId(entryId);
      console.log("setShowStudentBook=true 만든 상태");
    } else {
      console.error("학생 정보를 찾을 수 없음");
    }
    console.log("작동 끝??");
    console.log("showStudentBook의 상태: ", showStudentBook);
  };


    return (
        <>
        <S.Title>학생수첩</S.Title>
          {studentBookEntries.map((entry) => (
            <S.InfoContainer key={entry.id}>
              <S.TimeText>
                {/* 날짜 형식을 년-월-일 */}
                {new Date(entry.createdDate).toLocaleDateString("ko-KR")}
              </S.TimeText>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "right",
                  marginRight: "35px",
                  marginTop: "-20PX",
                }}
              >
                <S.TimeText
                  onClick={() => {
                    handleStudentBookEdit(entry.id);
                    setShowStudentBook(!showStudentBook);
                  }}
                >
                  수정
                </S.TimeText>

                <S.TimeText onClick={() => deleteStudentBookEntry(entry.id)}>
                  삭제
                </S.TimeText>
              </div>
              <S.StudentBookText key={entry.id}>
                <S.SavedText>{entry.content}</S.SavedText>
                {showCheckboxes && (
                  <div style={{ position: "absolute" }}>
                    <S.Checkbox
                      onClick={() => toggleCheck(entry.id)}
                      src={checkedState[entry.id] ? check : noncheck}
                      alt="check"
                    />
                  </div>
                )}
              </S.StudentBookText>
            </S.InfoContainer>
          ))}
          {showStudentBook && (
            <S.StudentBookContent
              show={showStudentBook}
              onClose={() => setShowStudentBook(false)}
              propsGroupId={selectedGroupId}
              propsUserId={selectedUserId}
              contentId={contentId}
            />
          )}
    
  
      {/* </div> */}
    </>
    );
    };

export default StudentMemo;