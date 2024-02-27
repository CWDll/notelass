import React, { useState, useEffect } from "react";
import * as S from "./style";
import instance from "../../../../assets/api/axios";
import exit from "../../../../assets/exit.svg";

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

  const handleClose = () => {
    setShowSmallContainer(!showSmallContainer);
  };

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
    console.log("post전 payload", payload);
    try {
      const res = await instance.post(
        `/api/self-eval-answer/${groupId}`,
        payload
      );
      if (res.status === 201) {
        console.log("답변 저장 성공");
        alert("자기평가 답변이 저장되었습니다.");
        console.log("post후 payload", payload);
        setShowSmallContainer(!showSmallContainer);
      } else {
        console.log("답변 저장 실패");
      }
    } catch (error) {
      console.error("답변 저장 에러 발생", error);
    }
  };

  const handleEdit = async () => {
    const existingAnswers = [];
    const newAnswers = [];

    // 기존 답변과 새로운 답변을 구분하여 분류
    evalList.forEach((question) => {
      const answer = answers[question.questionId];
      if (question.answerId !== null) {
        existingAnswers.push({
          id: question.answerId,
          answer: answer,
        });
      } else if (answer !== undefined && answer !== "") {
        newAnswers.push({
          id: question.questionId,
          answer: answer,
        });
      }
    });

    console.log("existingAnswers", existingAnswers);
    console.log("newAnswers", newAnswers);

    try {
      // PUT 요청으로 기존 답변 수정
      const putRes = await instance.put(
        `/api/self-eval-answer/${groupId}`,
        existingAnswers
      );
      if (putRes.data.code === 200) {
        //console.log("자기평가 답변 수정이 완료되었습니다.");
        //alert("자기평가 답변 수정이 완료되었습니다.");
        //setShowSmallContainer(!showSmallContainer);
      } else {
        console.log("기존 자기평가 답변 수정 실패");
      }

      // POST 요청으로 새로운 답변 작성
      if (newAnswers.length > 0) {
        const postRes = await instance.post(
          `/api/self-eval-answer/${groupId}`,
          newAnswers
        );
        console.log("답변:", postRes.data);
        if (postRes.status === 201) {
          console.log("새로운 자기평가 답변 저장 성공");
          //alert("새로운 자기평가 답변 저장 성공");
          // 새로운 답변을 서버로부터 받은 ID와 함께 업데이트
          const newAnswerIds = postRes.data.result;
          newAnswers.forEach((answer, index) => {
            answer.id = newAnswerIds[index];
          });
        } else {
          console.log("새로운 자기평가 답변 저장 실패");
        }
      }
      alert("자기평가 답변 수정이 완료되었습니다.");
      setShowSmallContainer(!showSmallContainer);
    } catch (error) {
      console.error("자기평가 답변 수정 에러 발생", error);
    }
  };

  return (
    <S.SelfEvalModalContainer>
      <S.TopBar>
        <S.ExitButton
          style={{ marginRight: "40px", marginTop: "4px" }}
          src={exit}
          alt="exit"
          onClick={handleClose}
        />
        <S.BigTitle>자기평가서</S.BigTitle>
      </S.TopBar>
      <S.SelfEvalList>
        {evalList.map((question, index) => (
          <S.SelfEvalContent key={index}>
            <S.SelfEvalQuestion>
              {index + 1}. {question.question}
            </S.SelfEvalQuestion>
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
        <S.GrayButton
          onClick={() => setShowSmallContainer(!showSmallContainer)}
        >
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
