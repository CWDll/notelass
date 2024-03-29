import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from "../../../assets/exit.svg";
import * as S from "src/components/Component/Group/Style/SelfEvaluationStyle";
import instance from "src/assets/api/axios";

const SelfEvaluation = ({id}) => {
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  //const [questions, setQuestions] = useState([""]);
  const [questions, setQuestions] = useState([{ id: null, question: "" }]);
  const [isVisible, setIsVisible] = useState(true);
  const [question, setQuestion] = useState("");
  const [isEditing, setIsEditing] = useState(false);




  console.log("자기평가 반 id: ", id);

  const allQuestionsFilled = () => {
    return questions.every((q) => q.question && q.question.trim() !== "");
  };

     
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

 

// 질문 추가
const addQuestion = () => {
  setQuestions([...questions, { id: Date.now(), question: "", isNew: true }]);
};

  //창 닫기
  const handleClose = () => {
    setIsVisible(false);
  };

 
  //저장하기
const handleQuestionChange = (value, id) => {
  const newQuestions = questions.map((item) =>
    item.id === id ? { ...item, question: value, isModified: true } : item
  );
  setQuestions(newQuestions);
};
  const handleSave = async () => {
    try {
      

      // 공백 질문 확인
      const hasEmptyQuestion = questions.some((q) => !q.question || q.question.trim() === "");
    if (hasEmptyQuestion) {
      alert("모든 질문란을 채워주세요.");
      return;
    }

      // questions 배열을 API에서 요청한 키-문자열 값 형태로 변환한다.
      const formattedQuestions = questions.map((question) => ({ question: question.question }));
      const response = await instance.post(
        `/api/self-eval-question/${id}`,
        formattedQuestions
      );

      if (response.data.code === 201) {
        console.log(`그룹 ID: ${id}`);
        questions.forEach((question, index) => {
          console.log(`질문 ${index + 1}: ${question}`);
        });
        alert(response.data.message);
        console.log(setIsEditing);
        setIsVisible(false);
      } else {
        alert("자기 평가 질문 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("자기 평가 질문 생성에 실패했습니다.", error);
      alert("자기 평가 질문 생성 중 문제가 발생했습니다.");
    }
  };

  // 수정하기
const editQuestion = async () => {
  try {
    // 공백 질문 확인
    const hasEmptyQuestion = questions.some((q) => !q.question || q.question.trim() === "");
    if (hasEmptyQuestion) {
      alert("모든 질문란을 채워주세요.");
      return;
    }

    // 새로운 질문과 수정된 질문을 분리
    const newQuestions = questions.filter((q) => q.isNew);
    const modifiedQuestions = questions.filter((q) => !q.isNew && q.isModified);

    // 새로운 질문 POST 요청
    if (newQuestions.length > 0) {
      const formattedNewQuestions = newQuestions.map((question) => ({ question: question.question }));
      const postResponse = await instance.post(
        `/api/self-eval-question/${id}`,
        formattedNewQuestions
      );
      if (postResponse.data.code !== 201) {
        throw new Error("새 질문 생성에 실패했습니다.");
      }
    }

    // 수정된 질문 PUT 요청
    if (modifiedQuestions.length > 0) {
      const putResponse = await instance.put(`/api/self-eval-question/${id}`, modifiedQuestions);
      if (putResponse.data.code !== 200) {
        throw new Error("질문 수정에 실패했습니다.");
      }
    }

    alert("질문이 성공적으로 수정되었습니다.");
    setIsVisible(false);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};



 

  //질문 목록 GET API
  const fetchQuestions = async (id) => {
    try {
      const response = await instance.get(`/api/self-eval-question/${id}`);
      if (response.data.code === 200) {
        // 서버에서 받아온 질문의 id와 내용을 저장합니다.
        setQuestions(response.data.result);
        if (response.data.result.length > 0) {
          setIsEditing(true);
        }
      } else {
        console.error("질문을 불러오는데 실패했습니다.");
      }
    } catch (error) {
      console.error("질문 조회 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchQuestions(id);
}, [id]);

  if (!isVisible) return null;

  return (
    <S.SmallContainer
      onClick={(e) => e.stopPropagation()}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : null}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // 드래그 중 컴포넌트를 벗어났을 때
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      
      <S.ExitButton
        style={{ margin: "24px" }}
        src={exit}
        alt="exit"
        onClick={handleClose}
      />

      <S.Label>질문</S.Label>
      <S.ContentContainer>
      {questions.map((item, index) => (
  <S.QuestionInputContainer key={item.id}>
    <S.StyledInput
      type="text"
      placeholder={`질문 ${index + 1}을 입력해주세요.`}
      value={item.question} 
      onChange={(e) => handleQuestionChange(e.target.value, item.id)}
    />
  </S.QuestionInputContainer>
))}
      </S.ContentContainer>

      <S.ButtonContainer>
        <S.AddButton onClick={addQuestion}>문항 추가</S.AddButton>
        <div>
          <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
          {isEditing ? (
            <S.SaveButton onClick={editQuestion} disabled={!allQuestionsFilled()}>수정하기</S.SaveButton>
          ) : (
            <S.SaveButton onClick={handleSave} disabled={!allQuestionsFilled()}>저장하기</S.SaveButton>
          )}
        </div>
      </S.ButtonContainer>
    </S.SmallContainer>
  );
};

export default SelfEvaluation;