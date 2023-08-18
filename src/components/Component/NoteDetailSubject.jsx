import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import plus_lg from "../../assets/plus_lg.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  
  margin-top: 72px;
`;

const BoldText = styled.p`
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







function NoteDetailSubject() {

   return (
    <div>
    <Header>
     
    <Img src={chevron_left} alt="chevron_left" /> 
    <BoldText>과제별 성적 열람</BoldText>
    </Header>
    
   
    <NoteContainer>
    <MakeNoteBody>
      <AddNote>
        <PlusImg src={plus_lg} alt="plus_lg" />
      </AddNote>
      <Title>신규 노트 만들기</Title>
    </MakeNoteBody>
    <h2>학습지</h2>
    </NoteContainer>
    
    </div>

  );
}

export default NoteDetailSubject; 