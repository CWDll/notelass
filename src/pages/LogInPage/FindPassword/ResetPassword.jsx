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
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const [isChecked, setIsChecked] = useState(false);

  // 비밀번호 숨기기 관련
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
  const [isRegular, setIsRegular] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);

    if (isPasswordMatch) {
      dispatch(setUserInput({ confirmPassword: e.target.value }));
    }
  };
  // 비밀번호 == 비밀번호체크 확인로직
  const checkPasswordsMatch = (pwd, confirmPwd) => {
    setIsPasswordMatch(pwd === confirmPwd && pwd !== "");
  };
  const isRegularExp = (password) => {
    if (pwRegex.test(password)) {
      console.log("비밀번호가 조건에 맞습니다.");
      setIsRegular(true);
    } else {
      alert("비밀번호가 조건에 맞지 않습니다.");
      return;
    }
  };

  // 인증 번호 검증
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
    if (!isChecked) {
      alert("인증 번호를 먼저 인증해주세요.");
    }
    isRegularExp(password);

    e.preventDefault();

    // 인증번호 일치 확인
    try {
      const res = await instance.put(`/api/auth/password/reset`, {
        email: email,
        code: certifiNumber,
        newPassword: password,
      });

      if (res.status === 200) {
        alert("비밀번호 재설정에 성공했습니다.");
        navigate("/Login");
      } else {
        alert("비밀번호 재설정에 성공했습니다.");
      }
    } catch (error) {
      console.error("인증번호 발송 오류", error);
      return;
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
