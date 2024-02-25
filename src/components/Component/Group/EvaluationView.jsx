import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from '../../../assets/exit.svg';
import * as S from 'src/components/Component/Group/Style/EvaluationViewStyle';
import instance from "src/assets/api/axios";

const EvaluationView = ({paramsGroupId,paramsUserId}) => {
    const [questions, setQuestions] = useState([]); 
    const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  // console.log("location: ", location);
  const info = location.state;
  // console.log("info:", info);

  console.log("paramsGroupId:", paramsGroupId);
    console.log("paramsUserId:", paramsUserId);

    
  //test 드래그 관련 상태
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

    //질문 조회 GET API 
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await instance.get(`/api/self-eval-answer/${paramsGroupId}/${paramsUserId}`);
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
    }, [paramsGroupId, paramsUserId]); 

    //창 닫기
    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <S.SmallContainer
                x={position.x}
                y={position.y}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={handleMouseDown}
                onMouseMove={isDragging ? handleMouseMove : null}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // 드래그 중 컴포넌트를 벗어났을 때
                >
            <S.ExitButton style={{margin: "24px"}} src={exit} alt="exit" onClick={handleClose} />
            <S.Label>자기평가서</S.Label>
            <S.Question>
            {questions.map((questionObj, index) => (
                <div key={questionObj.questionId}>
                    <S.Title>{index + 1}. {questionObj.question}</S.Title>
                    <S.Box>{questionObj.answer || '답변이 등록되지 않았습니다.'}</S.Box>
                </div>
            ))}
            </S.Question>

        </S.SmallContainer>
    );
};

export default EvaluationView;