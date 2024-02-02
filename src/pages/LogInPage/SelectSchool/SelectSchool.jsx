import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../../../action/userInputActions";

// 학교 리스트
import { schoolList } from "../../../assets/data/schoolList";
// 학교 검색
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// 입학 년도
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSchool() {
  const navigate = useNavigate();
  // redux 사용
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const [admissionAge, setAdmissionAge] = useState(""); // 입학년도
  const [school, setSchool] = useState(null); // 학교 이름

  const reduxInput = (event) => {
    const { name, value } = event;
    dispatch(setUserInput(name, value));
    console.log("reduxInput의 nama과 value: " + name, value);
  };

  //입학년도 바꾸기
  const handleAgeChange = (event) => {
    setAdmissionAge(event.target.value);
    console.log(event.target.value);
    reduxInput(event.target);
  };

  const handleSubmit = () => {
    if (school === null) {
      alert("학교 이름을 입력하세요.");
      return;
    } else if (admissionAge === "") {
      alert("입학 년도를 입력하세요.");
      return;
    }
    navigate("/SelectRole");
  };

  return (
    <S.ContainerWidth_1920>
      <S.Container>
        <S.Notelass>학교 정보 입력</S.Notelass>
        <S.InnerContainer>
          <S.TitleText>학교 검색</S.TitleText>
          <Autocomplete
            freeSolo // 사용자가 목록에 없는 값을 입력할 수 있게 합니다.
            disablePortal
            id="combo-box-demo"
            name="school"
            options={schoolList}
            getOptionLabel={(option) => option.label}
            value={school ? { label: school } : null}
            sx={{ width: 300 }}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            onInputChange={(event, value, reason) => {
              if (reason === "input") {
                setSchool(value); // 사용자 입력 값으로 상태 업데이트
                reduxInput({ name: "school", value: value }); // Redux store 업데이트
              }
            }}
            onChange={(event, value, reason) => {
              if (value != null) {
                setSchool(typeof value === "string" ? value : value.label); // 입력 값이 문자열인 경우 직접 입력된 값으로 간주
                reduxInput({
                  name: "school",
                  value: typeof value === "string" ? value : value.label,
                });
              }
            }}
            onBlur={(event) => {
              reduxInput({ name: "school", value: event.target.value });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="학교 이름을 입력해주세요"
                name="school"
              />
            )}
          />
        </S.InnerContainer>

        <S.InnerContainer>
          <S.TitleText>입학 년도</S.TitleText>
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
                <MenuItem value={2011}>2012년 이전</MenuItem>
                <MenuItem value={2012}>2012년</MenuItem>
                <MenuItem value={2013}>2013년</MenuItem>
                <MenuItem value={2014}>2014년</MenuItem>
                <MenuItem value={2015}>2015년</MenuItem>
                <MenuItem value={2016}>2016년</MenuItem>
                <MenuItem value={2017}>2017년</MenuItem>
                <MenuItem value={2018}>2018년</MenuItem>
                <MenuItem value={2019}>2019년</MenuItem>
                <MenuItem value={2020}>2020년</MenuItem>
                <MenuItem value={2021}>2021년</MenuItem>
                <MenuItem value={2022}>2022년</MenuItem>
                <MenuItem value={2023}>2023년</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </S.InnerContainer>
        <S.NextBtnContainer>
          <S.NextButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            다음
          </S.NextButton>
        </S.NextBtnContainer>
      </S.Container>
    </S.ContainerWidth_1920>
  );
}
