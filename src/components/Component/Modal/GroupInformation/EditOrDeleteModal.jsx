import React, { useState } from "react";
import * as S from "./style";
import DeleteCheckModal from "./DeleteCheckModal";

function EditOrDeleteModal({
  showEditOrDeleteModal,
  setShowEditOrDeleteModal,
  groupId,
}) {
  const [showDeleteCheckModal, setShowDeleteCheckModal] = useState(false);
  const handleButtonClick = () => {
    setShowDeleteCheckModal(true);
    // setShowEditOrDeleteModal(false);
  };
  return (
    <S.ModalContainer>
      <S.Exit
        alt="exit"
        onClick={() => setShowEditOrDeleteModal(!showEditOrDeleteModal)}
      />
      <S.TextContainer>
        <S.Text>
          <S.ColorSpan>수정</S.ColorSpan> 또는 <S.ColorSpan>삭제</S.ColorSpan>
          하실 수 있습니다.
        </S.Text>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.Button onClick={handleButtonClick}>그룹 삭제</S.Button>
        <S.Button>명단 수정</S.Button>
      </S.ButtonContainer>
      {showDeleteCheckModal && (
        <DeleteCheckModal
          setShowDeleteCheckModal={setShowDeleteCheckModal}
          setShowEditOrDeleteModal={setShowEditOrDeleteModal}
          groupId={groupId}
        />
      )}
    </S.ModalContainer>
  );
}

export default EditOrDeleteModal;
