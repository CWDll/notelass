import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const BlueTitle = styled.p`
    color: #2F80ED;
    font-size: 20px;
    font-weight: 700;
    margin-left: 24px;
    margin-top: 72px;
`;

const StudentSelect = styled.select`
    width: 264px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 60px;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


const LeftContainer = styled.div`
    width: 684px;
    height: 800px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 363px;
    margin-top: 48px;
`;

const RightContainer = styled.div`
    width: 480px;
    height: 800px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 30px;
    margin-top: 48px;
    position: relative;
`;


function GroupDetailWrite() {
  return (

    



    <div>
    <Header>
        <Img src={chevron_left} alt="chevron_left" />
        <BoldTitle>노트고등학교 3학년 1반 문학</BoldTitle>
        <BlueTitle>세부능력특기사항</BlueTitle>
        <StudentSelect />
    </Header>
    <MainContainer>
        <LeftContainer>
            생기부 작성
        </LeftContainer>
        <RightContainer>
            학생수첩
        </RightContainer>
    </MainContainer>

    </div>
  );
}

export default GroupDetailWrite;
