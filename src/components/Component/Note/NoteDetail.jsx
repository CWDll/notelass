import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import plus_lg from "../../../assets/plus_lg.svg";

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

const MakeNoteBody = styled.div`
  width: 1194px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 32px;
  display: flex;
`;

const AddNote = styled.div`
  display: flex;

  width: 48px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1.5px dashed #4849ff;
  margin-left: 32px;
  margin-top: 36px;
`;

const PlusImg = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-left: 18px;
  margin-top: 26px;
`;

const Title = styled.p`
  color: var(--primary-cobalt, #4849ff);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 26px;
  padding-top: 59px;
`;

const CircleText = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--primary-light-cobalt, #ededff);
  border-width: 1.5px;
  border-color: var(--primary-cobalt, #4849ff);
  margin-left: 32px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const PurpleText = styled.p`
  color: #4849ff;
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
`;

const GrayText = styled.p`
  color: var(--cool-grayscale-placeholder, #9ea4aa);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;
`;

const SubjectBody = styled.div`
  display: flex;

  width: 1194px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 16px;
`;

const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;
`;

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

// 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
const subjectInfo = "노트고등학교 3학년 1반 문학";
// " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
const subject = subjectInfo.split(" ")[3];
// subject에서 앞 1글자만 가져와 저장하는 letter
const letter = subject.substr(0, 1);

function NoteDetail() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/NoteDetailSubject");
  };

  return (
    <NoteContainer>
      <MakeNoteBody>
        <AddNote>
          <PlusImg src={plus_lg} alt="plus_lg" />
        </AddNote>
        <Title>신규 노트 만들기</Title>
      </MakeNoteBody>
      <SubjectBodyWrapper>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>{letter}</PurpleText>
          </CircleText>
          <SubjectContainer>
            <BoldText>{subjectInfo}</BoldText>
            <GrayText>김태연 선생님</GrayText>
          </SubjectContainer>
        </SubjectBody>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>영</PurpleText>
          </CircleText>
          <SubjectContainer>
            <BoldText>노트고등학교 3학년 1반 영어</BoldText>
            <GrayText>티파니 선생님</GrayText>
          </SubjectContainer>
        </SubjectBody>
        <SubjectBody onClick={onClick}>
          <CircleText>
            <PurpleText>확</PurpleText>
          </CircleText>
          <SubjectContainer>
            <BoldText>노트고등학교 3학년 1반 확률과 통계</BoldText>
            <GrayText>이순규 선생님</GrayText>
          </SubjectContainer>
        </SubjectBody>
      </SubjectBodyWrapper>
    </NoteContainer>
  );
}

export default NoteDetail;
