import React from "react";
import * as S from "./style";

function NoticeDetailcard() {
  return (
    <S.ItemWrapper>
      <S.ContentContainer>
        <S.Title>[공지] 안녕하세요. 일정 공유 드립니다.</S.Title>
        <S.Content>내용입니다.</S.Content>
      </S.ContentContainer>
      <S.ItemInfo>
        <S.Views>조회 24</S.Views>
        <S.SmallText>김태연 선생님</S.SmallText>
        <S.SmallText>2024.02.04</S.SmallText>
      </S.ItemInfo>
    </S.ItemWrapper>
  );
}

export default NoticeDetailcard;
