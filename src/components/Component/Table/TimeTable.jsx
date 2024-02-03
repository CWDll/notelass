import React from "react";
import * as S from "./style";

const timeClass = [
  { time: "1교시" },
  { time: "2교시" },
  { time: "3교시" },
  { time: "4교시" },
  { time: "5교시" },
  { time: "6교시" },
  { time: "7교시" },
  { time: "8교시" },
];

const TimeTable = ({ schedule }) => {
  return (
    <S.TimeTableContainer>
      {schedule.map((day) => (
        <React.Fragment key={day.date}>
          <S.DayContainer>
            <S.Day>{day.date}</S.Day>
          </S.DayContainer>
          <S.PeriodContainer>
            {timeClass.map((time, index) => (
              <S.TimeClass key={index}>{time.time}</S.TimeClass>
            ))}
          </S.PeriodContainer>
          <S.PeriodContainer>
            {day.periods.map((period, index) => (
              <S.Period key={index}>{period}</S.Period>
            ))}
          </S.PeriodContainer>
        </React.Fragment>
      ))}
    </S.TimeTableContainer>
  );
};

export default TimeTable;
