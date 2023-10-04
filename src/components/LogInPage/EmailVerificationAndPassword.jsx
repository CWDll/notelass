import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "../../assets/api/axios";
import { setUserInput } from "../../action/userInputActions";
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

const StyledTextField = styled(TextField)`
  & .MuiInput-underline:before {
    border-bottom: ${(props) =>
      props.error ? "1px solid red" : "1px solid blue"};
  }
  /* & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid blue;
  } */
`;

export default function EmailVerificationAndPassword() {
  // redux 관련
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);

  // 비밀번호 숨기기 관련
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // 이메일 정규식
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateEmail = (inputEmail) => {
    if (emailRegex.test(inputEmail)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  // 인증번호 관련
  const [certifiNumber, setCertifiNumber] = useState("");
  const [certifiNumError, setCertifiNumError] = useState(true); // 기본적으로 true로 설정
  const validCertifiNumber = (inputCertifiNum) => {
    const regex = /^[0-9]{6}$/; // 정확히 6자리의 숫자인지 확인하는 정규식
    if (regex.test(inputCertifiNum)) {
      setCertifiNumError(false);
    } else {
      setCertifiNumError(true);
    }
  };
  // 비밀번호 입력/확인 관련
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
    if (isPasswordMatch == true) {
      reduxInput(e); // 비밀번호 == 비밀번호체크 라면, reduxInput으로 pwd dispatch하기
    }
  };

  const checkPasswordsMatch = (pwd, confirmPwd) => {
    setIsPasswordMatch(pwd === confirmPwd && pwd !== "");
  };

  const reduxInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInput(name, value));
  };

  //POST 코드 수정 전
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/endpoint", userInput);
      console.log(response.data);
      // Further logic upon successful post...
    } catch (error) {
      console.error("An error occurred while sending data:", error);
      // Further logic upon error...
    }
  };

  return (
    <ContainerWidth_1920>
      <Container>
        <Notelass>회원가입</Notelass>

        <TitleText>이메일 주소 입력</TitleText>
        <FlexRow>
          <StyledTextField
            id="email-input"
            variant="standard"
            placeholder="example@notelass.com"
            error={emailError}
            helperText={emailError ? "이메일 입력 양식 오류" : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            fullWidth={true}
          />
          <Button
            // onClick={handleSendEmail}
            variant="outlined"
            sx={{
              width: "100px",
              height: "40px",
              marginLeft: `20px`,
              color: "#4849FF",
              borderColor: "#4849FF",
            }}
          >
            전송
          </Button>
        </FlexRow>
        <TitleText>인증번호</TitleText>
        <StyledTextField
          id="standard-basic"
          //   label="Standard"
          variant="standard"
          placeholder="인증번호 6자리를 입력해 주세요"
          value={certifiNumber}
          error={certifiNumError}
          fullWidth={false}
          // sx={{ input: { color: "#4849FF" } }}
          onChange={(e) => {
            setCertifiNumber(e.target.value);
            validCertifiNumber(e.target.value);
          }}
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
            value={password}
            onChange={handlePasswordChange}
            style={isPasswordMatch ? { borderBottom: "1px solid #4849FF" } : {}}
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
          id="confirm-password-input"
          variant="standard"
          placeholder="영문, 숫자, 특수기호 포함 8자리 이상"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!isPasswordMatch && confirmPassword !== ""} // 에러 스타일 적용 조건
          helperText={
            !isPasswordMatch && confirmPassword !== ""
              ? "비밀번호가 다릅니다"
              : ""
          } // 문구 설정 조건
        />
        <NextButton
          type="submit"
          onSubmit={handleSubmit}
          variant="contained"
          sx={{ mt: 3, mb: 2, marginTop: "100px" }}
        >
          회원가입
        </NextButton>
      </Container>
    </ContainerWidth_1920>
  );
}
