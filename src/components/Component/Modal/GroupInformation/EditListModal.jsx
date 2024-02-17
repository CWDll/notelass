import React, { useState } from "react";
import * as S from "./style";

function EditListModal({ showEditListModal, setShowEditListModal, groupId }) {
  const [studentList, setStudentList] = useState([]);

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
