import styled from "styled-components";

export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

export const StyledContainerBox = styled.div`
  width: 684px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
`;

export const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "#9EA4AA" : "inherit")};
`;

export const HeadingRow = styled.div`
  display: flex;
  font-weight: bold;
  size: 20px;
`;

export const LeftHeading = styled.h2`
  margin-right: 15px;
  size: 15px;
`;

export const GrayText = styled.p`
  color: gray;
  font-size: 10px;
  /* text-decoration: underline; */
`;

export const MainNoticeContainer = styled.div`
  width: 905px;
  height: 400px;
  background-color: white;
  margin-right: 89px;
  display: flex;
  flex-direction: column;
`;

export const NoticeContent = styled.div`
  display: flex;
  gap: 10px;
`;
