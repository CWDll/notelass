import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import chevron_right from "../../../assets/chevron_right.svg";
import {
  GroupContainer,
  BoldText,
  GrayText,
  GroupHead,
  GroupBody,
  CircleText,
  PurpleText,
  SubjectContainer,
  Teacher,
  SubjectText,
  Img,
} from "./Style/GroupsStyle";

export default function Groups() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/GroupDetail");
  };

  // 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
  const subjectInfo = "노트고등학교 3학년 1반 문학";
  // " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
  const subject = subjectInfo.split(" ")[3];
  // subject에서 앞 1글자만 가져와 저장하는 letter
  const letter = subject.substr(0, 1);

  return (
    <GroupContainer>
      <GroupHead>
        <BoldText>내가 속한 그룹</BoldText>
        <GrayText style={{ "text-decoration": "underline" }} onClick={onClick}>
          전체보기
        </GrayText>
        <Img src={chevron_right} alt="chevron_right" />
      </GroupHead>
      <GroupBody>
        <CircleText>
          <PurpleText>{letter}</PurpleText>
        </CircleText>
        <SubjectContainer>
          <SubjectText>{subjectInfo}</SubjectText>
          <Teacher>김태연 선생님</Teacher>
          {/* <GrayText>1반</GrayText> */}
        </SubjectContainer>
      </GroupBody>

      <GroupBody>
        <CircleText>
          <PurpleText>영</PurpleText>
        </CircleText>
        <SubjectContainer>
          <SubjectText>노트고등학교 3학년 1반 영어</SubjectText>
          <Teacher>티파니 선생님</Teacher>
          {/* <GrayText>1반</GrayText> */}
        </SubjectContainer>
      </GroupBody>
    </GroupContainer>
  );
}
