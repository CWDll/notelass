import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../../../action/userInputActions";
import * as S from "./style";

// 신분 선택
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Autocomplete from "@mui/material/Autocomplete";
// 입학 년도
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectRole() {
  const navigate = useNavigate();
  // redux 사용
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const [role, setRole] = useState(""); // 선택된 값을 저장하는 상태 변수
  const [admissionAge, setAdmissionAge] = useState(""); // 입학년도
  const [schoolGrade, setSchoolGrade] = useState(""); // 학년
  const [schoolClass, setschoolClass] = useState(""); // 반
  const [schoolNumber, setschoolNumber] = useState(""); // 번호
  const [school, setSchool] = useState(""); // 학교 이름
  const [name, setName] = useState("");
  const [showCopyright, setShowCopyright] = useState(false);

  const reduxInput = (event) => {
    const { name, value } = event;
    dispatch(setUserInput(name, value));
    console.log("reduxInput의 nama과 value입니덩: " + name, value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value); // 라디오 버튼 값이 변경될 때마다 상태 변수 업데이트
    reduxInput(event.target); // StudentInfo() 실행을 위해 setRole 이후 reduxInput 실행
  };
  //입학년도 바꾸기
  const handleAgeChange = (event) => {
    setAdmissionAge(event.target.value);
    console.log(event.target.value);
    reduxInput(event.target);
  };
  //학년 바꾸기
  const handleGradeChange = (event) => {
    setSchoolGrade(event.target.value);
    reduxInput(event.target);
  };
  //반 바꾸기
  const handleClassChange = (event) => {
    setschoolClass(event.target.value);
    reduxInput(event.target);
  };
  //번호 바꾸기
  const handleNumberChange = (event) => {
    setschoolNumber(event.target.value);
    reduxInput(event.target);
  };
  // 학교 이름 바꾸기
  const handleSchoolNameChange = (event) => {
    setSchool(event.target.value);
    reduxInput(event.target);
  };
  // 이름 바꾸기
  const handleNameChange = (event) => {
    setName(event.target.value);
    reduxInput(event.target);
  };

  const handleSubmit = () => {
    if (role === "TEACHER") {
      if (name === "") {
        alert("이름을 입력하세요.");
        return;
      }
    } else if (role === "STUDENT") {
      if (name == "") {
        alert("이름을 입력하세요.");
        return;
      } else if (schoolGrade == "" || schoolClass == "" || schoolNumber == "") {
        alert("학년, 반, 번호를 확인하세요.");
        return;
      }
    } else {
      alert("신분을 선택하세요.");
      return;
    }
    navigate("/EmailVerificationAndPassword");
  };

  // "학생"이 선택되면 Copyright 컴포넌트를 렌더링하도록 설정
  useEffect(() => {
    if (role === "STUDENT") {
      setShowCopyright(true);
    } else {
      setShowCopyright(false);
    }
  }, [role]);

  // 학생에게만 나오는 UI
  function StudentInfo() {
    return (
      <S.StudentInnerContainer>
        <S.TitleText>반, 번호 입력</S.TitleText>
        <S.FlexRow>
          <FormControl sx={{ width: 120, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">학년 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolGrade}
              label="grade"
              onChange={handleGradeChange}
              name="grade"
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <S.TitleText>학년</S.TitleText>

          <FormControl sx={{ width: 100, marginLeft: 1.5, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">반 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolClass}
              label="classNum"
              name="classNum"
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
          <S.TitleText>반</S.TitleText>

          <FormControl sx={{ width: 120, marginLeft: 1.5, marginRight: 1 }}>
            <InputLabel id="demo-simple-select-label">번호 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={schoolNumber}
              label="number"
              name="number"
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
          <S.TitleText>번호</S.TitleText>
        </S.FlexRow>
      </S.StudentInnerContainer>
    );
  }

  return (
    <S.ContainerWidth_1920>
      <S.Container>
        <S.Notelass>학교 정보 입력</S.Notelass>

        <S.InnerContainer>
          <S.TitleText>신분 선택</S.TitleText>
          <RadioGroup name="role" value={role} onChange={handleRoleChange}>
            <S.FlexRow>
              <FormControlLabel
                value="TEACHER"
                control={<Radio />}
                label="선생님"
                style={{
                  color: role === "TEACHER" ? "black" : "gray",
                }}
              />
              <FormControlLabel
                value="STUDENT"
                control={<Radio />}
                label="학생"
                style={{
                  color: role === "STUDENT" ? "black" : "gray",
                }}
              />
            </S.FlexRow>
          </RadioGroup>
        </S.InnerContainer>
        <S.InnerContainer>
          <S.TitleText>이름 입력</S.TitleText>
          <S.StyledTextField
            id="name-input"
            variant="standard"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={handleNameChange}
            name="name"
          />
        </S.InnerContainer>

        {/* "학생"이 선택된 경우에만 Copyright 컴포넌트 렌더링 */}
        {showCopyright && <StudentInfo align="center"></StudentInfo>}
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
