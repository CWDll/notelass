import React from "react";
import { Link } from "react-router-dom";
import CustomDateRangePickerDay from "../Component/CustomDateRangePickerDay";
import Calendartwo from "../Component/Calendartwo";
import TailCalendar from "../Component/TailCalendar";
import Groups from "../Component/Groups";

const Home = () => {
  return (
    <div>
      <h2>HOMEPage</h2>
      <Groups />
      <CustomDateRangePickerDay />
      <Calendartwo />
      <TailCalendar />
    </div>
  );
};

export default Home;
