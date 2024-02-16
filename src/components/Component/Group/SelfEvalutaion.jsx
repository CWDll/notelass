import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from '../../../assets/exit.svg';
import * as S from 'src/components/Component/Group/Style/SelfEvaluationStyle';
import instance from "src/assets/api/axios";

const SelfEvaluation = () => {
    const [group, setGroup] = useState('');
    const [groups, setGroups] = useState([]);
    const [questions, setQuestions] = useState(['']); 
    const [isVisible, setIsVisible] = useState(true);
    const [question, setQuestion] = useState('');

  

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


    //저장하기 
    //자기평가 질문 생성 POST API
    const handleQuestionChange = (value, index) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const handleSave = async () => {
        try {

            //그룹 선택 확인
            if (!group) {
                alert('그룹을 선택해주세요.');
                return;
            }

            //공백 질문 확인
            const hasEmptyQuestion = questions.some(q => !q || q.trim() === "");
            if (hasEmptyQuestion) {
                alert('모든 질문란을 채워주세요.');
                return;
            }
            const response = await instance.post(`/api/self-eval-question/${group}`, {
                questions 
            });

            if (response.data.code === 201) {
                console.log(`그룹 ID: ${group}`);
                questions.forEach((question, index) => {
                    console.log(`질문 ${index + 1}: ${question}`);
                });
                alert(response.data.message); 
            } else {
                alert('자기 평가 질문 생성에 실패했습니다.');
            }
        } catch (error) {
            console.error("자기 평가 질문 생성에 실패했습니다.", error);
            alert('자기 평가 질문 생성 중 문제가 발생했습니다.');
        }
    };


    //그룹 목록 GET 
    useEffect(() => {
        const fetchGroups = async () => {
          try {
            const response = await instance.get('/api/group');
            if (response.data && response.data.result) {
              const newGroups = response.data.result.map((g) => ({
                id: g.id,
                name: `${g.grade}학년 ${g.classNum}반` 
              }));
              setGroups(newGroups); 
            }
          } catch (error) {
            console.error("그룹 데이터를 가져오는 중 오류 발생:", error);
          }
        };
  
        fetchGroups();
    }, []);


    if (!isVisible) return null;
  
    return (
      <S.SmallContainer>
        <S.Dropdown onChange={handleGroupChange} value={group}>
          <option value="">그룹을 선택해주세요.</option>
            {groups.map((g) => (
             <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </S.Dropdown>

        <S.ExitButton style ={{margin: "24px"}} src={exit} alt="exit" onClick={handleClose} />

        
        <S.Label>질문</S.Label>
        <S.ContentContainer>
        {questions.map((question, index) => (
          <S.QuestionInputContainer key={index}>
            <S.StyledInput 
                type="text" 
                placeholder={`질문 ${index + 1}을 입력해주세요.`} 
                value={question}
                onChange={(e) => handleQuestionChange(e.target.value, index)} // 질문 입력 처리
            />
            <S.ExitButton src={exit} alt="exit" onClick={() => removeQuestion(index)} />
          </S.QuestionInputContainer>
        ))}
      </S.ContentContainer>
        
        <S.ButtonContainer>
        <S.AddButton onClick={addQuestion}>문항 추가</S.AddButton>
        <div>
          <S.CancelButton onClick={handleClose} >취소</S.CancelButton>
          <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
        </div>
      </S.ButtonContainer>
      </S.SmallContainer>
    );
  };
  
  export default SelfEvaluation;