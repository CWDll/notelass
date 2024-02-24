import React, { useState, useEffect } from "react";
import * as S from "./style";
import instance from "../../../../assets/api/axios";

function StudentSelfEvalContent({
  groupId,
  setShowSmallContainer,
  showSmallContainer,
}) {
  console.log("SSEC groupId", groupId);
  // 선생님이 쓴 질문 리스트
  const [evalList, setEvalList] = useState([]);
  // 학생의 답변 객체
  const [answers, setAnswers] = useState({});
  const [isEditing, setIsEditing] = useState(false);



  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const fetchEvalData = async () => {
      try {
        const res = await instance.get(`/api/self-eval-answer/${groupId}`);
        if (res.status === 200) {
          setEvalList(res.data.result);
          
          //답변 여부 설정
          const initialAnswers = {};
          let answerExists = false; 
          res.data.result.forEach((item) => {
            if (item.answer) { 
              initialAnswers[item.questionId] = item.answer;
              answerExists = true; 
            }
          });
          setAnswers(initialAnswers);
          if (answerExists) { 
            setIsEditing(true);
          }
        } else {
          console.log("질문 및 답변 조회 실패");
        }
      } catch (error) {
        console.error("질문 및 답변 조회 에러 발생", error);
      }
    };
    fetchEvalData();
  }, [groupId]);


  // 자기평가 답변
  const handleSubmit = async () => {
    const payload = Object.keys(answers).map((key) => ({
      id: key,
      answer: answers[key],
    }));

    try {
      const res = await instance.post(
        `/api/self-eval-answer/${groupId}`,
        payload
      );
      if (res.status === 201) {
        console.log("답변 저장 성공");
      } else {
        console.log("답변 저장 실패");
      }
    } catch (error) {
      console.error("답변 저장 에러 발생", error);
    }
  };

   const handleEdit = async () => {
    const payload = evalList.map((question) => ({
      id: question.answerId,
      answer: answers[question.questionId] || '', 
    }));
  
    try {
      const res = await instance.put(`/api/self-eval-answer/${groupId}`, payload);
      if (res.data.code === 200) {
        console.log("자기평가 답변 수정이 완료되었습니다.");
        setIsEditing(false);
      } else {
        console.log("자기평가 답변 수정 실패");
      }
    } catch (error) {
      console.error("자기평가 답변 수정 에러 발생", error);
    }
  };

  


return (
  <S.SelfEvalModalContainer>
    <S.TopBar>
      <S.BigTitle>자기평가서</S.BigTitle>
    </S.TopBar>
    <S.SelfEvalList>
      {evalList.map((question, index) => (
        <S.SelfEvalContent key={index}>
          <S.SelfEvalQuestion>{question.question}</S.SelfEvalQuestion>
          <S.SelfEvalInput
            placeholder="음슴체로 작성해주세요."
            value={answers[question.questionId] || ""}
            onChange={(e) =>
              handleAnswerChange(question.questionId, e.target.value)
            }
          />
        </S.SelfEvalContent>
      ))}
    </S.SelfEvalList>
    <S.ButtonContainer>
      <S.GrayButton onClick={() => setShowSmallContainer(!showSmallContainer)}>
        취소
      </S.GrayButton>
      {isEditing ? (
        <S.Button onClick={handleEdit}>수정하기</S.Button>
      ) : (
        <S.Button onClick={handleSubmit}>저장하기</S.Button>
      )}
    </S.ButtonContainer>
  </S.SelfEvalModalContainer>
);
}

export default StudentSelfEvalContent;
