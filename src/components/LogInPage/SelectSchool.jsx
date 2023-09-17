import React, { useState } from "react";
import styled from "styled-components";
// 신분 선택
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// 학교 검색
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: inherit;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 800px;
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
  font-weight: bold;
  font-size: 30px;
`;

export default function SelectSchool() {
  const [selectedValue, setSelectedValue] = useState(""); // 선택된 값을 저장하는 상태 변수

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // 라디오 버튼 값이 변경될 때마다 상태 변수 업데이트
  };
  return (
    <ContainerWidth_1920>
      <Container>
        <Notelass>학교 정보 입력</Notelass>
        <TitleText>학교 검색</TitleText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={schoolName}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="학교 이름" />}
        />
        <TitleText>입학 년도</TitleText>
        <TitleText>신분 선택</TitleText>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel
            value="teacher"
            control={<Radio />}
            label="선생님"
          />
          <FormControlLabel value="student" control={<Radio />} label="학생" />
        </RadioGroup>
      </Container>
    </ContainerWidth_1920>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const schoolName = [
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
