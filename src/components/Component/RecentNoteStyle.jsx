import styled from "styled-components";

export const RecentNoteContainer = styled.div`
    width: 684px;
    height: 250px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    position: relative; 
`;

export const Title = styled.p`
    
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 32px; 
    padding-left: 32px; 
`;

export const BoldText = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;

export const GrayText = styled.p`
    color: var(--cool-grayscale-placeholder, #9EA4AA);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;

export const GroupBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HandoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); // 그리드의 열(column)을 6개로 설정하고 가로로 나열될 수 있도록 변경합니다.
  grid-gap: 4px; // 그리드의 간격(gap)을 여백으로 설정합니다.

`;

export const HandoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px; 
  padding-left: 54px;

  img {
    width: 54px;
    height: 72px;
    flex-shrink: 0;
    margin-bottom: 12px; 
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;