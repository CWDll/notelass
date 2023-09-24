import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 다음 버튼
import Button from "@mui/material/Button";
// 입력창
import TextField from "@mui/material/TextField";
// 비밀번호 숨김/공개 입력창
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 12px; */
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextButton = styled(Button)`
  width: 400px;
`;

export default function EmailVerificationAndPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ContainerWidth_1920>
      <Container>
        <Notelass>회원가입</Notelass>

        <TitleText>이메일 주소 입력</TitleText>
        <FlexRow>
          <TextField
            id="standard-basic"
            // label="Standard"
            variant="standard"
            placeholder="example@notelass.com"
            error="true"
            // FormHelperTextProps="에러 메시지"
            helperText="Incorrect entry."
            fullWidth={true}
          />
          <Button variant="outlined">전송</Button>
        </FlexRow>
        <TitleText>인증번호</TitleText>
        <TextField
          id="standard-basic"
          //   label="Standard"
          variant="standard"
          placeholder="인증번호 6자리를 입력해 주세요"
        />

        <TitleText>비밀번호 입력</TitleText>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          {/* <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel> */}
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            placeholder="영문, 숫자, 특수기호 포함 8자리 이상"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <TitleText>비밀번호 확인</TitleText>
        <TextField
          id="standard-basic"
          //   label="Standard"
          variant="standard"
          placeholder="영문, 숫자, 특수기호 포함 8자리 이상"
        />

        <NextButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          회원가입
        </NextButton>
      </Container>
    </ContainerWidth_1920>
  );
}
