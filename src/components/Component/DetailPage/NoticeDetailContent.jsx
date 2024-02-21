import React from "react";
import * as S from "./style";
import instance from "../../../assets/api/axios";

function NoticeDetailContent(noticeId) {
  console.log(noticeId);
  // 그룹 내에 이미 속해있는 명단 가져오기
  const getStudentList = async () => {
    try {
      const res = await instance.get(
        `/api/notice/detail?noticeId=${noticeId.noticeId}`
      );

      if (res.status === 200) {
        console.log("hi");
        console.log(res.data.result);
      } else {
        console.log("테스트 실패");
      }
    } catch (error) {
      console.error("테스트 에러", error);
    }
  };
  return (
    <S.AssigmentCreateForm>
      <S.Title
        onClick={() => {
          getStudentList();
        }}
      >
        [공지] 테스트용 공지 제목s
      </S.Title>
    </S.AssigmentCreateForm>
  );
}

export default NoticeDetailContent;
