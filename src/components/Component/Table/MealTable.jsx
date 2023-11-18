import React from "react";
import styled from "styled-components";
import lunch from "../../../assets/table/lunch.svg";
import dinner from "../../../assets/table/dinner.svg";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 0 40px;
`;

const MealContainer = styled.div`
  witdh: 80%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const MealTitle = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledHr = styled.hr`
  margin: 0 10px 0 10px;
  font-weight: 20px;
`;

export default function MealTable() {
  return (
    <TableContainer>
      <MealContainer>
        <MealTitle src={lunch} alt="lunch" />
        <p>등심돈까스, 우동국, 마카로니 콘샐러드, 쌀밥, 단무지, 배추김치 </p>
      </MealContainer>
      <StyledHr />
      <MealContainer>
        <MealTitle src={dinner} alt="dinner" />
        <p>등심돈까스, 우동국, 마카로니 콘샐러드, 쌀밥, 단무지, 배추김치 </p>
      </MealContainer>
    </TableContainer>
  );
}
