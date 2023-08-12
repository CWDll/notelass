import React, { useState } from "react";
import {
  NoticeContainer,
  StyledTaskBox,
  StyledNoticeItem,
  HeadingRow,
  LeftHeading,
} from "./NoticeStyle";

function Notice() {
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
    <NoticeContainer>
      <StyledTaskBox>
        <HeadingRow>
          <LeftHeading>공지/과제</LeftHeading>
          <h2>읽지 않은 공지가 있습니다</h2>
        </HeadingRow>
        <ul>
          {postContent.map((content, index) => (
            <StyledNoticeItem
              key={index}
              isClicked={clickedIndices.has(index)}
              onClick={() => handleOnClick(index)}
            >
              {content}
            </StyledNoticeItem>
          ))}
        </ul>
      </StyledTaskBox>
    </NoticeContainer>
  );
}

export default Notice;