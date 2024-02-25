import React from "react";
import * as S from "./style";
import {
  groupAccept,
  groupReject,
  getStudentList,
} from "../../../../assets/api/apis/group/ApiGroup";

function StudentLine({ student, index, groupId, userId, setShowEnrollModal }) {
 
 
  const handleAccept = async () => {
    await groupAccept(groupId, userId);
    setShowEnrollModal(false);
  };

  const handleReject = async () => {
    await groupReject(groupId, userId);
    setShowEnrollModal(false);
  };

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
      <S.RefuseButton onClick={handleReject}>
        거절
      </S.RefuseButton>
      <S.AcceptButton onClick={handleAccept}>
        수락
      </S.AcceptButton>
    </S.LineContainer>
  );
}

export default StudentLine;
