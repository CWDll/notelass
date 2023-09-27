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
  /* height: 1080px; */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  heigth: 100%;
  display: flex;
  flex-direction: column;
`;

const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 12px; */
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
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
  height: 50px;
  margin-top: 600px;
  /* padding-top: 600px; */
`;

export default function EmailVerificationAndPassword() {
  /*
    // 이메일 인증번호 전송 및 유효성 검사 관련
    const nodemailer = require("nodemailer");

    async function sendEmail(email) {
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "fc1a23ad3ed354", // Mailtrap에서 제공하는 사용자 이름
          pass: "7d35dac49c8cbc", // Mailtrap에서 제공하는 비밀번호
        },
      });

      const info = await transporter.sendMail({
        from: '"Notelass" <noreply@notelass.com>',
        to: email,
        subject: "인증번호",
        text: "당신의 인증번호는 123456입니다.", // 실제 애플리케이션에서는 동적으로 생성해야 합니다.
        html: "<p>당신의 인증번호는 <strong>123456</strong>입니다.</p>",
      });

      console.log("Message sent: %s", info.messageId);
    }

    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
    }

    function handleSendEmail() {
      // const email = document.getElementById("standard-basic").value;
      const email = "814e0a5286-cfc840@inbox.mailtrap.io";
      if (isValidEmail(email)) {
        sendEmail(email);
      } else {
        console.error("이메일 주소가 유효하지 않습니다.");
      }
    }
*/
  // 비밀번호 숨기기 관련
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
            error={true}
            // FormHelperTextProps="에러 메시지"
            helperText="이메일 입력 양식 오류"
            fullWidth={true}
          />
          <Button
            // onClick={handleSendEmail}
            variant="outlined"
            sx={{
              width: "100px",
              height: "40px",
              marginLeft: `20px`,
              color: "red",
              borderColor: "orange",
            }}
          >
            전송
          </Button>
        </FlexRow>
        <TitleText>인증번호</TitleText>
        <TextField
          id="standard-basic"
          //   label="Standard"
          variant="standard"
          placeholder="인증번호 6자리를 입력해 주세요"
          fullWidth={false}
          sx={{ input: { color: "purple" } }}
        />

        <TitleText>비밀번호 입력</TitleText>
        <FormControl variant="standard" fullWidth={true}>
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
            fullWidth={true}
          />
        </FormControl>

        <TitleText>비밀번호 확인</TitleText>
        <TextField
          id="standard-basic"
          //   label="Standard"
          variant="standard"
          placeholder="영문, 숫자, 특수기호 포함 8자리 이상"
          // sx={{ marginBottom: "100px" }}
        />

        <NextButton
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, marginTop: "100px" }}
        >
          회원가입
        </NextButton>
      </Container>
    </ContainerWidth_1920>
  );
}
