import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트 import
import Calendartwo from "../../components/Component/Home/Calendartwo";
import TailCalendar from "../../components/Component/TailCalendar";
import Groups from "../../components/Component/Home/Groups";
import Contents from "../../components/Component/Home/Contents";
import Tasks from "../../components/Component/Home/Tasks";
// import RecentNote from "../../components/Component/Home/RecentNote";
import RecentNote from "../../components/Component/Home/RecentNote";

const HomeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  padding: 0;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  /*justifycontent: "center";*/
`;

const LeftHomeBody = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

const RightHomeBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -330px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <LeftHomeBody>
        <Contents />
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
