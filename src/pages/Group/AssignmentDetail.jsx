import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import axios from "../../assets/api/axios";

import FileEarmarkZip from "../../assets/FileEarmarkZip.svg";
const Wrapper = styled.div`
  width: 1920px;
  min-height: 1080px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

// Left Body 시작
const Header = styled.header`
  display: flex;
  margin-bottom: 50px;
  /* justify-content: center; */
  /* margin: 70px 0 55px 357px; */
  /* align-items: center; */
  /* flex-direction: row; */
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BigTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: bold;
  /* margin-left: 24px;
  margin-top: 72px; */
  font-family: Pretendard;
`;

const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
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

const SubText = styled.p`
  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 5px;
`;

const AssigmentCreateForm = styled.div`
  width: 684px;
  height: 800px;
  background-color: white;
  margin-right: 30px;
`;

const AssignmentSettingForm = styled.div`
  width: 480px;
  height: 800px;
  background-color: white;
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

const BodyInput = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-left: 29.5px;
  margin-top: 25px;
`;

const LegInput = styled(HeadInput)`
  justify-content: flex-start;
  margin-left: 30px;
`;

const InputTitle = styled.input.attrs({
  placeholder: "과제 제목을 입력하세요.",
  placeholdertextcolor: "red",
})`
  width: ${(props) =>
    props.selectedButton === "강의자료" ? "493px" : "525px"};
  height: 40px;
  border-radius: 8px;
  border: 1px solid #c9cdd2;
  padding: 10px;
  margin-left: 24px;
`;

const InputDesc = styled.textarea.attrs({
  placeholder: "과제 설명을 입력하세요.",
  placeholdertextcolor: "red",
})`
  width: 620px;
  height: 320px;
  /* background-color: purple; */
  border-radius: 8px;
  resize: none;
  border: 1px solid #c9cdd2;
  margin-top: 10px;
  padding: 10px;
`;

const CancelBtn = styled.button`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background-color: #e6e8ee;
  font-size: 14px;
  margin-right: 20px;
`;

const SubmitBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #4849ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
// Left Body 끝
// Right Body 시작
const SettingBox = styled.div`
  margin-top: 20px;
  margin-left: 45px;
  width: 80%;
  height: 60px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-items: center;
  flex-direction: column;
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
  margin-top: 15px;
  margin-left: -300px;
`;

const FileItem = styled.div`
  width: 620px;
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

// Right Body 끝

function AssignmentDetail() {
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");
  const [selectedButton, setSelectedButton] = useState("과제");
  // 파일 상태 추가
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();

  // Header를 클릭할 때 실행할 핸들러
  const handleHeaderClick = () => {
    // 원하는 경로로 이동
    navigate("/GroupDetailClass");
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

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  // 파일 업로드 핸들러
  const handleFileChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    if (fileUploaded) {
      setFiles((prevFiles) => [...prevFiles, fileUploaded]);
      console.log(files);
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

  return (
    <Wrapper>
      <Header onClick={handleHeaderClick}>
        <Img src={chevron_left} alt="chevron_left" />
        <BoldTitle>노트고등학교 3학년 1반 문학</BoldTitle>
      </Header>
      <Body>
        <AssigmentCreateForm>
          <CreateTitle>과제/공지/강의자료 생성</CreateTitle>
          <Title>
            <Btn
              className="firstButton"
              onClick={() => handleButtonClick("과제")}
              selected={selectedButton === "과제"}
            >
              과제
            </Btn>
            <Btn
              onClick={() => handleButtonClick("공지")}
              selected={selectedButton === "공지"}
            >
              공지
            </Btn>
            <Btn
              onClick={() => handleButtonClick("강의자료")}
              selected={selectedButton === "강의자료"}
            >
              강의자료
            </Btn>
          </Title>

          <HeadInput>
            <SmallTitle>
              {selectedButton === "과제"
                ? "과제 제목"
                : selectedButton === "공지"
                ? "공지 제목"
                : "강의자료 제목"}
            </SmallTitle>
            <InputTitle
              type="text"
              name="username"
              value={assignmentName}
              onChange={onChangeName}
              selectedButton={selectedButton}
            />
          </HeadInput>
          <BodyInput>
            <SmallTitle>
              {selectedButton === "과제"
                ? "과제 설정"
                : selectedButton === "공지"
                ? "공지 설정"
                : "강의자료 설정"}
            </SmallTitle>
            <InputDesc
              type="text"
              name="username"
              value={assignmentDesc}
              onChange={onChangeDesc}
              selectedButton={selectedButton}
            />
          </BodyInput>
          <LegInput>
            <SmallTitle style={{ marginLeft: "-30px" }}>파일 첨부</SmallTitle>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={imageInput}
            />
            <LibraryButton
              onClick={() => imageInput.current.click()}
              style={{ marginLeft: "15px" }}
            >
              라이브러리에서 파일 탐색
            </LibraryButton>
          </LegInput>
          {renderFileList()}
          <Foot>
            <SubmitBtn type="submit">생성하기</SubmitBtn>
            <CancelBtn type="submit">취소</CancelBtn>
          </Foot>
        </AssigmentCreateForm>
        <AssignmentSettingForm>
          <CreateTitle>과제 설정</CreateTitle>
          <SettingBox>
            <SmallTitle>과제 제목</SmallTitle>
            <SubText>20.05.01, 12:00 AM</SubText>
          </SettingBox>
          <SettingBox>
            <SmallTitle>과제 종류</SmallTitle>
            <SubText>수행평가</SubText>
          </SettingBox>
          <SettingBox>
            <SmallTitle>허용된 시도</SmallTitle>
            <SubText>2회</SubText>
          </SettingBox>
          <SettingBox>
            <SmallTitle>배점</SmallTitle>
            <SubText>100점</SubText>
          </SettingBox>
          <SettingBox>
            <SmallTitle>할당된 그룹</SmallTitle>
            <SubText>노트고등학교 3학년 1반 문학</SubText>
          </SettingBox>
        </AssignmentSettingForm>
      </Body>
    </Wrapper>
  );
}

export default AssignmentDetail;
