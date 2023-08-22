import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import file from "../../assets/file.svg";

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
 
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
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

const Title = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    Padding-top: 32px;
    padding-left: 32px;
`;



const NoticeContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    margin-left: 32px;
`;

const NoticeImg = styled.img`
    width: 24px;
    height: 24px;
`;

const NoticeTitle = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 16px;
`;

const Score = styled.p`
  width: 50px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ score }) => getScoreColor(score)};
  margin-left: 40px;

  /*점수 글씨*/
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

//점수 색깔을 결정하는 함수
function getScoreColor(scoreString) {
    const actualScore = parseInt(scoreString.split("/")[0]);
    if (actualScore >= 7) {
      return "var(--primary-green, #00BAB3)";
    } else if (actualScore >= 5) {
      return "var(--primary-yellow, #FDD26E)";
    } else {
      return "var(--primary-pink, #F78)";
    }
  }


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
            <Title>1번 김민수</Title>
                <NoticeContent>
                    <NoticeImg src={file} alt="file" />
                    <NoticeTitle>과제4</NoticeTitle>
                    <Score  score="6/10">6/10</Score>
                </NoticeContent>
                <NoticeContent>
                    <NoticeImg src={file} alt="file" />
                    <NoticeTitle>과제3</NoticeTitle>
                    <Score score="9/10">9/10</Score>
                </NoticeContent>
                <NoticeContent>
                    <NoticeImg src={file} alt="file" />
                    <NoticeTitle>과제2</NoticeTitle>
                    <Score score="3/10">3/10</Score>
                </NoticeContent>
                <NoticeContent>
                    <NoticeImg src={file} alt="file" />
                    <NoticeTitle>과제1</NoticeTitle>
                    <Score score="8/10">8/10</Score>
                </NoticeContent>
        </MainContainer>
        </div>  

    );
}

export default StudentScoreDetail;