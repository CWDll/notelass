import React from "react";
import styled from "styled-components";
import Box from "../Component/Box";
import List from "../Component/List";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

const StyledNoticeBox = styled(Box)`
  width: 684px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-bottom: 40px;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 327px);
  grid-gap: 30px;
`;

const StyledTaskBox = styled(Box)`
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
  const renderTaskBoxes = () => {
    return Array.from({ length: 4 }, (_, index) => (
      <StyledTaskBox key={index}>Task Board {index + 1}</StyledTaskBox>
    ));
  };

  const renderPosts = () => {
    const postContent = [
      "Notice 1",
      "Notice 2",
      "Notice 3",
      "Notice 4",
      "Notice 5",
    ];

    return postContent.map((content) => (
      <List key={content} content={content} />
    ));
  };

  return (
    <Container>
      <StyledNoticeBox>
        <h3>Notice</h3>
        {renderPosts()}
      </StyledNoticeBox>
      <TaskGrid>{renderTaskBoxes()}</TaskGrid>
    </Container>
  );
};

export default Tasks;
