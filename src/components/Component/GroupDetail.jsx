import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const NoteContainer = styled.div`
    width: 1194px;
    height: 800px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    position: relative;
    margin-left: 363px;
    margin-top: 16px;
`;


const CircleText = styled.div`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--primary-light-cobalt, #EDEDFF);
    border-width: 1.5px;
    border-color: var(--primary-cobalt, #4849FF);
    border-style: solid;
    margin-left: 32px;
    margin-top: 12px;
    display: flex;
    justify-content: center;
`;

const PurpleText = styled.p`
    color: #4849FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 12px;
`;

const BoldText = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
    align-self: center;
`;


const SubjectBody = styled.div`
    display: flex;

    width: 1194px;
    height: 72px;
    flex-shrink: 0;
    margin-top: 16px;  
    gap: 16px;

`;

const Button = styled.button`
width: 144px;
height: 54px;
flex-shrink: 0;
border-radius: 6px;
border: 2px dashed #4849FF;
background: #EDEDFF;
margin-TOP: 74px;
margin-left: 1413px;

color: #4849FF;
text-align: center;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;


`

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SmallContainer = styled.div`
  width: 480px;
  height: 544px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  z-index: 1000; 

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
color: var(--cool-grayscale-title, #26282B);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 40px;
margin-left:40px;
display: flex;
`;

const TextBox = styled.input`
display: flex;
width: 400px;
height: 56px;
justify-content: center;
align-items: center;
flex-shrink: 0;
margin-top: 16px;

width: 400px;
height: 56px;
flex-shrink: 0;
border-radius: 8px;
border: 1.5px solid rgba(201, 205, 210, 0.50);
background: #FFF;

color: var(--cool-grayscale-line, #C9CDD2);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 16px;
`;



  // 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
  const subjectInfo = "노트고등학교 3학년 1반 문학";
  // " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
  const subject = subjectInfo.split(" ")[3];
  // subject에서 앞 1글자만 가져와 저장하는 letter
  const letter = subject.substr(0, 1);

function GroupDetail() {


    const navigate = useNavigate();
    const onClick = () => {
      navigate("/GroupDetailClass");
    };

    const [showSmallContainer, setShowSmallContainer] = useState(false);




   return (
    <>
    
    <Button onClick={ () => setShowSmallContainer(!showSmallContainer)}>그룹생성</Button>
  
      
    {showSmallContainer && (
        <SmallContainer>
          <button onClick={ () => setShowSmallContainer(!showSmallContainer)}>X</button>
          
          <Title>대상 학년 선택</Title>
          <TextBox type="text" placeholder="학년을 입력하세요"></TextBox>
          <Title>대상 반 선택</Title>
          <TextBox type="text" placeholder="반을 입력하세요"></TextBox>
          <Title>과목 선택</Title>
          <TextBox type="text" placeholder="과목을 입력하세요"></TextBox>

          <button>다음</button>


        </SmallContainer>
      )}



    <NoteContainer>
   
    <SubjectBodyWrapper> 
            <SubjectBody onClick={onClick}>
                <CircleText>
                  <PurpleText>{letter}</PurpleText>
                </CircleText>
                  <BoldText>{subjectInfo}</BoldText>
            </SubjectBody>
            <SubjectBody onClick={onClick}>
                <CircleText>
                  <PurpleText>문</PurpleText>
                </CircleText>
                  <BoldText>노트고등학교 3학년 2반 문학</BoldText>
            </SubjectBody>
            <SubjectBody onClick={onClick}>
                <CircleText>
                  <PurpleText>문</PurpleText>
                </CircleText>
                  <BoldText>노트고등학교 3학년 3반 문학</BoldText>
            </SubjectBody>
        </SubjectBodyWrapper> 
  </NoteContainer>

    </>


  );
}

export default GroupDetail; 