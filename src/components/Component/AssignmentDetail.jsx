import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoteContainer = styled.div`
  width: 1194px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  position: relative;
  margin-left: 363px;
  margin-top: 72px;
`;

const CircleText = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 32px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const PurpleText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 12px;
`;

const BoldText = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  align-self: center;
`;

const SubjectBody = styled.div`
  display: flex;

  width: 1194px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 16px;
  gap: 16px;
`;

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

// 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
const subjectInfo = "노트고등학교 3학년 1반 문학";
// " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
const subject = subjectInfo.split(" ")[3];
// subject에서 앞 1글자만 가져와 저장하는 letter
const letter = subject.substr(0, 1);

function GroupDetail() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/GroupDetailClass");
  };

  return (
    <NoteContainer>
      <SubjectBodyWrapper>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>{letter}</PurpleText>
          </CircleText>
          <BoldText>{subjectInfo}</BoldText>
        </SubjectBody>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>문</PurpleText>
          </CircleText>
          <BoldText>노트고등학교 3학년 2ssssssss반 문학</BoldText>
        </SubjectBody>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>문</PurpleText>
          </CircleText>
          <BoldText>노트고등학교 3학년 3반 문학</BoldText>
        </SubjectBody>
      </SubjectBodyWrapper>
    </NoteContainer>
  );
}

export default GroupDetail;
