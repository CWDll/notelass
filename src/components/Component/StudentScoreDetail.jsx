import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";


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
    margin-top: 48px;
    margin-left: 363px;
    width: 1194px;
    height: 800px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);

`;


function StudentScoreDetail(){

    const navigate = useNavigate();
    const BackButton = () => {
        navigate("/GroupDetailWrite");
    };


    return(
        <div>
        <Header>
                <Img src={chevron_left} alt="chevron_left" onClick={BackButton} />
                <BoldTitle>학생별 성적 열람</BoldTitle>
             
        </Header>
        <MainContainer>
            
        </MainContainer>
        </div>  

    );
}

export default StudentScoreDetail;