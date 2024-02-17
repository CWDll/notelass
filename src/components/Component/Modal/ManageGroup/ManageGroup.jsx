import React from "react";
import * as S from "./style";
import StudentLine from "./StudentLine";

const ManageGroup = ({ showSmallContainer, setShowSmallContainer }) => {
  return (
    <S.SmallContainer>
      <S.Exit
        alt="exit"
        onClick={() => setShowSmallContainer(!showSmallContainer)}
      />
      <S.TextContainer>
        <S.GroupInfoText>
          노트고등학교 3학년 1반 문학 <S.GroupNumber>• 536486</S.GroupNumber>
        </S.GroupInfoText>
        <S.AcceptAll>한 번에 수락하기</S.AcceptAll>
      </S.TextContainer>
      <StudentLine />
    </S.SmallContainer>
  );
};

export default ManageGroup;
