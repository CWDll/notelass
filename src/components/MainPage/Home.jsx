import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Calendartwo from "../Component/Calendartwo";
import Groups from "../Component/Groups";
import Notice from "../Component/Notice";

const HomeContainer = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-right: 30%;
  height: 90%;
  margin-top: 3%;
  background-color: brown;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Notice />
      {/* <CustomDateRangePickerDay /> */}
      <Calendartwo />
      {/* <TailCalendar /> */}
      <Groups />
    </HomeContainer>
  );
};

export default Home;
