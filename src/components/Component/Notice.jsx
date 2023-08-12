import React, { useState } from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTaskBox = styled.div`
  height: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  padding: 18px;
`;

const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "red" : "inherit")};
`;

const HeadingRow = styled.div`
  display: flex;
`;

const LeftHeading = styled.h2`
  margin-right: 15px;
`;

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