import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from '../../../assets/exit.svg';
import * as S from 'src/components/Component/Group/Style/EvaluationViewStyle';
import instance from "src/assets/api/axios";

const SelfEvaluation = () => {
    const [questions, setQuestions] = useState([]); 
    const [isVisible, setIsVisible] = useState(true);
    const { paramsGroupId, paramsUserId } = useParams();
  const location = useLocation();
  // console.log("location: ", location);
  const info = location.state;
  // console.log("info:", info);

    //질문 조회 GET API 
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await instance.get(`/api/self-eval-question/${paramsGroupId}`);
                if (response.data.code === 200) {
                    setQuestions(response.data.result);
                    console.log('Fetched questions:', response.data.result);
                } else {
                    console.error('Failed to fetch questions:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [paramsGroupId]); 

    //창 닫기
    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <S.SmallContainer>
            <S.ExitButton style={{margin: "24px"}} src={exit} alt="exit" onClick={handleClose} />
            <S.Label>자기평가서</S.Label>
            <S.Question>
            {questions.map((questionObj, index) => (
                <div key={questionObj.id}>
                    <h3>{index + 1}. {questionObj.question}</h3>
                    <S.Box>답변</S.Box>
                </div>
            ))}
            </S.Question>
        </S.SmallContainer>
    );
};

export default SelfEvaluation;