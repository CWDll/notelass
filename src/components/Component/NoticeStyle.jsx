import styled from "styled-components";

export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 16px;
  margin-left: 32px;
  font-size: 20px;
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

export const DetailText = styled.p`
  color: var(--cool-grayscale-placeholder, #9ea4aa);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  position: absolute;
  margin-left: 582px;
  margin-top: 36px;
`;

export const Img = styled.img`
  width: 12px;
  height: 12px;

  margin-top: 39px;
  margin-left: 360px;
`;

export  const SelectButton = styled.button`
  display: flex;
  height: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--primary-light-cobalt, #EDEDFF);
  margin-left:${props => props.isFirst ? '27' : '8'}px;
  margin-top: 37px;

  &:focus {
    outline: none;
  }

  color: var(--primary-cobalt, #4849FF);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;

`;
