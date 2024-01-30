import React from "react";
import * as S from "./style";

function StudentLine() {
  return (
    <S.LineContainer>
      <S.BoldTitle>1</S.BoldTitle>
      <S.StudentInfoText>
        <S.BoldTitle>학생 이름</S.BoldTitle>
        <S.AcceptAll>노트고등학교 / 3학년 1반</S.AcceptAll>
      </S.StudentInfoText>
      <S.RefuseButton>거절</S.RefuseButton>
      <S.AcceptButton>수락</S.AcceptButton>
    </S.LineContainer>
  );
}

export default StudentLine;
