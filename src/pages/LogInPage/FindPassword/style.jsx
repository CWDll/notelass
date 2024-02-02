import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
`;

export const GridContainer = styled(Grid)`
  padding: 20px 0 10px 0;
  /* border: 1px solid red; */
  width: 400px;
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

export const EnterEmail = styled(TextField)`
  width: 400px;
  height: 56px;
`;

export const SendLinkButton = styled(Button)`
  width: 400px;
  height: 56px;
  background-color: #4849ff;
`;
