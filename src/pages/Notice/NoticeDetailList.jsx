import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "./style";
import {
  getAllNotice,
  getGroupNotice,
} from "../../assets/api/apis/notice/ApiNotice";
import NoticeDetailcard from "../../components/Component/DetailPage/NoticeDetailcard";

function NoticeDetailList() {
  const navigate = useNavigate();
  const { groupId } = useParams(); // groupId 매개변수 받기
  const [notices, setNotices] = useState([]);
  const [searchCategory, setSearchCategory] = useState("제목");
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const info = location.state;
  console.log("gg", info);

  //groupId있으면 그룹 내 공지만, 아니면 전체 공지
  useEffect(() => {
    if (groupId) {
      getGroupNotice(groupId, setNotices);
    } else {
      getAllNotice(setNotices);
    }
  }, []);

  //뒤로가기
  function BackButton() {
    navigate(-1);
  }

  // 검색창 부분
  function handleCategoryClick(newCategory) {
    setSearchCategory(newCategory);
    setIsOpen(!isOpen);
  }

  return (
    <S.Container>
      <S.Breadcrumb>
        <S.Img alt="chevron_left" onClick={BackButton} />
        <S.BoldText onClick={BackButton}>공지/학습자료</S.BoldText>
      </S.Breadcrumb>
      <S.TopBar>
        <S.BoldText>
          총 <S.ColoredBoldText>{notices.length}</S.ColoredBoldText>개
        </S.BoldText>
        <S.SearchInput>
          <S.DropdownContainer>
            <S.DropdownButton onClick={() => setIsOpen(!isOpen)}>
              {searchCategory}
              <S.DownIcon />
            </S.DropdownButton>
            <S.DropdownContent isOpen={isOpen}>
              <S.DropdownItem onClick={() => handleCategoryClick("제목")}>
                제목
              </S.DropdownItem>
              <S.DropdownItem onClick={() => handleCategoryClick("내용")}>
                내용
              </S.DropdownItem>
            </S.DropdownContent>
          </S.DropdownContainer>
          <S.Input />
          <S.SearchButton />
        </S.SearchInput>
      </S.TopBar>
      <S.ItemsContainer>
        {notices.map((notice) => (
          <NoticeDetailcard
            key={notice.id}
            title={notice.title}
            content={notice.content}
            teacher={notice.teacher}
            createdDate={notice.createdDate}
            groupId={groupId}
            id={notice.id}
            info={info}
          />
        ))}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default NoticeDetailList;
