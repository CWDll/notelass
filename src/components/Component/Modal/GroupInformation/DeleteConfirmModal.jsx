import React, { useState } from "react";
import * as S from "./style";

function DeleteConfirmModal({
  showDeleteConfirmModal,
  showEditOrDeleteConfirmModal,
  groupId,
}) {
  const handleButtonClick = () => {
    alert("버튼 클릭 이벤트 발생");
  };

  const [checkText, setCheckText] = useState("");

  return (
    <S.ModalContainer>
      <S.Exit ale="exit" onClick={handleButtonClick} />
      <S.TextContainer>
        <S.Text>정말 삭제할 것인지?</S.Text>
        <S.ColorText>정말 삭제하시겠습니까?</S.ColorText>
      </S.TextContainer>
    </S.ModalContainer>
  );
}

export default DeleteConfirmModal;
