import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../assets/api/axios";
import * as S from "./style";

import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function FindPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const navagateSignup = () => {
    navigate("/selectSchool");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log("테스트용 이메일 입력", email);

    try {
      const response = await instance.post(
        `/api/auth/password/email?email=${email}`
      );

      if (response.status === 200) {
        alert("인증 번호 전송이 완료되었습니다.");
      } else {
        alert("인증 번호 발송에 실패하였습니다.");
      }
    } catch (error) {
      alert("이메일을 다시 확인해주세요.");
    }
  };

  return (
    <S.ContainerBox>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <S.NotelassIntro>태블릿 속 또다른 강의실</S.NotelassIntro>
        <S.Notelass>Note-lass</S.Notelass>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <S.EnterEmail
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일을 입력해주세요"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />

          <S.GridContainer>
            <Link underline="none" color={"gray"} onClick={navagateSignup}>
              회원가입
            </Link>
            <p>|</p>
            <Link href="#" underline="none" color={"gray"}>
              아이디 찾기
            </Link>
            <p>|</p>
            <Link href="#" underline="none" color={"gray"}>
              비밀번호 찾기
            </Link>
            {/* </Grid> */}
          </S.GridContainer>
          <S.SendLinkButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            비밀번호 재설정 링크 보내기
          </S.SendLinkButton>
        </Box>
      </Box>
    </S.ContainerBox>
  );
}
