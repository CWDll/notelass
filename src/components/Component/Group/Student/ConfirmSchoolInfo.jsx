import React from "react";
import * as S from "./style";
import { enterGroup } from "../../../../assets/api/apis/group/ApiGroup";

function ConfirmSchoolInfo({
  shwoConfirmSchoolInfo,
  setShwoConfirmSchoolInfo,
  groupId,
  groupInfo,
}) {
  const handleButtonClick = () => {
    setShwoConfirmSchoolInfo(!shwoConfirmSchoolInfo);
  };
  return (
    <S.ModalContainer>
      <S.Exit alt="exit" onClick={handleButtonClick} />
      <S.FlexContainer>
        <S.ConFirmTextContainer>
          <p>
            <S.ColorSpan>{groupInfo}</S.ColorSpan>
            <S.Span>에</S.Span>
          </p>
          <S.Text>입장하시겠습니까?</S.Text>
        </S.ConFirmTextContainer>
        <S.ButtonContainer>
          <S.ColorSmallButton
            onClick={() => {
              enterGroup(groupId);
            }}
          >
            입장
          </S.ColorSmallButton>
        </S.ButtonContainer>
      </S.FlexContainer>
    </S.ModalContainer>
  );
}

export default ConfirmSchoolInfo;
