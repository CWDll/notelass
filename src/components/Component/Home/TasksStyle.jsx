import styled from "styled-components";
// 과제 컴포넌트 컨테이너
export const TasksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  width: 684px;
  flex-direction: column;
  background-color: #F5F5FC;
  margin-right: 363px;
  margin-top: 30px;
`;

// bold 텍스트
export const BoldText = styled.p`
  display: flex;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 32px;
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
  padding-top: 30px;
`;



export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  
`;


export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 327px);
  grid-gap: 30px;
  `;

export const Tasksubject = styled.p`
  color: #4849FF;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const TaskText = styled.p`
  color: #26282B;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Taskbody = styled.div`
  display: flex;  
  flex-direction: column;
  padding-left: 17px;
`;

export const DetailText = styled.p`
  
  color: var(--cool-grayscale-placeholder, #9EA4AA);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin-left: 505px;
  margin-top: -5px;
`;

export const Img = styled.img`
  width: 12px;
  height: 12px;

  margin-left: 2px;
  margin-right: 32px;
`;
