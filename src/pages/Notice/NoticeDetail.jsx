import React, { useState } from "react";
import * as S from "./style";

function NoticeDetail() {
  function BackButton() {
    alert("백 버튼 클릭 이벤트 발생!");
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Breadcrumb onClick={BackButton}>
        <S.Img alt="chevron_left" />
        <S.BoldText>공지/과제/강의자료</S.BoldText>
      </S.Breadcrumb>
      <S.TopBar>
        <S.BoldText>총 4개</S.BoldText>
        <S.SearchInput>
          <S.DropdownContainer>
            <S.DropdownButton onClick={() => setIsOpen(!isOpen)}>
              제목
            </S.DropdownButton>
            <S.DropdownContent isOpen={isOpen}>
              <S.DropdownItem>제목</S.DropdownItem>
              <S.DropdownItem>내용</S.DropdownItem>
            </S.DropdownContent>
          </S.DropdownContainer>
          <S.Input />
          <S.SearchButton>찾기</S.SearchButton>
        </S.SearchInput>
      </S.TopBar>
      <S.ItemsContainer></S.ItemsContainer>
    </S.Container>
  );
}

export default NoticeDetail; // 'default' 키워드 확인
