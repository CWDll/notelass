import React, { useState } from "react";
import styled from "styled-components";
import envelope from "../../../assets/envelope.svg";
import envelopeOpen from "../../../assets/envelopeOpen.svg";

export const StyledContainerBox = styled.div`
  width: 684px;
  /* height: 400px; */
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  /* box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05); */
`;

export const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "#9EA4AA" : "inherit")};
`;

export const LeftHeading = styled.p`
  size: 15px;
  margin-top: 16px;
  margin-left: 32px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NoticeContent = styled.div`
  display: flex;

  img {
    padding-top: 12px;
    padding-left: 32px;
  }
`;

export const NoticeBody = styled.div`
  width: 684px;
  height: 48px;
  /* margin-top: 28px; */
  flex-shrink: 0;
`;

export const NoticeTitle = styled.div`
  padding-top: 13px;
  padding-left: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
    <StyledContainerBox>
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
