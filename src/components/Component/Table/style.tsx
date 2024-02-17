import styled from "styled-components";

// TimeTalbe 스타일
export const TimeTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
  background-color: #4849ff80;
  /* padding: 10px; */
  margin: 0 36px 0 36px;
`;

export const DayContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px 0px;
`;

export const Day = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

export const PeriodContainer = styled.div`
  display: contents;
`;

export const Period = styled.p`
  background-color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 0.8em;
  font-weight: 700;
`;

export const TimeClass = styled.p`
  background-color: #f5f5fc;
  color: #4849ff;
  text-align: center;
  padding: 15px 0;
  font-size: 12px;
  font-weight: bold;
`;

// MealTable 스타일
export const MealTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 40px;
`;

export const MealContainer = styled.div`
  witdh: 80%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const MealTitle = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledHr = styled.hr`
  margin: 20px 0px 10px 0px;
  font-weight: 20px;
`;

export const Menu = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const Kcal = styled.p`
  color: #9ea4aa;
`;
