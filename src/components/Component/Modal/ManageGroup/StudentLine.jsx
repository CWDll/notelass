import React from "react";
import * as S from "./style";
import {
  groupAccept,
  groupReject,
} from "../../../../assets/api/apis/group/ApiGroup";

function StudentLine({ student, index, groupId }) {
  return (
    <S.LineContainer>
      {/* 학생의 순서를 나타내는 index를 표시 */}
      <S.BoldTitle>{index}</S.BoldTitle>
      <S.StudentInfoText>
        {/* 학생 정보 표시 */}
        <S.BoldTitle>{student.name}</S.BoldTitle>
        <S.SchoolInfo>
          {student.school} / {student.grade}학년 {student.classNum}반
        </S.SchoolInfo>
      </S.StudentInfoText>
      <S.RefuseButton onClick={groupReject(groupId, student.useId)}>
        거절
      </S.RefuseButton>
      <S.AcceptButton onClick={groupAccept(groupId, student.useId)}>
        수락
      </S.AcceptButton>
    </S.LineContainer>
  );
}

export default StudentLine;
