import styled from "styled-components";
// 그룹 컴포넌트 컨테이너
export const GroupContainer = styled.div`
  display: flex;
  width: 478px;
  height: 532px;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 8px;
`;
// bold 텍스트
export const BoldText = styled.p`
  color: var(--cool-grayscale-title, #26282B);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 32px;
  margin-left: 32px;
`;
// 회색 텍스트
export const GrayText = styled.p`
color: var(--cool-grayscale-placeholder, #9EA4AA);
text-align: right;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
  margin-left: 208px;
  margin-top: 36px;


`;
// 그룹 컴포넌트 헤드
export const GroupHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
// 그룹 컴포넌트 바디
export const GroupBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 24px;
`;
// 보라색 원

export const CircleText = styled.div`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--primary-light-cobalt, #EDEDFF);
    border-width: 1.5px;
    border-color: var(--primary-cobalt, #4849FF);
    margin-left: 32px;
    display: flex;
    justify-content: center;

`;


export const PurpleText = styled.p`
    color: #4849FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 12px;
`;

export const Teacher = styled.p`
  color: var(--cool-grayscale-placeholder, #9EA4AA);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;
`;


// 과목 명, 선생님 성함 담는 container
export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

export const SubjectText = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 4px;
`;

export const Img = styled.img`
  width: 12px;
  height: 12px;

  margin-top: 39px;
  margin-left: 4px;
  margin-right: 32px;
`;