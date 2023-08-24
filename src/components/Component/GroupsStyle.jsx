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
  border: 2px solid purple;
  background-color: #cbc3e3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 원 안에 텍스트
export const PurpleText = styled(BoldText)`
  color: purple;
`;
// 과목 명, 선생님 성함 담는 container
export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;





