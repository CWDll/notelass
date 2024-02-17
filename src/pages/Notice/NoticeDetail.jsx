import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { getAllNotice } from "../../assets/api/apis/notice/ApiNotice";
import NoticeDetailcard from "../../components/Component/DetailPage/NoticeDetailcard";

function NoticeDetail() {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getAllNotice(setNotices);
    console.log(notices);
  }, []);

  function BackButton() {
    navigate(-1);
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
          총 <S.ColoredBoldText>{notices.length}</S.ColoredBoldText>개
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
        {/* 디자인 테스트용 컴포넌트
        <NoticeDetailcard /> */}
        {notices.map((notice) => (
          <NoticeDetailcard
            key={notice.id}
            title={notice.title}
            content={notice.content}
            teacher={notice.teacher}
            createdDate={notice.createdDate}
          />
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default NoticeDetail; // 'default' 키워드 확인
