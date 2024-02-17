import React, { useState, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import axios from "../../assets/api/axios";

import FileEarmarkZip from "../../assets/FileEarmarkZip.svg";
import AssignInfo from "../../components/Component/Notice/AssignInfo";
import NoticeInfo from "../../components/Component/Notice/NoticeInfo";

import * as S from "../Style/AssignmentStyle";

function AssignmentDetail() {
  const { paramsGroupId, id, groupId } = useParams();
  const location = useLocation();
  // console.log("location: ", location);
  const info = location.state;
  // console.log("info:", info);

  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");
  const [selectedButton, setSelectedButton] = useState("과제");
  // 파일 상태 추가
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();
  // 헤더 클릭하여 뒤로가기
  const handleHeaderClick = () => {
    navigate(-1);
  };

  const onChangeName = (e) => {
    setAssignmentName(e.target.value);
  };
  const onChangeDesc = (e) => {
    setAssignmentDesc(e.target.value);
  };
  // useRef를 이용해 input태그에 접근한다.
  const imageInput = useRef();

  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    let response; // 한 번만 선언
    
    //공지 생성 POST API
    if (selectedButton === '공지') {
      try {
        // JSON 데이터 준비
        const noticeDto = JSON.stringify({
          title: assignmentName,
          content: assignmentDesc,
        });
        const blob = new Blob([noticeDto], {
          type: "application/json",
        });
        formData.append('noticeDto', blob);
    
        // 파일 데이터 추가
        files.forEach((file, index) => {
          formData.append(`file`, file);
        });

        // API 요청
        response = await axios.post( // 이미 선언된 response 변수를 사용
          `/api/notice/${paramsGroupId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        // 응답 처리
        const noticeId = response.data.message.match(/공지 ID: (\d+)/)[1];
        console.log('공지 생성 완료:', response.data);
        console.log('생성된 공지의 ID:', noticeId);
        alert('공지가 성공적으로 생성되었습니다.');
        
      } catch (error) {
        console.error('공지 생성 실패:', error);
        alert('공지 생성에 실패했습니다.');
      }

    //강의자료 생성 POST API  
    } else if (selectedButton === '강의자료') {
      try {
        // JSON 데이터 준비
        const materialDto = JSON.stringify({
          title: assignmentName,
          content: assignmentDesc,
        });
        const blob = new Blob([materialDto], {
          type: 'application/json'
        });
        formData.append('materialDto', blob);
    
        // 파일 데이터 추가
        files.forEach((file, index) => {
          formData.append(`file`, file);
        });
    
        // API 요청
        response = await axios.post(`/api/material/${paramsGroupId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        // 응답 처리
        const materialId = response.data.message.match(/강의자료 ID: (\d+)/)[1];
        console.log('강의 자료 생성 완료:', response.data);
        console.log('생성된 강의 자료의 ID:', materialId);
        alert('강의 자료가 성공적으로 생성되었습니다.');
        
      } catch (error) {
        console.error('강의 자료 생성 실패:', error);
        alert('강의 자료 생성에 실패했습니다.');
      }
    }
  };

  const renderFileList = () => (
    <S.FileList>
      {files.map((file, index) => (
        <S.FileItem key={index}>
          <S.FileIcon src={FileEarmarkZip} alt="file icon" />
          <S.FileName>{file.name}</S.FileName>
          <S.FileSize>({(file.size / 1024).toFixed(2)} KB)</S.FileSize>
        </S.FileItem>
      ))}
    </S.FileList>
  );

  return (
    <S.Wrapper>
      <S.Header>
        <S.Img
          onClick={handleHeaderClick}
          src={chevron_left}
          alt="chevron_left"
        />
        <S.BoldTitle>노트고등학교 3학년 1반 문학</S.BoldTitle>
      </S.Header>
      <S.Body>
        <S.AssigmentCreateForm>
          <S.CreateTitle>과제/공지/강의자료 생성</S.CreateTitle>
          <S.Title>
            {["과제", "공지", "강의자료"].map((value, index) => (
              <S.Btn
                key={value}
                className={index === 0 ? "firstButton" : ""}
                onClick={() => handleButtonClick(value)}
                selected={selectedButton === value}
              >
                {value}
              </S.Btn>
            ))}
          </S.Title>

          <S.HeadInput>
            <S.SmallTitle>
              {selectedButton === "과제"
                ? "과제 제목"
                : selectedButton === "공지"
                ? "공지 제목"
                : "강의자료 제목"}
            </S.SmallTitle>
            <S.InputTitle
              type="text"
              name="username"
              value={assignmentName}
              onChange={onChangeName}
              selectedButton={selectedButton}
              placeholder={
                selectedButton === "과제"
                  ? "과제 설명을 입력하세요."
                  : selectedButton === "공지"
                  ? "공지 내용을 입력하세요."
                  : "강의자료 설명을 입력하세요."
              }
            />
          </S.HeadInput>
          <S.BodyInput>
            <S.SmallTitle>
              {selectedButton === "과제"
                ? "과제 설정"
                : selectedButton === "공지"
                ? "공지 설정"
                : "강의자료 설정"}
            </S.SmallTitle>
            <S.InputDesc
              type="text"
              name="username"
              value={assignmentDesc}
              onChange={onChangeDesc}
              selectedButton={selectedButton}
              placeholder={
                selectedButton === "과제"
                  ? "과제 설명을 입력하세요."
                  : selectedButton === "공지"
                  ? "공지 내용을 입력하세요."
                  : "강의자료 설명을 입력하세요."
              }
            />
          </S.BodyInput>
          <S.LegInput>
            <S.SmallTitle style={{ marginLeft: "-30px" }}>
              파일 첨부
            </S.SmallTitle>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={imageInput}
            />
            <S.LibraryButton
              onClick={() => imageInput.current.click()}
              style={{ marginLeft: "15px" }}
            >
              라이브러리에서 파일 탐색
            </S.LibraryButton>
          </S.LegInput>
          {renderFileList()}
          <S.Foot>
            <S.SubmitBtn type="submit" onClick={handleSubmit}>
              생성하기
            </S.SubmitBtn>
            <S.CancelBtn type="submit">취소</S.CancelBtn>
          </S.Foot>
        </S.AssigmentCreateForm>
        <S.AssignmentSettingForm>
          <S.CreateTitle>
            {selectedButton === "과제"
              ? "과제 설정"
              : selectedButton === "공지"
              ? "공지 설정"
              : "강의자료 설정"}
          </S.CreateTitle>
          {selectedButton === "과제" ? <AssignInfo /> : <NoticeInfo />}
        </S.AssignmentSettingForm>
      </S.Body>
    </S.Wrapper>
  );
}

export default AssignmentDetail;
