import React from "react";
import * as S from "./style";

function EditOrDeleteModal({
  showEditOrDeleteModal,
  setShowSmallContainer,
  groupId,
}) {
  return (
    <S.ModalContainer>
      <S.Exit
        alt="exit"
        onClick={() => setShowSmallContainer(!showEditOrDeleteModal)}
      />
      <S.TextContainer>
        <S.Text>
          <S.ColorText>수정</S.ColorText> 또는 <S.ColorText>삭제</S.ColorText>
          하실 수 있습니다.
        </S.Text>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.Button>그룹 삭제</S.Button>
        <S.Button>명단 수정</S.Button>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
}

export default EditOrDeleteModal;
