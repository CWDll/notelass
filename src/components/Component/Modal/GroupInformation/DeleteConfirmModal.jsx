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
      setCheckText("");
      return;
    }
  };

  return (
    <S.ModalContainer>
      <S.Exit ale="exit" onClick={handleButtonClick} />
      <S.FlexContainer>
        <S.ColorText>그룹 삭제시 그룹 내 모든 데이터가 삭제됩니다.</S.ColorText>
        <S.TextContainer>
          <S.Text>그룹을 삭제합니다.</S.Text>
          <S.Input
            type="text"
            placeholder="위의 문장을 적어주세요"
            value={checkText}
            onChange={(event) => setCheckText(event.target.value)}
          />
        </S.TextContainer>
        {/* <S.ButtonContainer> */}
        <S.GrayButton onClick={() => DeleteButtonClick(checkText)}>
          삭제하기
        </S.GrayButton>
        {/* </S.ButtonContainer> */}
      </S.FlexContainer>
    </S.ModalContainer>
  );
}

export default DeleteConfirmModal;
