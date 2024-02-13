import React, { useState, useEffect } from "react";
import * as S from "./style";
import StudentLine from "./StudentLine";
import {
  groupAcceptAll,
  groupAccept,
  groupReject,
} from "../../../../assets/api/apis/group/ApiGroup";

const ManageGroup = ({
  showSmallContainer,
  setShowSmallContainer,
  groupId,
}) => {
  const GroupAcceptAll = () => {
    groupAcceptAll(groupId, () => {
      alert("모든 학생을 그룹에 수락하였습니다.");
    });
  };

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
        <S.AcceptAll onClick={GroupAcceptAll}>한 번에 수락하기</S.AcceptAll>
      </S.TextContainer>
      <StudentLine />
    </S.SmallContainer>
  );
};

export default ManageGroup;
