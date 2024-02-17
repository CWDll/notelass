import React from "react";
import * as S from "./style";

function DeleteCheckModal({
  showDeleteCheckModal,
  setShowDeleteCheckModal,
  groupId,
}) {
  return (
    <S.ModalContainer>
      <S.Exit
        alt="exit"
        onClick={() => setShowDeleteCheckModal(!showDeleteCheckModal)}
      />
      <S.TextContainer>
        <S.Text>삭제하시면 해당 그룹의 모든 데이터가 삭제됩니다.</S.Text>
        <S.ColorText>정말 삭제하시겠습니까?</S.ColorText>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.GrayButton>삭제하기</S.GrayButton>
        <S.Button>계속 이용하기</S.Button>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
}

export default DeleteCheckModal;
