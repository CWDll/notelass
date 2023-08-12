import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트 import
import Calendartwo from "../Component/Calendartwo";
import TailCalendar from "../Component/TailCalendar";
import Groups from "../Component/Groups";
import Notice from "../Component/Notice";
import Tasks from "../Component/Tasks";


const HomeContainer = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 30%;
  height: 90%;
  margin-top: 3%;
  padding: 0;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justifycontent: "space-between";
`;

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: auto;

  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeBody>
        <Notice />
        <Tasks />
      </HomeBody>
      <HomeBody>
        <Calendartwo />
        <Groups />
      </HomeBody>
    </HomeContainer>
  );
};
export default Home;
