import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "./style";
import NoticeDetailContent from "../../components/Component/DetailPage/NoticeDetailContent";
import { useEffect } from "react";

function NoticeDetail() {
  const navigate = useNavigate();
  const { groupId, noticeId } = useParams(); // groupId 매개변수 받기

  const location = useLocation();
  const info = location;

  //뒤로가기
  function BackButton() {
    navigate(-1);
  }

  return (
    <S.Container>
      <S.Breadcrumb onClick={BackButton}>
        <S.Img alt="chevron_left" onClick={BackButton} />
        <S.BoldText onClick={BackButton}>공지/과제/강의자료</S.BoldText>
      </S.Breadcrumb>
      <NoticeDetailContent noticeId={noticeId} />
    </S.Container>
  );
}

export default NoticeDetail;
