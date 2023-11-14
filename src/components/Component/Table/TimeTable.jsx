import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 684px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  background-color: #f1f1f1;
  padding: 10px;
`;

const Tableheader = styled.div`
  grid-column: 1 / -1; /* Header will span all columns */
  text-align: center;
`;

const Tableday = styled.div`
  grid-column: 1 / -1;
  background-color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const TimeSlot = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px 0;
`;

function TimeTable({ schedule }) {
  return (
    <TableContainer>
      <Tableheader>시간표</Tableheader>
      <Tableday>오늘, 2023년 11월 14일</Tableday>
      {schedule.today.map((period, index) => (
        <TimeSlot key={index}>{period}</TimeSlot>
      ))}
    </TableContainer>
  );
}

export default TimeTable;
