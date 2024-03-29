import React from "react";
import styled from "styled-components";
import Box from "../Box";
import CircularBar from "./CircularBar";
import chevron_right from "../../../assets/chevron_right.svg";

import { useNavigate } from "react-router-dom";
import {
  TasksContainer,
  BoldText,
  GroupHead,
  GroupBody,
  SubjectContainer,
  TaskGrid,
  Tasksubject,
  TaskText,
  Taskbody,
  DetailText,
  Img,
} from "./Style/TasksStyle";

const StyledTaskBox = styled(Box)`
  width: 327px;
  height: 84px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: relative;
`;

const Tasks = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/TasksDetail");
  };

  const renderTaskBoxes = () => {
    return [1, 2, 3, 4].map((i) => (
      <StyledTaskBox key={i}>
        <Taskbody>
          <Tasksubject>과목 {i}</Tasksubject>
          <TaskText>과제 {i}</TaskText>
        </Taskbody>
        <CircularBar />
      </StyledTaskBox>
    ));
  };

  return (
    <TasksContainer>
      <GroupHead>
        <BoldText>과제</BoldText>
        <DetailText
          style={{ "text-decoration": "underline" }}
          onClick={onClick}
        >
          전체보기
        </DetailText>
        <Img src={chevron_right} alt="chevron_right" />
      </GroupHead>
      <GroupBody>
        <SubjectContainer>
          <TaskGrid>{renderTaskBoxes()}</TaskGrid>
        </SubjectContainer>
      </GroupBody>
    </TasksContainer>
  );
};

export default Tasks;
