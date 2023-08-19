import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트 import
import Calendartwo from "../Component/Calendartwo";
import TailCalendar from "../Component/TailCalendar";
import Groups from "../Component/Groups";
import Notice from "../Component/Notice";
import Tasks from "../Component/Tasks";
import RecentNote from "../Component/RecentNote";

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

const LeftHomeBody = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */


`;

const RightHomeBody = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;
`;

const Home = () => {
  return (
    <HomeContainer>
      <LeftHomeBody>
        <Notice />
        <Tasks />
        <RecentNote />
      </LeftHomeBody>
      <RightHomeBody>
        <Calendartwo />
        <Groups />
      </RightHomeBody>
    </HomeContainer>
  );
};
export default Home;
