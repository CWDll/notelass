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
`;

export const LeftHeading = styled.p`
  
  size: 15px;
  padding-top: 32px; 
  padding-left: 32px; 
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MidHeading = styled.p`
  size: 15px;
  padding-top: 40px; 
  padding-left: 12px; 
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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



export const NoticeBody = styled.div`  
  width: 684px;
  height: 48px;
  margin-top: 28px;
  flex-shrink: 0;

`;

export const NoticeContent = styled.div`
  display: flex; 
  
  
  img {
    padding-top: 12px;
    padding-left: 32px;
  }
`;



export const NoticeTitle = styled.div`

  padding-top: 13px;
  padding-left: 16px; 
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
