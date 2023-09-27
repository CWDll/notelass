import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledContainerBox,
  StyledNoticeItem,
  HeadingRow,
  LeftHeading,
  NoticeContent,
  MidHeading,
  NoticeBody,
  NoticeTitle,
  DetailText,
} from "./NoticeStyle";
import envelope from "../../assets/envelope.svg";
import envelopeOpen from "../../assets/envelopeOpen.svg";

function Notice() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/NoticeDetail");
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

  const unReadCount = postContent.length - clickedIndices.size;
  const noticeHeaderText =
    unReadCount > 0 ? (
      <>
        읽지 않은 공지가 <span style={{ color: "blue" }}>{unReadCount}건</span>{" "}
        있습니다.
      </>
    ) : (
      "모든 공지를 읽었습니다."
    );

  return (
    <StyledContainerBox>
      <HeadingRow>
        <LeftHeading>공지/과제</LeftHeading>
        <MidHeading>{noticeHeaderText}</MidHeading>
        <DetailText
          style={{ "text-decoration": "underline" }}
          onClick={onClick}
        >
          전체보기
        </DetailText>
      </HeadingRow>
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
