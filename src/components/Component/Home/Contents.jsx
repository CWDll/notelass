import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledContainerBox,
  StyledNoticeItem,
  HeadingRow,
  LeftHeading,
  NoticeContent,
  NoticeBody,
  NoticeTitle,
  DetailText,
  Img,
  SelectButton,
} from "./Style/NoticeStyle";
import envelope from "../../../assets/envelope.svg";
import envelopeOpen from "../../../assets/envelopeOpen.svg";
import chevron_right from "../../../assets/chevron_right.svg";
import Notice from "./Notice";
import MealTable from "../Table/MealTable";
import TimeTable from "../Table/TimeTable";

function Contents() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("notices");
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  const onClick = () => {
    navigate("/NoticeDetail");
  };

  // TimeTable 목데이터

  const scheduleData = [
    {
      date: "오늘, 9/18 화요일",
      periods: ["3-7", "3-2", "3-1", "3-3", "3-5", "3-4", "3-6", "3-8"],
    },
    {
      date: "내일, 9/19 수요일",
      periods: ["3-1", "3-6", "3-4", "3-2", "3-3", "3-8", "3-5", "3-7"],
    },
    // ... 다른 날짜 및 기간들
  ];

  const [clickedIndices, setClickedIndices] = useState(new Set());

  const postContent = [
    "Notice 1",
    "Notice 2",
    "Notice 3",
    "Notice 4",
    "Notice 5",
  ];

  const handleOnClick = (index) => {
    setClickedIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (!newIndices.has(index)) {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  return (
    <StyledContainerBox>
      <HeadingRow>
        <SelectButton $isFirst onClick={() => changeTab("notices")}>
          학교 주요 공지
        </SelectButton>
        <SelectButton onClick={() => changeTab("timetable")}>
          시간표
        </SelectButton>
        <SelectButton onClick={() => changeTab("mealtable")}>
          오늘의 급식
        </SelectButton>
        <DetailText
          style={{ "text-decoration": "underline" }}
          onClick={onClick}
        >
          전체보기
        </DetailText>
        <Img src={chevron_right} alt="chevron_right" />
      </HeadingRow>

      {/* <LeftHeading>내가 올린 공지/과제/강의자료</LeftHeading> */}

      {/* <NoticeBody>
        {postContent.map((content, index) => (
          <StyledNoticeItem
          key={index}
            isClicked={clickedIndices.has(index)}
            onClick={() => handleOnClick(index)}
          >
            <NoticeContent>
              <img
                src={clickedIndices.has(index) ? envelopeOpen : envelope}
                alt="envelope"
              />
              <NoticeTitle>{content}</NoticeTitle>
            </NoticeContent>
          </StyledNoticeItem>
        ))}
      </NoticeBody> */}
      <NoticeBody>
        {activeTab === "notices" && <Notice />}
        {activeTab === "timetable" && <TimeTable schedule={scheduleData} />}
        {activeTab === "mealtable" && <MealTable />}
      </NoticeBody>
    </StyledContainerBox>
  );
}

export default Contents;
