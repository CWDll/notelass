import React from "react";
import { Link } from "react-router-dom";
import Calendartwo from "../Component/Calendartwo";
import TailCalendar from "../Component/TailCalendar";
import Groups from "../Component/Groups";
import Notice from "../Component/Notice";
import styled from "styled-components";
import Tasks from "../Component/Tasks";

const HomeContainer = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 30%;
  height: 90%;
  margin-top: 3%;
  /* background-color: brown; */
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* <Notice /> */}
      <Tasks />
      {/* <CustomDateRangePickerDay /> */}
      <Calendartwo />
      {/* <TailCalendar /> */}
      <Groups />
    </HomeContainer>
  );
};
export default Home;
