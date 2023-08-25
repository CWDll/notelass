import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import test from "../../assets/test.png";
import Test_Correct from "../../assets/Test_Correct.svg";
import Test_Wrong from "../../assets/Test_Wrong.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282b;
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
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 48px;
`;

const RightContainer = styled.div`
  width: 480px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 30px;
  margin-top: 48px;
  position: relative;
`;

const TestImg = styled.img`
  width: 340px;
  height: 600px;
  flex-shrink: 0;
  margin-left: 36px;
  margin-top: 36px;
`;

const CorrectImg1 = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-left: 26px;
  margin-top: -610px;
`;

const WrongImg = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-left: 26px;
  margin-top: 185px;
`;

const CorrectImg2 = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  margin-left: 26px;
  margin-top: 230px;
`;

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 32px;
  margin-top: 32px;
`;

const SettingBox = styled.div`
  margin-top: 24px;
  margin-left: 32px;
  width: 80%;
  height: 60px;
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

const SmallTitle = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BlueText = styled.p`
  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 8px;
`;

const DivideLine = styled.div`
  width: 416px;
  flex-shrink: 0;
  margin-left: 32px;
  border-top: 1.5px solid var(--primary-light-cobalt, #ededff);
  margin-top: 16px;
`;

const ModifyButton = styled.button`
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1.5px solid var(--primary-cobalt, #4849ff);
  background: #fff;
  margin-left: 275px;
  margin-bottom: 32px;

  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CheckButton = styled.button`
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);

  margin-left: 16px;
  margin-bottom: 32px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 490px;
`;

function StudentTaskDetail() {
  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/StudentScoreDetail");
  };
  // 텍스트 수정을 위한 상태 변수들
  const [scoreText, setScoreText] = useState("80점");
  const [feedbackText, setFeedbackText] = useState("2번, 18번");
  const [isEditing, setIsEditing] = useState(false);
  // 수정 중인 내용을 저장하기 위한 상태 변수
  const [newScoreText, setNewScoreText] = useState(scoreText);
  const [newFeedbackText, setNewFeedbackText] = useState(feedbackText);

  // "채점 수정" 버튼 클릭 시, 수정 가능한 상태로 변경
  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    // 수정된 내용을 상태에 반영
    setScoreText(newScoreText);
    setFeedbackText(newFeedbackText);
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div>
      <Header>
        <Img src={chevron_left} alt="chevron_left" onClick={BackButton} />
        <BoldTitle>과제 1</BoldTitle>
      </Header>
      <MainContainer>
        <LeftContainer>
          <TestImg src={test} alt="test" />
          <CorrectImg1 src={Test_Correct} alt="Test_Correct" />
          <WrongImg src={Test_Wrong} alt="Test_Wrong" />
          <CorrectImg2 src={Test_Correct} alt="Test_Correct" />
        </LeftContainer>

        <RightContainer>
          <Title>점수</Title>
          <SettingBox>
            {isEditing ? (
              <input
                type="text"
                value={newScoreText}
                onChange={(e) => setNewScoreText(e.target.value)}
              />
            ) : (
              <SmallTitle>{scoreText}</SmallTitle>
            )}
          </SettingBox>
          <DivideLine />
          <SettingBox>
            <SmallTitle>피드백</SmallTitle>
            {isEditing ? (
              <textarea
                value={newFeedbackText}
                onChange={(e) => setNewFeedbackText(e.target.value)}
                style={{
                  resize: "none",
                  backgroundColor: "lightgray",
                  borderRadius: "5px",
                }}
              />
            ) : (
              <BlueText>틀린 문제 : {feedbackText}</BlueText>
            )}
          </SettingBox>
          <Button>
            {isEditing ? (
              <ModifyButton onClick={handleSaveButtonClick}>저장</ModifyButton>
            ) : (
              <ModifyButton onClick={handleEditButtonClick}>
                채점 수정
              </ModifyButton>
            )}
            <CheckButton onClick={BackButton}>확인</CheckButton>
          </Button>
        </RightContainer>
      </MainContainer>
    </div>
  );
}

export default StudentTaskDetail;
