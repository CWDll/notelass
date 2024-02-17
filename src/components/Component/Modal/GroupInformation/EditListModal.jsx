import React, { useState, useEffect } from "react";
import * as S from "./style";
import { getStudentList } from "../../../../assets/api/apis/group/ApiGroup";

function EditListModal({ showEditListModal, setShowEditListModal, groupId }) {
  const [studentList, setStudentList] = useState([]);

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
          <span>3학년 1반</span>
          <span>2023-2학기</span>
        </S.TextSection>
        <S.Button>추가하기</S.Button>
      </S.TopBar>
      <S.StudentListSection>
        {studentList.map((student, index) => (
          <S.Category key={student.id}>
            <S.Index>{index + 1}</S.Index>
            <S.AboutStudent>
              <S.StudentName>{student.name}</S.StudentName>
              <S.DeleteButton>삭제</S.DeleteButton>
            </S.AboutStudent>
          </S.Category>
        ))}
      </S.StudentListSection>
      <S.ButtonContainer>
        <S.GrayButton>취소</S.GrayButton>
        <S.Button>저장하기</S.Button>
      </S.ButtonContainer>
    </S.EditModalContainer>
  );
}

export default EditListModal;
