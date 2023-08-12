import React from "react";
import styled from "styled-components";
import Box from "../Component/Box";
import CircularBar from "./CircularBar";


import { useNavigate } from "react-router-dom";
import {
  TasksContainer,
  BoldText,
  GrayText,
  GroupHead,
  GroupBody,
  SubjectContainer,
  TaskGrid,
} from "./TasksStyle";


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
    navigate("/detail");
  };


  
  const renderTaskBoxes = () => {
    return [1, 2, 3, 4].map((i) => (
      <StyledTaskBox key={i}>
        <div>
          <BoldText>과목 {i}</BoldText>
          <GrayText>과제 {i}</GrayText>
        </div>
        <CircularBar />
      </StyledTaskBox>
    ));
  };



  return (
    <TasksContainer>
      <GroupHead>
        <BoldText>과제</BoldText>
        <GrayText style={{ "text-decoration": "underline" }} onClick={onClick}>
          더보기
        </GrayText>
      </GroupHead>
      <GroupBody>
        <SubjectContainer>
          <TaskGrid>
            {renderTaskBoxes()}
          </TaskGrid>
        </SubjectContainer>
      </GroupBody>
    </TasksContainer>
  );
};

export default Tasks;
