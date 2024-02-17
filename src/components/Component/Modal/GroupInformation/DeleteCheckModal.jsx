import React, { useState } from "react";
import * as S from "./style";
import DeleteConfirmModal from "./DeleteConfirmModal";

function DeleteCheckModal({
  setShowDeleteCheckModal,
  setShowEditOrDeleteModal,
  groupId,
}) {
  // 두 개의 모달 모두 닫기 위한 함수
  const handleButtonClick = () => {
    setShowDeleteCheckModal(false);
    setShowEditOrDeleteModal(false);
  };
  // 삭제 텍스트 입력 모달을 띄우기 위한 상태\
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  return (
    <S.ModalContainer>
      <S.Exit alt="exit" onClick={handleButtonClick} />
      <S.TextContainer>
        <S.Text>삭제하시면 해당 그룹의 모든 데이터가 삭제됩니다.</S.Text>
        <S.ColorText>정말 삭제하시겠습니까?</S.ColorText>
      </S.TextContainer>
      <S.ButtonContainer>
        <S.GrayButton
          onClick={() => setShowDeleteConfirmModal(!showDeleteConfirmModal)}
        >
          삭제하기
        </S.GrayButton>
        <S.Button onClick={handleButtonClick}>계속 이용하기</S.Button>
      </S.ButtonContainer>
      {showDeleteConfirmModal && (
        <DeleteConfirmModal
          showDeleteConfirmModal={showDeleteConfirmModal}
          setShowDeleteConfirmModal={setShowDeleteConfirmModal}
          //   showEditOrDeleteConfirmModal={showEditOrDeleteConfirmModal}
          groupId={groupId}
        />
      )}
    </S.ModalContainer>
  );
}

export default DeleteCheckModal;
