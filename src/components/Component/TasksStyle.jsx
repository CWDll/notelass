import styled from "styled-components";
// 과제 컴포넌트 컨테이너
export const TasksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: column;
  background-color: #F5F5FC;
  color: black;
`;

// bold 텍스트
export const BoldText = styled.p`
  font-weight: bold;
  size: 50px;
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



export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  
`;


export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 327px);
  grid-gap: 30px;
`;


