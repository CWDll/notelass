import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RecentNoteContainer,
  Title,
  BoldText,
  GrayText,
  GroupBody,
  HandoutGrid,
  HandoutContainer,
  TextGroup,
  DetailText,
} from "./RecentNoteStyle";
import paper from "../../../assets/paper.svg";

const handout = () => {
  return [1, 2, 3, 4, 5, 6].map((i) => (
    <HandoutContainer key={i}>
      <img src={paper} alt={`학습지 ${i} 이미지`} />
      <TextGroup>
        <BoldText>학습지{i}</BoldText>
        <GrayText>날짜{i}</GrayText>
      </TextGroup>
    </HandoutContainer>
  ));
};

function RecentNote() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/Note");
  };

  return (
    <RecentNoteContainer>
      <Title>최근에 열어본 노트</Title>
      <DetailText style={{ "text-decoration": "underline" }} onClick={onClick}>
        전체보기
      </DetailText>
      <GroupBody>
        <HandoutGrid>{handout()}</HandoutGrid>
      </GroupBody>
    </RecentNoteContainer>
  );
}

export default RecentNote;
