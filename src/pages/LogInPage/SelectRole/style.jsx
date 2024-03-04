import styled from "styled-components";
// 다음 버튼
import Button from "@mui/material/Button";
// 학교 검색
import TextField from "@mui/material/TextField";

export const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  /* width: 100%; */
  height: 500px;

  /* border: 1px solid red; */
`;

export const InnerContainer = styled.div`
  width: 90%;
  /* height: 100%; */
  margin: 20px 0 10px 10px;
`;

export const StudentInnerContainer = styled.div`
  width: 100%;
  height: 1%;
  margin: 20px 0 10px 10px;
`;

export const NextBtnContainer = styled.div`
  margin-top: 188px;
`;

export const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 12px; */
`;

export const TitleText = styled.p`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-boto: 0px; */
`;

export const NextButton = styled(Button)`
  width: 400px;
  margin-top: 100px;
`;

export const StyledTextField = styled(TextField)`
  width: 380px;
`;

export const Input = styled.input`
  width: 100px;
  margin-left: 10px;
  margin-right: 6px;
  background-color: transparent;
  border: 1px solid #9ea4aa;
  border-radius: 4px;
  text-align: center;
`;
