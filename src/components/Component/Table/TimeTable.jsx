import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  background-color: #f1f1f1;
  padding: 10px;
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
  padding: 5px 10px;
`;

const Day = styled.div`
  font-size: 0.9em;
`;

const PeriodContainer = styled.div`
  display: contents;
`;

const Period = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 0.8em;
`;

const TimeTable = ({ schedule }) => {
  return (
    <TableContainer>
      <Header>시간표</Header>
      {schedule.map((day) => (
        <React.Fragment key={day.date}>
          <DayContainer>
            <Day>{day.date}</Day>
          </DayContainer>
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
