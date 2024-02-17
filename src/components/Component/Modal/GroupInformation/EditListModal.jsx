import React, { useState, useEffect } from "react";
import * as S from "./style";
import { getStudentList } from "../../../../assets/api/apis/group/ApiGroup";

function EditListModal({ showEditListModal, setShowEditListModal, groupId }) {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    // 신청 데이터 가져오기
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 API 호출
        const studentResponse = await getStudentList(groupId);

        setStudentList(studentResponse.data.result.applyDtos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터를 가져오는 함수 호출
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

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
        <S.Category>
          <S.Index>1</S.Index>
          <S.AboutStudent>
            <S.StudentName>김민수</S.StudentName>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.AboutStudent>
        </S.Category>
      </S.StudentListSection>
      <S.ButtonContainer>
        <S.GrayButton>취소</S.GrayButton>
        <S.Button>저장하기</S.Button>
      </S.ButtonContainer>
    </S.EditModalContainer>
  );
}

export default EditListModal;
