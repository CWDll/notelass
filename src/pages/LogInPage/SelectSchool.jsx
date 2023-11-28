import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setUserInput } from "../actions/userInputActions";
import { setUserInput } from "../../action/userInputActions";
// 신분 선택
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// 학교 검색
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// 입학 년도
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// 다음 버튼
import Button from "@mui/material/Button";

const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: 1080px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  /* width: 500px; */
  height: 500px;

  /* border: 1px solid red; */
`;

const InnerContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: 20px 0 10px 10px;
`;

const NextBtnContainer = styled.div`
  margin-top: 150px;
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
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-boto: 0px; */
`;

const NextButton = styled(Button)`
  width: 400px;
`;

export default function SelectSchool() {
  const navigate = useNavigate();
  // redux 사용
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const [admissionAge, setAdmissionAge] = useState(""); // 입학년도
  const [school, setSchool] = useState(""); // 학교 이름

  const reduxInput = (event) => {
    const { name, value } = event;
    dispatch(setUserInput(name, value));
    console.log("reduxInput의 event객체: " + event);
    console.log("reduxInput의 nama과 value입니덩: " + name, value);
  };

  //입학년도 바꾸기
  const handleAgeChange = (event) => {
    setAdmissionAge(event.target.value);
    console.log(event.target.value);
    reduxInput(event.target);
  };
  // 학교 이름 바꾸기
  const handleSchoolNameChange = (event) => {
    setSchool(event.target.value);
    reduxInput(event.target);
  };

  const handleSubmit = () => {
    navigate("/SelectRole");
  };

  return (
    <ContainerWidth_1920>
      <Container>
        <Notelass>학교 정보 입력</Notelass>
        <InnerContainer>
          <TitleText>학교 검색</TitleText>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="school"
            options={
              school ? schoolList : [{ label: "등록한 학교 이름만 나옵니다" }]
            }
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            onInputChange={(event, value, reason) => {
              if (reason === "input") {
                setSchool(value); // 입력 값 변경에 따라 상태 업데이트
              }
            }}
            onChange={(event, value, reason) => {
              if (value != null) {
                setSchool(value.label); // 선택한 옵션으로 상태 업데이트
                reduxInput({ name: "school", value: value.label }); // Redux store 업데이트
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="학교 이름을 입력해주세요"
                name="school"
              />
            )}
          />
        </InnerContainer>

        <InnerContainer>
          <TitleText>입학 년도</TitleText>
          <Box>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label" size="normal">
                입학 년도를 선택해주세요
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={admissionAge}
                name="admissionYear"
                label="admission"
                onChange={handleAgeChange}
              >
                <MenuItem value={2018}>2018년</MenuItem>
                <MenuItem value={2019}>2019년</MenuItem>
                <MenuItem value={2020}>2020년</MenuItem>
                <MenuItem value={2021}>2021년</MenuItem>
                <MenuItem value={2022}>2022년</MenuItem>
                <MenuItem value={2023}>2023년</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </InnerContainer>
        <NextBtnContainer>
          <NextButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            다음
          </NextButton>
        </NextBtnContainer>
      </Container>
    </ContainerWidth_1920>
  );
}

const schoolList = [
  { label: "강남중학교" },
  { label: "남서울중학교" },
  { label: "노원중학교" },
  { label: "대한중학교" },
  { label: "라온중학교" },
  { label: "마산중학교" },
  { label: "부산중학교" },
  { label: "송탄중학교" },
  { label: "의정부중학교" },
  { label: "의정부서중학교" },
  { label: "중곡중학교" },
  { label: "청담중학교" },
  { label: "흥덕중학교" },
  { label: "판교중학교" },
  { label: "귀인중학교" },
  { label: "군포고등학교" },
  { label: "채울샘 강사 협동조합" },
  { label: "기타" },
];
