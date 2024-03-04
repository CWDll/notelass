import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "../EmailVerificationAndPassword/style";
import instance from "../../../assets/api/axios";
import { setUserInput } from "../../../action/userInputActions";
import {
  checkCode,
  resetPassword,
  sendPasswordResetEmail,
} from "../../../assets/api/apis/auth/ApiAuth";

import FormControl from "@mui/material/FormControl";
// 비밀번호 숨김/공개 입력창
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// testing import code
import Button from "@mui/material/Button"; // 다음 버튼

export default function EmailVerificationAndPassword() {
  // redux 관련
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const navigate = useNavigate();

  const [authCode, setAuthCode] = useState();

  // 입력된 값이 정수인지 확인하고, 정수가 아니라면 변환하거나 기본값을 설정합니다.
  const parseIfInteger = (name, value) => {
    if (["grade", "classNum", "number"].includes(name)) {
      const parsedValue = parseInt(value, 10);
      return Number.isNaN(parsedValue) ? "" : parsedValue;
    }
    return value;
  };

  // 비밀번호 숨기기 관련
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // 비밀번호 정규식
  const pwRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  // 이메일 정규식
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
  };
  // 비밀번호 == 비밀번호체크 확인로직
  const checkPasswordsMatch = (pwd, confirmPwd) => {
    setIsPasswordMatch(pwd === confirmPwd && pwd !== "");
  };

  // 최종 비밀번호 변경
  const handleSubmit = async (e) => {
    e.preventDefault();
    // checkCode(email, certifiNumber);

    // 인증번호 일치 확인
    try {
      const verifiCode = await instance.get(
        `/api/auth/password/reset?email=${email}&code=${certifiNumber}`
      );

      if (verifiCode.status === 200) {
        console.log("올바른 비밀번호 재설정 코드입니다.");
        resetPassword(email, certifiNumber, password, () => {
          navigate(`/login`);
        });
      } else if (verifiCode.status === 400) {
        alert("올바르지 않은 비밀번호 재설정 코드입니다.");
      } else if (verifiCode.data.status === 200) {
        console.log("확인 완료");
      } else {
        alert("인증에 실패하였습니다.");
      }
    } catch (error) {
      console.error("인증 코드 확인 오류", error);
    }
  };

  return (
    <S.ContainerWidth_1920>
      <S.Container>
        <S.Notelass>비밀번호 재설정</S.Notelass>

        <S.TitleText>이메일 주소 입력</S.TitleText>
        <S.FlexRow>
          <S.StyledTextField
            id="email-input"
            variant="standard"
            placeholder="example@notelass.com"
            error={emailError}
            helperText={emailError ? "이메일 입력 양식 오류" : ""}
            name="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth={true}
          />
          <Button
            // onClick={handleSendEmail}
            variant="outlined"
            onClick={() => {
              sendPasswordResetEmail(email);
            }}
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
        </S.FlexRow>
        <S.TitleText>인증번호</S.TitleText>
        <S.StyledTextField
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

        <S.TitleText>비밀번호 입력</S.TitleText>
        <form onSubmit={handleSubmit}>
          <FormControl variant="standard" fullWidth={true}>
            {/* <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel> */}
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="영문, 숫자, 특수기호 포함 8자리 이상"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={
                isPasswordMatch ? { borderBottom: "1px solid #4849FF" } : {}
              }
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

          <S.TitleText>비밀번호 확인</S.TitleText>
          <S.PwCheck
            id="confirm-password-input"
            variant="standard"
            type="password"
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
          <S.NextButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, marginTop: "100px" }}
          >
            비밀번호 재설정
          </S.NextButton>
        </form>
      </S.Container>
    </S.ContainerWidth_1920>
  );
}
