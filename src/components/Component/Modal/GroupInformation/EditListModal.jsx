import React, { useState, useEffect } from "react";
import * as S from "./style";
import {
  getStudentList,
  deleteStudentInList,
} from "../../../../assets/api/apis/group/ApiGroup";

function EditListModal({
  showEditListModal,
  setShowEditListModal,
  groupId,
  grade,
  classNum,
}) {
  const [studentList, setStudentList] = useState([]);

  // 목데이터. 나중에 삭제할 것.
  const mockStudentList = [
    { id: 1, name: "김철수" },
    { id: 2, name: "이영희" },
    { id: 3, name: "박민수" },
  ];

  useEffect(() => {
    // 신청 데이터 가져오기
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 API 호출
        const studentResponse = await getStudentList(groupId);

        setStudentList(studentResponse.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // fetchData(); // 데이터를 가져오는 함수 호출

    // 목데이터 테스트용
    setStudentList(mockStudentList);
  }, [groupId]); // 그룹id 바뀔 때마다 호출

  return (
    <S.EditModalContainer>
      <S.TopBar>
        <S.TextSection>
          <S.ClassSpan>
            {grade}학년 {classNum}반
          </S.ClassSpan>
          {/* 학기 데이터를 어디서 가져오는지 확인 필요 */}
          <S.SemesSpan>2023-2학기</S.SemesSpan>
        </S.TextSection>
      </S.TopBar>
      <S.StudentListSection>
        <S.TopCategory>
          <S.Index>번호</S.Index>
          <S.CateStudentName>이름</S.CateStudentName>
        </S.TopCategory>
        {studentList.map((student, index) => (
          <S.Category key={student.id}>
            <S.Index>{index + 1}</S.Index>
            <S.AboutStudent>
              <S.StudentName>{student.name}</S.StudentName>
              <S.DeleteButton onClick={deleteStudentInList(student.id)}>
                삭제
              </S.DeleteButton>
            </S.AboutStudent>
          </S.Category>
        ))}
      </S.StudentListSection>
      <S.ButtonContainer>
        <S.GrayButton
          onClick={() => {
            setShowEditListModal(false);
          }}
        >
          취소
        </S.GrayButton>
        <S.Button
          onClick={() => {
            setShowEditListModal(false);
          }}
        >
          저장하기
        </S.Button>
      </S.ButtonContainer>
    </S.EditModalContainer>
  );
}

export default EditListModal;
