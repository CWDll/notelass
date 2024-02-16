import React, { useState, useEffect } from "react";
import exit from '../../../assets/exit.svg';
import * as S from 'src/components/Component/Group/Style/SelfEvaluationStyle';

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
      <S.SmallContainer>
        <S.Dropdown onChange={handleGroupChange} value={group}>
          <option value="">그룹을 선택해주세요.</option>
          <option value="group1">그룹 1</option>
          <option value="group2">그룹 2</option>
          <option value="group3">그룹 3</option>
        </S.Dropdown>

        <S.ExitButton style ={{margin: "24px" }} src={exit} alt="exit" onClick={handleClose} />

        
        <S.Label>질문</S.Label>
        <S.ContentContainer>
        {questions.map((_, index) => (
          <S.QuestionInputContainer key={index}>
            <S.StyledInput type="text" placeholder={`질문 ${index + 1}을 입력해주세요.`} />
            <S.ExitButton src={exit} alt="exit" onClick={() => removeQuestion(index)} />
          </S.QuestionInputContainer>
        ))}
      </S.ContentContainer>
        
        <S.ButtonContainer>
        <S.AddButton onClick={addQuestion}>문항 추가</S.AddButton>
        <div>
          <S.CancelButton onClick={handleClose} >취소</S.CancelButton>
          <S.SaveButton>저장하기</S.SaveButton>
        </div>
      </S.ButtonContainer>
      </S.SmallContainer>
    );
  };
  
  export default SelfEvaluation;