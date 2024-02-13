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
  // 테스트용 예시 데이터
  const applyDtos = [
    {
      userId: 1,
      school: "노트고등학교",
      grade: 3,
      classNum: 1,
      name: "학생1",
    },
    {
      userId: 2,
      school: "노트고등학교",
      grade: 3,
      classNum: 1,
      name: "학생2",
    },
  ];

  // 그룹 일괄 수락
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
      {/* applyDtos 배열을 순회하여 각 학생에 대한 정보를 전달하고 StudentLine을 렌더링 */}
      {applyDtos.map((student, index) => (
        <StudentLine key={index} student={student} index={index + 1} />
      ))}
    </S.SmallContainer>
  );
};

export default ManageGroup;
