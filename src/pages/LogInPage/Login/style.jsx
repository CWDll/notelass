import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const Wrap = styled.div`
  margin-left: auto; /* 중앙 정렬을 위해 자동 마진 사용 */
  margin-right: auto;
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  position:relative;
  .
`;

export const GridContainer = styled(Grid)`
  /* background-color: blue; */
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 12px;
`;

export const NotelassIntro = styled(Notelass)`
  font-size: 20px;
`;
