import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { deleteGroup } from "../../../../assets/api/apis/group/ApiGroup";

function DeleteConfirmModal({
  showDeleteConfirmModal,
  setShowDeleteConfirmModal,
  groupId,
}) {
  const handleButtonClick = () => {
    setShowDeleteConfirmModal(false);
  };
  // 삭제 완료시 화면 이동을 위한 navigate
  const navigate = useNavigate();

  const [checkText, setCheckText] = useState("");
  const DeleteButtonClick = (checkText) => {
    if (checkText === "그룹을 삭제합니다.") {
      deleteGroup(groupId);
      navigate("/Groupdetail");
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
        <S.GrayButton onClick={() => DeleteButtonClick(checkText)}>
          삭제하기
        </S.GrayButton>
      </S.FlexContainer>
    </S.ModalContainer>
  );
}

export default DeleteConfirmModal;
