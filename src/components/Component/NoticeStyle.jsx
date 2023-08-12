import styled from "styled-components";

export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTaskBox = styled.div`
  height: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  padding: 18px;
`;

export const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "red" : "inherit")};
`;

export const HeadingRow = styled.div`
  display: flex;
`;

export const LeftHeading = styled.h2`
  margin-right: 15px;
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
