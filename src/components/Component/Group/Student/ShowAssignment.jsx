import React, { useState, useEffect, useContext,useRef } from "react";
import instance from "src/assets/api/axios";

import styled from "styled-components";


const Foot = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  /* margin-bottom: auto; */
  position: absolute;
  margin-left: 450px;
  margin-top: 30px;
  margin-bottom: 30px;
`;



const BigTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: bold;
  /* margin-left: 24px;
  margin-top: 72px; */
  font-family: Pretendard;
`;

const CreateTitle = styled(BigTitle)`
  margin-left: 32px;
  margin-top: 32px;
  font-family: Pretendard;
`;

const SmallTitle = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


const AssigmentCreateForm = styled.div`
  width: 684px;
  height: 800px;
  background-color: white;
  margin-right: 30px;
  margin-top: -30px;
  border-radius: 16px;
`;



const HeadInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; // 여기를 변경
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding-left: 32px; // 왼쪽 패딩 추가
`;

const LegInput = styled(HeadInput)`
  justify-content: flex-start;
  margin-left: 30px;
`;


const CancelBtn = styled.button`
position: absolute;

  width: 64px;
  height: 40px;
  border-radius: 6px;
  background-color: #e6e8ee;
  font-size: 14px;
  margin-right: -80px;
  
  margin-top: -10px;
`;

const SubmitBtn = styled.button`
position: absolute;

  width: 100px;
  height: 40px;
  border-radius: 6px;
  background-color: #4849ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-right: -295px;
  margin-top: -10px;
`;


const LibraryButton = styled.button`
  display: inline-flex;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  color: var(--cool-grayscale-placeholder, #9ea4aa);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Btn = styled.button`
  display: inline-flex;
  height: 28px;
  margin: 8px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  background: #f5f5fc;
  color: ${(props) => (props.selected ? "#4849FF" : "#9E9E9E")};
  border: none;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &.firstButton {
    margin-left: 460px;
  }
`;

const Title = styled.div`
  display: flex;
  margin-top: -35px;
`;

const FileList = styled.div`
 
  margin-left: -330px;
`;

const FileItem = styled.div`
  width: 590px;
  height: 40px;
  background: #f5f5fc;
  border: 1px solid #e6e8ee;
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 330px;
`;

const FileName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Cool-Grayscale-Placeholder, #9ea4aa);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FileSize = styled.span`
  color: var(--Cool-Grayscale-Placeholder, #9ea4aa);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 파일 아이콘을 표시하기 위한 스타일 컴포넌트
const FileIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const NoticeInfo = styled.div`
  display: flex;
`;

const AssignInfo = styled.div`
  display: flex;
`;

const QuestionList = styled.div`
  position: absolute;
`;

const Qbtn = styled.button`
  display: inline-flex;
  width: 105px;
  height: 40px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 315px;
  margin-top: -40px;

  border-radius: 6px;
  background: var(--Primary-Light-cobalt, #ededff);

  color: #4849ff;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Cancle = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  z-index: 1;
  margin-left: 575px;
`;

const FileContainer = styled.div`
  display: flex;
  height: 110px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #e6e8ee;
  border-radius: 8px;
  padding: 10px;
  width: 620px;
  margin-left:30px;

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

`;


const ShowAssignment = () => {
    const [files, setFiles] = useState([]);

    const imageInput = useRef();

      //파일 업로드 핸들러
  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    if (fileUploaded) {
      setFiles((prevFiles) => [...prevFiles, fileUploaded]);
      console.log(files);
    }
  };

  
  // 과제, 공지, 강의자료 생성 POST API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (selectedButton === "공지") {
      await createNotice();
    } else if (selectedButton === "강의자료") {
      await createMaterial();
    }
  };

  //공지 생성 함수
  const createNotice = async () => {
    const formData = new FormData();
    try {
      // 제목과 내용이 공백인지 확인
      if (assignmentName.trim() === "" || assignmentDesc.trim() === "") {
        alert("제목과 내용을 입력해주세요.");
        return;
      }

      // JSON 데이터 준비
      const noticeDto = JSON.stringify({
        title: assignmentName,
        content: assignmentDesc,
      });
      const blob = new Blob([noticeDto], {
        type: "application/json",
      });
      formData.append("noticeDto", blob);

      // 파일 데이터 추가
      files.forEach((file, index) => {
        formData.append(`file`, file);
      });

      // API 요청
      const response = await instance.post(
        `/api/notice/${paramsGroupId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert("test");
        navigate("/login");
      }

      // 응답 처리
      console.log("공지 생성 완료:", response.data);
      alert("공지가 성공적으로 생성되었습니다.");
    } catch (error) {
      console.error("공지 생성 실패:", error);
      alert("공지 생성에 실패했습니다.");
    }
  };

  //강의자료 생성 함수
  const createMaterial = async () => {
    const formData = new FormData();
    try {
      // 제목, 내용, 파일이 공백인지 확인
      if (
        assignmentName.trim() === "" ||
        assignmentDesc.trim() === "" ||
        files.length === 0
      ) {
        let alertMessage = "제목과 내용을 입력해주세요.";
        if (files.length === 0) {
          alertMessage = "최소 한 개의 파일을 첨부해주세요.";
        }
        alert(alertMessage);
        return;
      }

      // JSON 데이터 준비
      const materialDto = JSON.stringify({
        title: assignmentName,
        content: assignmentDesc,
      });

      // JSON을 파일로 변환하여 FormData에 추가
      const dtoFile = new Blob([materialDto], { type: "application/json" });
      formData.append("materialDto", dtoFile);

      // 파일 데이터 추가
      files.forEach((file) => {
        formData.append(`file`, file);
      });

      // API 요청
      const response = await instance.post(
        `/api/material/${paramsGroupId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // 응답 처리
      console.log("강의자료 생성 완료:", response.data);
      alert("강의자료가 성공적으로 생성되었습니다.");
    } catch (error) {
      console.error("강의자료 생성 실패:", error);
      alert("강의자료 생성에 실패했습니다.");
    }
  };

  const renderFileList = () => (
    <FileList>
      {files.map((file, index) => (
        <FileItem key={index}>
          <FileIcon src={FileEarmarkZip} alt="file icon" />
          <FileName>{file.name}</FileName>
          <FileSize>({(file.size / 1024).toFixed(2)} KB)</FileSize>
        </FileItem>
      ))}
    </FileList>
  );

    // Header를 클릭할 때 실행할 핸들러
    const handleHeaderClick = () => {
        // 원하는 경로로 이동
        navigate(-1);
      };
   
    
    return (
        <div >
         <AssigmentCreateForm>
          <CreateTitle>공지/강의자료</CreateTitle>
          <Title>
           
        
          </Title>

          <LegInput>
            <SmallTitle style={{ marginLeft: "-30px" }}>
              파일 첨부
            </SmallTitle>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={imageInput}
              multiple
            />
            <LibraryButton
              onClick={() => imageInput.current.click()}
              style={{ marginLeft: "15px" }}
            >
              라이브러리에서 파일 탐색
            </LibraryButton>
          </LegInput>

          <FileContainer>{renderFileList()}</FileContainer>
          <Foot>
            <SubmitBtn type="submit" onClick={handleSubmit}>
              생성하기
            </SubmitBtn>

            <CancelBtn type="button" onClick={handleHeaderClick}>
              취소
            </CancelBtn>
          </Foot>
        </AssigmentCreateForm>
        </div>
    );
};

export default ShowAssignment;
