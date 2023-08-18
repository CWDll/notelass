import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";


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






function NoteDetailSubject() {

   return (
    <div>
    <Header>
     
    <Img src={chevron_left} alt="chevron_left" /> 
    <BoldText>과제별 성적 열람</BoldText>
    </Header>
    
   
    <NoteContainer>
   

    </NoteContainer>
    
    </div>

  );
}

export default NoteDetailSubject; 