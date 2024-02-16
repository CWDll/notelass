import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import exit from '../../../assets/exit.svg';

const SmallContainer = styled.div`
  width: 720px;
  height: 480px; 
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;


`;

const Dropdown = styled.select`
  width: 264px;
  height: 48px;
  border-radius: 8px;
  border: 1.5px solid #d1d1d1;
  padding: 8px 12px;
  margin-top: 24px; 
  margin-left: 24px;
  margin-bottom: 10px; 
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 30px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Label = styled.p`
  width: 28px;
  height: 19px;
  margin-top: 24px; 
  margin-left: 24px; 
  margin-bottom: 8px; 
`;

const StyledInput = styled.input`
  width: 100%;
  height: 53px;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 24px 20px;
`;

const CancelButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: #ccc; 
  color: white;
  cursor: pointer;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

const SaveButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color:  #ccc;
  color: white;
  cursor: pointer;
  margin-left: 16px;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

const AddButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: #4849ff;
  color: white;
  cursor: pointer;
  margin-left: 280px;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

const QuestionInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 672px;
  margin: 10px 24px;
  position: relative;
  border-radius: 8px;
  border: 1.5px solid #d1d1d1;
`;

const ExitButton = styled.img`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const SelfEvaluation = () => {
    const [group, setGroup] = useState('');
    const [questions, setQuestions] = useState(['']); 
    const [isVisible, setIsVisible] = useState(true);

    //그룹 선택
    const handleGroupChange = (event) => {
      setGroup(event.target.value);
    };

    //질문 추가
    const addQuestion = () => {
      setQuestions(questions.concat('')); 
    };

     //질문 삭제
    const removeQuestion = (index) => {
        setQuestions(questions.filter((_, qIndex) => index !== qIndex));
    };

    //창 닫기
    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

  
    return (
      <SmallContainer>
        <Dropdown onChange={handleGroupChange} value={group}>
          <option value="">그룹을 선택해주세요.</option>
          <option value="group1">그룹 1</option>
          <option value="group2">그룹 2</option>
          <option value="group3">그룹 3</option>
        </Dropdown>

        <ExitButton style ={{margin: "24px" }} src={exit} alt="exit" onClick={handleClose} />

        
        <Label>질문</Label>
        <ContentContainer>
        {questions.map((_, index) => (
          <QuestionInputContainer key={index}>
            <StyledInput type="text" placeholder={`질문 ${index + 1}을 입력해주세요.`} />
            <ExitButton src={exit} alt="exit" onClick={() => removeQuestion(index)} />
          </QuestionInputContainer>
        ))}
      </ContentContainer>
        
        <ButtonContainer>
        <AddButton onClick={addQuestion}>문항 추가</AddButton>
        <div>
          <CancelButton onClick={handleClose} >취소</CancelButton>
          <SaveButton>저장하기</SaveButton>
        </div>
      </ButtonContainer>
      </SmallContainer>
    );
  };
  
  export default SelfEvaluation;