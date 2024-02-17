import React from "react";
import * as S from "./style";
import lunch from "../../../assets/table/lunch.svg";
import dinner from "../../../assets/table/dinner.svg";

export default function MealTable() {
  return (
    <S.MealTableContainer>
      <S.MealContainer>
        <S.MealTitle src={lunch} alt="lunch" />
        <S.Menu>
          등심돈까스, 우동국, 마카로니 콘샐러드, 쌀밥, 단무지, 배추김치
        </S.Menu>
        <S.Kcal>( 803.4kcal )</S.Kcal>
      </S.MealContainer>
      <S.StyledHr />
      <S.MealContainer>
        <S.MealTitle src={dinner} alt="dinner" />
        <S.Menu>
          등심돈까스, 우동국, 마카로니 콘샐러드, 쌀밥, 단무지, 배추김치
        </S.Menu>
        <S.Kcal>( 803.4kcal )</S.Kcal>
      </S.MealContainer>
    </S.MealTableContainer>
  );
}
