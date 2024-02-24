import React, { useState, useEffect } from "react";
import * as S from "./style";
import instance from "../../../../assets/api/axios";

function StudentSelfEvalContent({
  groupId,
  setShowSmallContainer,
  showSmallContainer,
}) {
  console.log("SSEC groupId", groupId);
  const [evalList, setEvalList] = useState([]);
  // 자기평가 질문 조회
  useEffect(() => {
    const ViewSelfEvalList = async () => {
      try {
        const res = await instance.get(`/api/self-eval-question/${groupId}`);

        if (res.status === 200) {
          console.log("자기평가 질문 조회 성공"); // 데이터를 콜백함수를 통해 전달한다.
          console.log("자기평가 질문 조회 확인", res.data.result);
          setEvalList(res.data.result);
          return res;
        } else {
          console.log("자기평가 질문 조회 실패");
        }
      } catch (error) {
        console.error("자기평가 질문 조회 에러 발생", error);
      }
    };
    ViewSelfEvalList();
  }, []);

  return (
    <S.SelfEvalModalContainer>
      <S.TopBar>
        <S.BigTitle>자기평가서</S.BigTitle>
      </S.TopBar>
      <S.SelfEvalList>
        {evalList.map((question, index) => (
          <S.SelfEvalContent>
            <S.SelfEvalQuestion>{question.question}</S.SelfEvalQuestion>
            <S.SelfEvalInput placeholder="음슴체로 작성해주세요." />
          </S.SelfEvalContent>
        ))}
      </S.SelfEvalList>
      <S.ButtonContainer>
        <S.GrayButton>취소</S.GrayButton>
        <S.Button>저장하기</S.Button>
      </S.ButtonContainer>
    </S.SelfEvalModalContainer>
  );
}

export default StudentSelfEvalContent;
