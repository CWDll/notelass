import React, { useState } from "react";
import * as S from "./style";
import NoticeDetailcard from "../../components/Component/DetailPage/NoticeDetailcard";

function NoticeDetail() {
  function BackButton() {
    alert("백 버튼 클릭 이벤트 발생!");
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Breadcrumb>
        <S.Img alt="chevron_left" onClick={BackButton} />
        <S.BoldText onClick={BackButton}>공지/과제/강의자료</S.BoldText>
      </S.Breadcrumb>
      <S.TopBar>
        <S.BoldText>
          총 <S.ColoredBoldText>4</S.ColoredBoldText>개
        </S.BoldText>
        <S.SearchInput>
          <S.DropdownContainer>
            <S.DropdownButton onClick={() => setIsOpen(!isOpen)}>
              제목
              <S.DownIcon />
            </S.DropdownButton>
            <S.DropdownContent isOpen={isOpen}>
              <S.DropdownItem>제목</S.DropdownItem>
              <S.DropdownItem>내용</S.DropdownItem>
            </S.DropdownContent>
          </S.DropdownContainer>
          <S.Input />
          <S.SearchButton />
        </S.SearchInput>
      </S.TopBar>
      <S.ItemsContainer>
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
        <NoticeDetailcard />
      </S.ItemsContainer>
    </S.Container>
  );
}

export default NoticeDetail; // 'default' 키워드 확인
