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

  // 자기평가 질문 조회
  useEffect(() => {
    const ViewSelfEvalList = async () => {
      try {
        const res = await instance.get(`/api/self-eval-question/${groupId}`);

        if (res.status === 200) {
          console.log("자기평가 질문 조회 성공"); // 데이터를 콜백함수를 통해 전달한다.
          console.log("자기평가 질문 조회 확인", res.data.result);
          setEvalList(res.data.result);

          const initialAnswers = {};
          res.data.result.forEach((question) => {
            initialAnswers[question.id] = "";
          });
          setAnswers(initialAnswers);
        } else {
          console.log("자기평가 질문 조회 실패");
        }
      } catch (error) {
        console.error("자기평가 질문 조회 에러 발생", error);
      }
    };
    ViewSelfEvalList();
  }, [groupId]);

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

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

  return (
    <S.SelfEvalModalContainer>
      <S.TopBar>
        <S.BigTitle>자기평가서</S.BigTitle>
      </S.TopBar>
      <S.SelfEvalList>
        {evalList.map((question, index) => (
          <S.SelfEvalContent>
            <S.SelfEvalQuestion>{question.question}</S.SelfEvalQuestion>
            <S.SelfEvalInput
              placeholder="음슴체로 작성해주세요."
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            />
          </S.SelfEvalContent>
        ))}
      </S.SelfEvalList>
      <S.ButtonContainer>
        <S.GrayButton
          onClick={() => setShowSmallContainer(!showSmallContainer)}
        >
          취소
        </S.GrayButton>
        <S.Button onClick={handleSubmit}>저장하기</S.Button>
      </S.ButtonContainer>
    </S.SelfEvalModalContainer>
  );
}

export default StudentSelfEvalContent;
