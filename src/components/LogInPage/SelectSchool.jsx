import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
`;

const InnerContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: 20px 0 10px 10px;
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

const StudentInfoFormControl = styled(FormControl)`
  margin: 5px 10px 0 10px;
`;

export default function SelectSchool() {
  // redux 사용
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const [role, setRole] = useState(""); // 선택된 값을 저장하는 상태 변수
  const [admissionAge, setAdmissionAge] = useState(""); // 입학년도
  const [schoolGrade, setSchoolGrade] = useState(""); // 학년
  const [schoolClass, setschoolClass] = useState(""); // 반
  const [schoolNumber, setschoolNumber] = useState(""); // 번호
  const [schoolName, setSchoolName] = useState(""); // 학교 이름
  const [showCopyright, setShowCopyright] = useState(false);

  const reduxInput = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInput(name, value));
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value); // 라디오 버튼 값이 변경될 때마다 상태 변수 업데이트
    reduxInput(event); // StudentInfo() 실행을 위해 setRole 이후 reduxInput 실행
  };
  //입학년도 바꾸기
  const handleAgeChange = (event) => {
    setAdmissionAge(event.target.value);
    reduxInput(event);
  };
  //학년 바꾸기
  const handleGradeChange = (event) => {
    setSchoolGrade(event.target.value);
    reduxInput(event);
  };
  //반 바꾸기
  const handleClassChange = (event) => {
    setschoolClass(event.target.value);
    reduxInput(event);
  };
  //번호 바꾸기
  const handleNumberChange = (event) => {
    setschoolNumber(event.target.value);
    reduxInput(event);
  };
  // 학교 이름 바꾸기
  const handleSchoolNameChange = (event) => {
    setSchoolName(event.target.value);
    reduxInput(event);
  };

  // "학생"이 선택되면 Copyright 컴포넌트를 렌더링하도록 설정
  useEffect(() => {
    if (role === "student") {
      setShowCopyright(true);
    } else {
      setShowCopyright(false);
    }
  }, [role]);

  function StudentInfo() {
    return (
      <InnerContainer>
        <TitleText>반, 번호 입력</TitleText>
        <FlexRow>
          <FormControl sx={{ width: 120, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">학년 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolGrade}
              label="admission"
              onChange={handleGradeChange}
              name="admissionYear"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <TitleText>학년</TitleText>

          <FormControl sx={{ width: 100, marginLeft: 1.5, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">반 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolClass}
              label="admission"
              onChange={handleClassChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
          <TitleText>반</TitleText>

          <FormControl sx={{ width: 120, marginLeft: 1.5, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">번호 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolNumber}
              label="admission"
              onChange={handleNumberChange}
            >
              <MenuItem value="" disabled>
                1
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
          <TitleText>번호</TitleText>
        </FlexRow>
      </InnerContainer>
    );
  }

  return (
    <ContainerWidth_1920>
      <Container>
        <Notelass>학교 정보 입력</Notelass>
        <InnerContainer>
          <TitleText>학교 검색</TitleText>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              schoolName
                ? schoolList
                : [{ label: "등록한 학교 이름만 나옵니다" }]
            } // school name이 있을 때만 options 출력
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            onInputChange={handleSchoolNameChange} // 입력 값이 변경될 때 마다 handleSchoolNameChange 함수 호출
            renderInput={(params) => (
              <TextField
                {...params}
                label="학교 이름을 입력해주세요"
                // onChange={reduxInput}
                // name="school"
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
        <InnerContainer>
          <TitleText>신분 선택</TitleText>
          <RadioGroup value={role} onChange={handleRoleChange} name="role">
            <FlexRow>
              <FormControlLabel
                value="teacher"
                control={<Radio />}
                label="선생님"
                style={{
                  color: role === "teacher" ? "black" : "gray",
                }}
              />
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="학생"
                style={{
                  color: role === "student" ? "black" : "gray",
                }}
              />
            </FlexRow>
          </RadioGroup>
        </InnerContainer>

        {/* "학생"이 선택된 경우에만 Copyright 컴포넌트 렌더링 */}
        {showCopyright && <StudentInfo align="center"></StudentInfo>}
        <NextButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          다음
        </NextButton>
      </Container>
    </ContainerWidth_1920>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const schoolList = [
  { label: "강남중학교", year: 2000 },
  { label: "남서울중학교", year: 2000 },
  { label: "노원중학교", year: 2000 },
  { label: "대한중학교", year: 2000 },
  { label: "라온중학교", year: 2000 },
  { label: "마산중학교", year: 2000 },
  { label: "부산중학교", year: 2000 },
  { label: "송탄중학교", year: 2000 },
  { label: "의정부중학교", year: 2000 },
  { label: "의정부서중학교", year: 2000 },
  { label: "중곡중학교", year: 2000 },
  { label: "청담중학교", year: 2000 },
  { label: "통영중학교", year: 2000 },
  { label: "판교중학교", year: 2000 },
  { label: "하남중학교", year: 2000 },
];
