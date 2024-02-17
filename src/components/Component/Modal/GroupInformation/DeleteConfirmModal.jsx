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
  const DeleteButtonClick = (checkText) => {
    if (checkText === "그룹을 삭제합니다.") {
      alert("삭제 api 발생");
    } else {
      alert("문장이 일치하지 않습니다.");
      return;
    }
  };

  return (
    <S.ModalContainer>
      <S.Exit ale="exit" onClick={handleButtonClick} />
      <S.TextContainer>
        <S.Text>정말 삭제할 것인지?</S.Text>
        <input
          type="text"
          placeholder="위의 문장을 적어주세요"
          value={checkText}
          onChange={(event) => setCheckText(event.target.value)}
        />
      </S.TextContainer>
      <S.ButtonContainer>
        <S.GrayButton onClick={() => DeleteButtonClick(checkText)}>
          삭제하기
        </S.GrayButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
}

export default DeleteConfirmModal;
