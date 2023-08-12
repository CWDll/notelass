import react from "react";
import paper from "../../assets/paper.svg";
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
  } from "./RecentNoteStyle";

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
    return (
    <RecentNoteContainer>
        <Title>최근에 열어본 노트</Title>
        <GroupBody>
          <HandoutGrid>
            {handout()} 
          </HandoutGrid>
        </GroupBody>

    </RecentNoteContainer>
    );
    }       

export default RecentNote;
