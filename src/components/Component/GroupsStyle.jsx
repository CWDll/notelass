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
`;
// 회색 텍스트
export const GrayText = styled.p`
  color: gray;
  size: 10px;
  /* text-decoration: underline; */
`;
// 그룹 컴포넌트 헤드
export const GroupHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;
// 그룹 컴포넌트 바디
export const GroupBody = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  display: flex;
  justify-content: center;
`;
// 원 안에 텍스트
export const PurpleText = styled(BoldText)`
  color: #4849FF;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 12px;
`;




// 과목 명, 선생님 성함 담는 container
export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;





