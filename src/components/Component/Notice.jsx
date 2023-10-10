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
} from "./NoticeStyle";
import envelope from "../../assets/envelope.svg";
import envelopeOpen from "../../assets/envelopeOpen.svg";
import chevron_right from "../../assets/chevron_right.svg";

function Notice() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/NoticeDetail");
  };
  const timetable = () => {
    navigate("/TimeTable");
  };
  const mealtable = () => {
    navigate("/MealTable");
  };
  

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
        <SelectButton $isFirst>학교 주요 공지</SelectButton>
        <SelectButton onClick={timetable} >시간표</SelectButton>
        <SelectButton onClick={mealtable}>오늘의 급식</SelectButton>
        <DetailText
          style={{ "text-decoration": "underline" }}
          onClick={onClick} >
          전체보기
        </DetailText>
        <Img src={chevron_right} alt="chevron_right" />
      </HeadingRow>
      
        <LeftHeading>내가 올린 공지/과제/강의자료</LeftHeading>
      
      <NoticeBody>
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
      </NoticeBody>
    </StyledContainerBox>
  );
}

export default Notice;
