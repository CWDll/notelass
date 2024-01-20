import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../EmailVerificationAndPassword/style";
import instance from "../../../assets/api/axios";
import { setUserInput } from "../../../action/userInputActions";

import FormControl from "@mui/material/FormControl";
// 비밀번호 숨김/공개 입력창
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// testing import code
import Button from "@mui/material/Button"; // 다음 버튼

export default function ResetPassword() {
  const location = useLocation();
  const email = location.state?.email;
  const [isChecked, setIsChecked] = useState(false);

  // 비밀번호 숨기기 관련
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // 비밀번호 정규식
  const pwRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

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
    // dispatch(setUserInput({ password: e.target.value }));
    reduxInput(e.target);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
    // if (isPasswordMatch == true) {
    //   reduxInput(e); // 비밀번호 == 비밀번호체크 라면, reduxInput으로 pwd dispatch하기
    // }
    if (isPasswordMatch) {
      dispatch(setUserInput({ confirmPassword: e.target.value }));
      reduxInput(e.target);
    }
  };
  // 비밀번호 == 비밀번호체크 확인로직
  const checkPasswordsMatch = (pwd, confirmPwd) => {
    setIsPasswordMatch(pwd === confirmPwd && pwd !== "");
  };

  const CheckCode = async () => {
    try {
      const res = await instance.get(
        `/api/auth/password/reset?email=${email}&code=${certifiNumber}`
      );

      if (res.status === 200) {
        // 인증번호 확인 완료
        alert("올바른 비밀번호 재설정 코드입니다.");
        setIsChecked(true); // isChecked가 false이면 put요청 전에 return시킬 것임.
      } else if (res.status === 400) {
        alert("올바르지 않은 비밀번호 재설정 코드입니다.");
        return;
      } else {
        alert("인증에 실패하였습니다.");
      }
    } catch (error) {
      console.error("인증 코드 확인 오류", error);
    }
  };

  // 비밀번호 변경 최종 단계
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 인증번호 일치 확인
    try {
      const verifiCode = await instance.get(
        `/api/auth/email/verification?email=${email}&authCode=${certifiNumber}`
      );

      if (verifiCode.data.result === true) {
        alert("인증번호 확인이 완료되었습니다.");
      } else if (verifiCode.data.result === false) {
        alert("인증번호가 일치하지 않습니다.");
        return;
      } else {
        alert("인증번호 확인에 실패하였습니다.");
      }
    } catch (error) {
      console.error("인증번호 발송 오류", error);
      alert("인증번호 발송에 실패하였습니다.");
      return;
    }

    try {
      console.log("userInput의 상태: " + userInput);
      const response = await instance.post(`/api/auth/signup`, userInput);

      if (response.status === 201) {
        //회원가입 성공
        console.log("회원가입이 완료되었습니다.");
        navigate("/SignupComplete");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <S.ContainerWidth_1920>
      <S.Container>
        <S.Notelass>비밀번호 재설정</S.Notelass>

        <S.TitleText>인증번호 인증</S.TitleText>
        <S.FlexRow>
          <S.StyledTextField
            id="standard-basic"
            //   label="Standard"
            variant="standard"
            placeholder="인증번호 6자리를 입력해 주세요"
            value={certifiNumber}
            error={certifiNumError} // 6자리를 입력하지 않으면 입력 줄이 빨간 색으로
            fullWidth={true}
            onChange={(e) => {
              setCertifiNumber(e.target.value);
              validCertifiNumber(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            onClick={CheckCode}
            sx={{
              width: "100px",
              height: "40px",
              marginLeft: `20px`,
              color: "#4849FF",
              borderColor: "#4849FF",
            }}
          >
            인증
          </Button>
        </S.FlexRow>

        <S.TitleText>비밀번호 입력</S.TitleText>
        <form onSubmit={handleSubmit}>
          <FormControl variant="standard" fullWidth={true}>
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
