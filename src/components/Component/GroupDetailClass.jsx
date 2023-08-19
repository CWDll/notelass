import React, { useState } from "react";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282B;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const NoteContainer = styled.div`
  width: 1194px;
  height: 728px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 370px;
  margin-top: 48px;
`;

function GroupDetailClass() {


  return (
    <div>
      <Header>
        <Img src={chevron_left} alt="chevron_left" />
        <BoldTitle>노트고등학교 3학년 1반 문학</BoldTitle>
      </Header>
      <NoteContainer>
       GROUP DETAIL CLASS
      </NoteContainer>
    </div>
  );
}

export default GroupDetailClass;
