import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";

function NoticeDetailcard({
  title,
  content,
  teacher,
  createdDate,
  groupId,
  id,
}) {
  const navigate = useNavigate();
  // 날짜 형식을 원하는 형태로 변환하는 함수 (예: '2024-02-04T12:00:00' -> '2024.02.04')
  const formatDate = (date) => {
    const handledDate = new Date(date);
    return `${handledDate.getFullYear()}.${
      handledDate.getMonth() + 1
    }.${handledDate.getDate()}`;
  };

  const MoveToDetail = () => {
    navigate(`/NoticeDetail/${groupId}/${id}`);
  };

  return (
    <S.ItemWrapper onClick={MoveToDetail}>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.ContentContainer>
      <S.ItemInfo>
        <S.SmallText>{teacher} 선생님</S.SmallText>
        <S.SmallText>{formatDate(createdDate)}</S.SmallText>
      </S.ItemInfo>
    </S.ItemWrapper>
  );
}

export default NoticeDetailcard;
