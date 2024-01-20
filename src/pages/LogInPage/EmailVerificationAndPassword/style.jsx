import styled from "styled-components";
import TextField from "@mui/material/TextField"; // 입력창
import Button from "@mui/material/Button"; // 다음 버튼


export const ContainerWidth_1920 = styled.div`
  width: 1920px;
  /* height: 1080px; */
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 400px;
  heigth: 100%;
  display: flex;
  flex-direction: column;
`;

export const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 12px; */
`;

export const TitleText = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NextButton = styled(Button)`
  width: 400px;
  height: 50px;
  margin-top: 600px;
  /* padding-top: 600px; */
`;

export const StyledTextField = styled(TextField)`
  & .MuiInput-underline:before {
    border-bottom: ${(props) => (props.error ? "1px solid red" : "")};
  }
  /* & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid blue;
  } */
`;

export const PwCheck = styled(TextField)`
  width: 400px;
`;

// export const FormControl = styled(FormControl)``;
// export const IconButton = styled(IconButton)``;
// export const Input = styled(Input)``;
// export const InputAdornment = styled(InputAdornment)``;
// export const Visibility = styled(Visibility)``;
// export const VisibilityOff = styled(VisibilityOff)``;
