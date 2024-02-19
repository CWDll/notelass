import * as React from "react";
import {useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instance from "../../../assets/api/axios";
import * as S from "./style";
import RoleContext from "../../../RoleContext";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";



const defaultTheme = createTheme();

export default function Login() {
  const { setRole } = useContext(RoleContext);


  const navigate = useNavigate();
  const navagateSignup = () => {
    navigate("/selectSchool");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await instance.post(`/api/auth/login`, data);

      if (response.status === 200) {
        alert("로그인 성공!");
        const accessToken = response.data.result.token;
        setRole(response.data.result.role); 
        console.log("accessToken테스트:", accessToken);

        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("token", accessToken);
        // navigate("/");
        navigate("/GroupDetail");
      } else {
        alert("로그인 실패!");
      }
    } catch (error) {
      alert("이메일과 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <RoleContext.Provider value={setRole}>
    <ThemeProvider theme={defaultTheme}>
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
          <S.NotelassIntro>태블릿 속 또 다른 강의실</S.NotelassIntro>
          <S.Notelass>Note-lass</S.Notelass>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일을 입력해주세요"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호를 입력해주세요"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <S.GridContainer>
              <Grid>
                <Link
                  underline="none"
                  color={"gray"}
                  style={{ marginLeft: "40px" }}
                  onClick={navagateSignup}
                >
                  회원가입
                </Link>
              </Grid>
              <p>|</p>
              <Grid>
                <Link href="#" underline="none" color={"gray"}>
                  아이디 찾기
                </Link>
              </Grid>
              <p>|</p>
              <Grid>
                <Link
                  href="/FindPassword"
                  underline="none"
                  color={"gray"}
                  style={{ marginRight: "30px" }}
                >
                  비밀번호 찾기
                </Link>
              </Grid>
            </S.GridContainer>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </S.ContainerBox>
    </ThemeProvider>
    </RoleContext.Provider>
    
  );
}
