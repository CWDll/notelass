import * as React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5"> */}
          <NotelassIntro>태블릿 속 또다른 강의실</NotelassIntro>
          {/* </Typography> */}
          {/* <Typography component="h1" variant="h2"> */}
          <Notelass>Note-lass</Notelass>
          {/* </Typography> */}
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
                  href="#"
                  variant="body2"
                  underline="none"
                  style={{ marginLeft: "40px" }}
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
