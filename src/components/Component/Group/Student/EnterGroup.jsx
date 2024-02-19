import React, { useState } from "react";
import * as S from "./style";
import {
  enterGroupCode,
  enterGroup,
} from "../../../../assets/api/apis/group/ApiGroup";

const EnterGroup = ({ showSmallContainer, setShowSmallContainer }) => {
  const handleButtonClick = () => {
    setShowSmallContainer(!showSmallContainer);
  };
  const [code, setCode] = useState("");
  const [groupId, setGroupId] = useState("");

  return (
    <S.ModalContainer>
      {/* <S.Exit alt="exit" onClick={handleButtonClick} /> */}
      <S.SmallButton onClick={handleButtonClick}>닫기</S.SmallButton>
      <S.FlexContainer>
        <S.TextContainer>
          <S.Text>입장 코드 입력 </S.Text>
          <S.Input
            type="text"
            placeholder="입장 코드를 입력해 주세요"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </S.TextContainer>
        <S.ButtonContainer>
          <S.Button
            onClick={() => {
              enterGroupCode(code, setGroupId);
            }}
          >
            입장하기
          </S.Button>
          <S.Button
            onClick={() => {
              enterGroup(groupId);
            }}
          >
            입장하기 최종
          </S.Button>
        </S.ButtonContainer>
      </S.FlexContainer>
    </S.ModalContainer>
  );
};

export default EnterGroup;
