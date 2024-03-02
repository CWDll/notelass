import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "./style";
import NoticeDetailContent from "../../components/Component/DetailPage/NoticeDetailContent";
import { useEffect } from "react";

function NoticeDetail() {
  const navigate = useNavigate();
  const { groupId, noticeId } = useParams(); // groupId 매개변수 받기

  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const info = location.state;
  console.log("ND의 info:", info);
  console.log("ㅁㄴㅇ");

  //뒤로가기
  function BackButton() {
    navigate(-1);
  }

  return (
    <S.Container>
      <S.Breadcrumb onClick={BackButton}>
        <S.Img alt="chevron_left" />
        <S.BoldText>공지/학습자료</S.BoldText>
      </S.Breadcrumb>
      <NoticeDetailContent
        noticeId={info.noticeId}
        lectureMaterialId={info.lectureMaterialId}
      />
    </S.Container>
  );
}

export default NoticeDetail;
