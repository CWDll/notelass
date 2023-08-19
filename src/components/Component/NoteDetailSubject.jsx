import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import plus_lg from "../../assets/plus_lg.svg";
import paper from "../../assets/paper.svg";
import chevron_down from "../../assets/chevron_down.svg";
import star from "../../assets/star.svg";
import FilledStar from "../../assets/FilledStar.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  
  margin-top: 72px;
`;

const BoldTitle = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
    
    margin-top: 72px;
`;

const NoteContainer = styled.div`
    width: 1194px;
    height: 728px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 370px;
    margin-top: 48px;
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
    border: 1.5px dashed #4849FF;
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
    color: var(--primary-cobalt, #4849FF);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 26px;
    padding-top: 59px;
   
`;

const PaperImg = styled.img`
    width: 48px;
    height: 64px;
    flex-shrink: 0;
    margin-left: 32px;
    margin-top: 4px;
`;

const ChevronDownImg = styled.img`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-left: 884px;
    align-self: center;
`;


const StarImg = styled.img`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    align-self: center;
    margin-left: 24px;
`;




const BoldText = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;

const GrayText = styled.p`
    color: var(--cool-grayscale-placeholder, #9EA4AA);
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





function NoteDetailSubject() {
   
    const [isStarred, setIsStarred] = useState(false);

    function handleStarClick() {
      setIsStarred(!isStarred);
    }

   return (
    <div>
    <Header>
     
    <Img src={chevron_left} alt="chevron_left" /> 
    <BoldTitle>과제별 성적 열람</BoldTitle>
    </Header>
    
   
    <NoteContainer>
    <MakeNoteBody>
      <AddNote>
        <PlusImg src={plus_lg} alt="plus_lg" />
      </AddNote>
      <Title>신규 노트 만들기</Title>
    </MakeNoteBody>
    <SubjectBodyWrapper> 
            <SubjectBody >
                <PaperImg src={paper} alt="paper" />
                <SubjectContainer>
                  <BoldText>문학퀴즈</BoldText>
                  <GrayText>2023.04.27 오후 9:00</GrayText>
                </SubjectContainer>
                <ChevronDownImg src={chevron_down} alt="chevron_down"/>
                <StarImg onClick={handleStarClick} src={isStarred ? FilledStar : star} alt="star"/>
            </SubjectBody>
            <SubjectBody >
                <PaperImg src={paper} alt="paper" />    
                <SubjectContainer>
                  <BoldText>문학퀴즈</BoldText>
                  <GrayText>2023.04.27 오후 9:00</GrayText>
                </SubjectContainer>
                <ChevronDownImg src={chevron_down} alt="chevron_down"/>
                <StarImg onClick={handleStarClick} src={isStarred ? FilledStar : star} alt="star"/>
            </SubjectBody>
            <SubjectBody >
                <PaperImg src={paper} alt="paper" />
                <SubjectContainer>
                  <BoldText>문학퀴즈</BoldText>
                  <GrayText>2023.04.27 오후 9:00</GrayText>
                </SubjectContainer>
                <ChevronDownImg src={chevron_down} alt="chevron_down"/>
                <StarImg onClick={handleStarClick} src={isStarred ? FilledStar : star} alt="star"/>
            </SubjectBody>
        </SubjectBodyWrapper> 
    </NoteContainer>
    
    </div>

  );
}

export default NoteDetailSubject; 