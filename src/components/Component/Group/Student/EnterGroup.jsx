import React, { useState } from "react";
import * as S from "./style";
import {
  enterGroupCode,
  enterGroup,
} from "../../../../assets/api/apis/group/ApiGroup";
import ConfirmSchoolInfo from "./ConfirmSchoolInfo";

const EnterGroup = ({ showSmallContainer, setShowSmallContainer }) => {
  const handleButtonClick = () => {
    setShowSmallContainer(!showSmallContainer);
  };
  // 그룹 입장 코드
  const [code, setCode] = useState("");
  // 입장하려는 그룹 id
  const [groupId, setGroupId] = useState("");
  // 입장하려는 그룹 정보
  const [groupInfo, setGroupInfo] = useState("");

  const [shwoConfirmSchoolInfo, setShwoConfirmSchoolInfo] = useState(false);

  return (
    <S.ModalContainer>
      <S.Exit alt="exit" onClick={handleButtonClick} />
      {/* <S.SmallButton onClick={handleButtonClick}>닫기</S.SmallButton> */}
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
              enterGroupCode(code, setGroupId, setGroupInfo);
              setShwoConfirmSchoolInfo(!shwoConfirmSchoolInfo);
            }}
          >
            입장하기
          </S.Button>
          {shwoConfirmSchoolInfo && (
            <ConfirmSchoolInfo
              shwoConfirmSchoolInfo={shwoConfirmSchoolInfo}
              setShwoConfirmSchoolInfo={setShwoConfirmSchoolInfo}
              groupId={groupId}
              groupInfo={groupInfo}
            />
          )}
        </S.ButtonContainer>
      </S.FlexContainer>
    </S.ModalContainer>
  );
};

export default EnterGroup;
