import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from "../../../assets/exit.svg";
import * as S from "src/components/Component/Group/Style/SelfEvaluationStyle";
import instance from "src/assets/api/axios";

const SelfEvaluation = ({ setIsEditing ,id}) => {
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [questions, setQuestions] = useState([""]);
  const [isVisible, setIsVisible] = useState(true);
  const [question, setQuestion] = useState("");
  // const [isEditing, setIsEditing] = useState(false);

  console.log("자기평가 반 id: ", id);

  //그룹 선택
  const handleGroupChange = (event) => {
    setGroup(event.target.value);
    fetchQuestions(event.target.value);
  };

  //질문 추가
  const addQuestion = () => {
    setQuestions(questions.concat(""));
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
      // 그룹 선택 확인
      if (!group) {
        alert("그룹을 선택해주세요.");
        return;
      }

      // 공백 질문 확인
      const hasEmptyQuestion = questions.some((q) => !q || q.trim() === "");
      if (hasEmptyQuestion) {
        alert("모든 질문란을 채워주세요.");
        return;
      }

      // questions 배열을 API에서 요청한 키-문자열 값 형태로 변환한다.
      const formattedQuestions = questions.map((question) => ({ question }));

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
        setIsEditing(true);
        setIsVisible(false);
      } else {
        alert("자기 평가 질문 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("자기 평가 질문 생성에 실패했습니다.", error);
      alert("자기 평가 질문 생성 중 문제가 발생했습니다.");
    }
  };



  //질문 목록 GET API
  const fetchQuestions = async (id) => {
    try {
      const response = await instance.get(`/api/self-eval-question/${id}`);
      if (response.data.code === 200) {
        const newQuestions = response.data.result.map((item) => item.question);
        setQuestions(newQuestions);
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
    <S.SmallContainer>
      
      <S.ExitButton
        style={{ margin: "24px" }}
        src={exit}
        alt="exit"
        onClick={handleClose}
      />

      <S.Label>질문</S.Label>
      <S.ContentContainer>
        {questions.map((questions, index) => (
          <S.QuestionInputContainer key={index}>
            <S.StyledInput
              type="text"
              placeholder={`질문 ${index + 1}을 입력해주세요.`}
              value={questions}
              onChange={(e) => handleQuestionChange(e.target.value, index)}
            />
          </S.QuestionInputContainer>
        ))}
      </S.ContentContainer>

      <S.ButtonContainer>
        <S.AddButton onClick={addQuestion}>문항 추가</S.AddButton>
        <div>
          <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
          <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
        </div>
      </S.ButtonContainer>
    </S.SmallContainer>
  );
};

export default SelfEvaluation;
