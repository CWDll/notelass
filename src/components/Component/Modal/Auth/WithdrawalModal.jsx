import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "../GroupInformation/style";
import { deleteGroup } from "../../../../assets/api/apis/group/ApiGroup";
import { withdrawal } from "../../../../assets/api/apis/auth/ApiAuth";

function WithdrawalModal({ setShwoWithdrawalModal, shwoWithdrawalModal }) {
  // 탈퇴 완료시 화면 이동을 위한 navigate
  const navigate = useNavigate();

  // 클릭으로 모달 닫기
  const handleButtonClick = () => {
    setShwoWithdrawalModal(false);
  };

  const [checkText, setCheckText] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    if (checkText === "회원 탈퇴합니다") {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [checkText]);
 
  const DeleteButtonClick = (checkText) => {
    if (checkText === "회원 탈퇴합니다") {
      withdrawal();
      navigate("/SignupComplete");
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
        <S.ColorText>회원 탈퇴시 그룹 내 모든 데이터가 삭제됩니다.</S.ColorText>
        <S.TextContainer>
          <S.Text>회원 탈퇴합니다</S.Text>
          <S.Input
            type="text"
            placeholder="위의 문장을 적어주세요"
            value={checkText}
            onChange={(event) => setCheckText(event.target.value)}
          />
        </S.TextContainer>
        <S.GrayButton onClick={() => DeleteButtonClick(checkText)}  style={{backgroundColor: buttonActive ? 'blue' : 'gray'}}>
          삭제하기
        </S.GrayButton>
      </S.FlexContainer>
    </S.ModalContainer>
  );
}

export default WithdrawalModal;
