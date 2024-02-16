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

    const { paramsGroupId, paramsUserId } = useParams();
    const location = useLocation();
    const info = location.state;
  

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

    //저장하기 
    //자기평가 질문 생성 POST API
    const handleSave = async () => {
        try {
            const response = await instance.post(`/api/self-eval-question/${paramsGroupId}`, {
                question: questions
            });

            if (response.data.code === 201) {
                alert(response.data.message); 
                setIsVisible(false); // 성공하면 창 닫기
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
  
    return (
      <S.SmallContainer>
        <S.Dropdown onChange={handleGroupChange} value={group}>
          <option value="">그룹을 선택해주세요.</option>
            {groups.map((g) => (
             <option key={g.id} value={g.id}>{g.name}</option>
          ))}
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
          <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
        </div>
      </S.ButtonContainer>
      </S.SmallContainer>
    );
  };
  
  export default SelfEvaluation;