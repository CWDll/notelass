import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
  background-color: #4849ff80;
  /* padding: 10px; */
  margin: 0 36px 0 36px;
`;

const Header = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-weight: bold;
`;

const DayContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px 0px;
`;

const Day = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

const PeriodContainer = styled.div`
  display: contents;
`;

const Period = styled.p`
  background-color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 0.8em;
  font-weight: 700;
`;

const TimeClass = styled.p`
  background-color: #f5f5fc;
  color: #4849ff;
  text-align: center;
  padding: 15px 0;
  font-size: 12px;
  font-weight: bold;
`;

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
    <TableContainer>
      {schedule.map((day) => (
        <React.Fragment key={day.date}>
          <DayContainer>
            <Day>{day.date}</Day>
          </DayContainer>
          <PeriodContainer>
            {timeClass.map((time, index) => (
              <TimeClass key={index}>{time.time}</TimeClass>
            ))}
          </PeriodContainer>
          <PeriodContainer>
            {day.periods.map((period, index) => (
              <Period key={index}>{period}</Period>
            ))}
          </PeriodContainer>
        </React.Fragment>
      ))}
    </TableContainer>
  );
};

export default TimeTable;
