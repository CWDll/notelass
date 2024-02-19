import React, { useState } from "react";
import * as S from "./style";
import { enterGroup } from "../../../../assets/api/apis/group/ApiGroup";

const EnterGroup = ({ showSmallContainer, setShowSmallContainer }) => {
  const handleButtonClick = () => {
    setShowSmallContainer(!showSmallContainer);
  };
  const [code, setCode] = useState("");

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
        <S.Button
          onClick={() => {
            enterGroup(code);
          }}
        >
          입장하기
        </S.Button>
      </S.FlexContainer>
    </S.ModalContainer>
  );
};

export default EnterGroup;
