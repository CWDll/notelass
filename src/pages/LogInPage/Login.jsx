import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instance from "../../assets/api/axios";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1920px;
  height: 1080px;
`;

const GridContainer = styled(Grid)`
  /* background-color: blue; */
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 12px;
`;

const NotelassIntro = styled(Notelass)`
  font-size: 20px;
`;

export default function Login() {
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
        console.log("accessToken테스트:", accessToken);

        // 로컬 스토리지에 토큰 저장
        localStorage.setItem("token", accessToken);
        navigate("/");
      } else {
        alert("로그인 실패!");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerBox>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NotelassIntro>태블릿 속 또다른 강의실</NotelassIntro>
          <Notelass>Note-lass</Notelass>
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <GridContainer>
              <Grid>
                <Link
                  variant="body2"
                  underline="none"
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
                  href="#"
                  underline="none"
                  color={"gray"}
                  style={{ marginRight: "30px" }}
                >
                  비밀번호 찾기
                </Link>
              </Grid>
            </GridContainer>
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
      </ContainerBox>
    </ThemeProvider>
  );
}
