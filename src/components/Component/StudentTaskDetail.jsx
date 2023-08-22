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



function StudentTaskDetail() {
    const navigate = useNavigate();     
    const BackButton = () => {
        navigate("/StudentScoreDetail");
    };

    return (

    <div>
    <Header>
        <Img src={chevron_left} alt="chevron_left" onClick={BackButton} />
        <BoldTitle>과제 4</BoldTitle>
        
    </Header>
    <MainContainer>
        <LeftContainer>
          
          
        </LeftContainer>



        <RightContainer>
            
        </RightContainer>
    </MainContainer>

    </div>
  );
}

export default StudentTaskDetail;
