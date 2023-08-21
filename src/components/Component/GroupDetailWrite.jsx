import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import arrow_repeat from "../../assets/arrow_repeat.svg";


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

const SaveButton = styled.button`
    width: 73px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--primary-cobalt, #4849FF);
    margin-left: 579px;
    margin-top: -24px;

    /*저장하기 글씨*/
    color: #ffffff;
    font-size: 14px;
    padding: 12px; 
    white-space: nowrap;
    display: flex; 
    justify-content: center;
    align-items: center; 
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

const Title = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 32px;
    margin-top: 32px;
`;

const ScoreList = styled.div`
    margin-left: 32px;
    margin-top: 12px;
    height: 48px;

`;

const ScoreTitle = styled.span`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    display: inline; 
`;

const ScoreResult = styled.span`
    color: var(--primary-cobalt, #4849FF);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: inline; 
`;


const WritingBox = styled.div`
    width: 620px;
    height: 240px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 24px;
`;

const SuggestWordContainer = styled.div`
    margin-left: 32px;
`;

const SuggestWord = styled.div`
    display: inline-flex;
    padding: 3px 12px 4px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--primary-light-cobalt, #EDEDFF);
    margin-top: 24px;

    &:not(:first-child) {
        margin-left: 8px; 
    }

    /*보기, 본보기, 사례 글씨*/
    color: var(--primary-cobalt, #4849FF);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const GuidelineContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 32px;
    margin-top: 32px;
`;

const GuidelineTitle = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ReapeatImg = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 438px;
    flex-shrink: 0;
`;

const GuidelineBox = styled.div`
    width: 620px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 24px;
`;

const GuidelineText = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    padding: 24px 24px 24px 24px;
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
            <Title>활동기록 총 정리</Title>
            <SaveButton>저장하기</SaveButton>
            <ScoreList>
                <ScoreTitle>태도 점수: </ScoreTitle>
                <ScoreResult>5점 </ScoreResult>
                <ScoreTitle>발표 횟수: </ScoreTitle>
                <ScoreResult>5회(상위 1%) </ScoreResult>
                <ScoreTitle>과제 종합등수: </ScoreTitle>
                <ScoreResult>3등 </ScoreResult>
                <div>
                <ScoreTitle>자작시 경진대회: </ScoreTitle>
                <ScoreResult>1등 </ScoreResult>
                <ScoreTitle>수학 경진대회: </ScoreTitle>
                <ScoreResult>3등 </ScoreResult>
                </div>
            </ScoreList>
            <WritingBox></WritingBox>
            <SuggestWordContainer>
                <SuggestWord>보기</SuggestWord>
                <SuggestWord>본보기</SuggestWord>
                <SuggestWord>사례</SuggestWord>
            </SuggestWordContainer>
            <GuidelineContainer>
                <GuidelineTitle>가이드라인 문장</GuidelineTitle>
                <ReapeatImg src={arrow_repeat} alt="arrow_repeat" />
            </GuidelineContainer>
            <GuidelineBox>
                <GuidelineText>
                    시를 읽고 분석하는 과정에서 시의 아름다움에 대해 느껴 
                    애송시 소개 글쓰기에 적극적으로 참여하고 학습함. 
                    이러한 활동을 통해 자신의 삶에 대해 성찰해보는 자세를 
                    보이며 시를 보다 창의적이고 거시적인 관점으로 이해하는 계기가 됨.
                </GuidelineText>
            </GuidelineBox>
        </LeftContainer>



        <RightContainer>
            <Title>학생수첩</Title>
        </RightContainer>
    </MainContainer>

    </div>
  );
}

export default GroupDetailWrite;
