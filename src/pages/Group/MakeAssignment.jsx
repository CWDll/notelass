import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import chevron_left from "../../assets/chevron_left.svg";
import axios from "../../assets/api/axios";
import instance from "../../assets/api/axios";
import RoleContext from "../../RoleContext";

import FileEarmarkZip from "../../assets/FileEarmarkZip.svg";
import AssignInfo from "../../components/Component/Notice/AssignInfo";
import NoticeInfo from "../../components/Component/Notice/NoticeInfo";
import ShowAssignment from "../../components/Component/Group/Student/ShowAssignment";

import exit from "../../assets/exit.svg";

import * as S from "../Style/AssignmentStyle";

function MakeAssignment() {
  const { paramsGroupId, id, groupId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const info = location.state;
  console.log("MA의 info:", info);

  const { role } = useContext(RoleContext);

  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");
  const [selectedButton, setSelectedButton] = useState("공지");
  // 파일 상태 추가
  const [files, setFiles] = useState([]);

  // Header를 클릭할 때 실행할 핸들러
  const handleHeaderClick = () => {
    // 원하는 경로로 이동
    navigate(-1);
  };

  const handleCancleClick = () => {
    navigate(`/GroupDetailClass/${paramsGroupId}`);
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

  // const handleFileChange = (e) => {
  //   setFiles([...e.target.files]);
  // };

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

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
    } else if (selectedButton === "학습자료") {
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

      let response;
      // 수정 API
      if (info.intent == "corr") {
        response = await instance.put(
          `/api/notice/${paramsGroupId}/${info.noticeId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // 생성 API
        response = await instance.post(
          `/api/notice/${paramsGroupId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      console.log("asd");
      console.log("response상태", response.status);
      console.log("response상태", response);

      if (response.status == 201) {
        alert("공지 생성 완료 ! ");
        // 추후 네비게이트 수정 필요
        navigate(-1);
      } else if (response.status == 200) {
        alert("공지 수정이 완료되었습니다.");
        // 추후 네비게이트 수정 필요
        navigate(-1);
      } else if (response.status == 204) {
        alert("!!!");
      }
    } catch (error) {
      if (info.intent == "corr") {
        alert("공지가 성공적으로 수정되었습니다.");
        navigate(-1);
        return;
      }
      console.error("공지 생성 실패:", error);
      alert("공지 생성에 실패했습니다.");
      console.log(response.status);
      // navigate(-1);

      // 2024-02-23
      // 현재 수정이 완료되었음에도 Error code: 500 을 반환하며 error가 나오는 현상이 발견됨.
    }
  };

  // 수정 버튼으로 들어왔을 시 데이터 불러오기
  useEffect(() => {
    const fetchGroups = async () => {
      if (info.intent == "corr") {
        try {
          const res = await instance.get(
            `/api/notice/detail?noticeId=${info.noticeId}`
          );
          if (res.status === 200) {
            setAssignmentName(res.data.result.title);
            setAssignmentDesc(res.data.result.content);
            setFiles(res.data.result.files);
          } else {
            console.log("테스트 실패");
          }
        } catch (error) {
          console.error("fetchGroups에서 오류 발생", error);
        }
      } else {
        try {
          const response = await instance.get(`/api/group`);
          if (response.status === 200 && Array.isArray(response.data.result)) {
            const matched = response.data.result.find(
              (group) => group.id.toString() === paramsGroupId
            );
            if (matched) {
              setMatchedGroup(matched);
              console.log("Matched 그룹 정보:", matched);
            } else {
              console.error("Matching group not found");
            }
          } else {
            console.error("그룹 목록을 불러오는데 실패했습니다.");
          }
        } catch (error) {
          console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
        }
      }
    };
    fetchGroups();
  }, [paramsGroupId]);

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
      console.log("학습자료 생성 완료:", response.data);
      alert("학습자료가 성공적으로 생성되었습니다.");
      handleHeaderClick();
    } catch (error) {
      console.error("학습자료 생성 실패:", error);
      alert("학습자료 생성에 실패했습니다.");
    }
  };

  const handleFileDelete = (index) => {
    // 삭제할 파일을 제외한 새로운 파일 목록 생성
    const newFiles = files.filter((file, i) => i !== index);

    // 새로운 파일 목록으로 업데이트
    setFiles(newFiles);
  };

  const renderFileList = () => (
    <S.FileList>
      {files.map((file, index) => (
        <>
          <S.FileItem key={index}>
            <S.FileIcon src={FileEarmarkZip} alt="file icon" />
            <S.FileName>{file.name}</S.FileName>
            <S.FileSize>({(file.size / 1024).toFixed(2)} KB)</S.FileSize>

            <S.Exit
              src={exit}
              alt="exit"
              onClick={() => handleFileDelete(index)}
            />
          </S.FileItem>
        </>
      ))}
    </S.FileList>
  );

  return (
    <S.Wrap>
      <S.Wrapper>
        <S.Header>
          <S.Img
            onClick={handleHeaderClick}
            src={chevron_left}
            alt="chevron_left"
          />
          <S.BoldTitle>
            {info.info.school} {info.info.grade}학년 {info.info.classNum}반{" "}
            {info.info.subject}
          </S.BoldTitle>
        </S.Header>

        <S.Body>
          {role === "STUDENT" ? (
            <ShowAssignment />
          ) : (
            <S.AssigmentCreateForm>
              <S.CreateTitle>공지/학습자료</S.CreateTitle>
              <S.Title>
                {/* {["과제", "공지", "강의자료"].map((value, index) => ( */}
                {["공지", "학습자료"].map((value, index) => (
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
                  {/* {selectedButton === "과제"
                ? "과제 "
                : selectedButton === "공지"
                ? "공지 제목"
                : "강의자료 제목"} */}
                  {selectedButton === "학습자료"
                    ? "학습자료 제목"
                    : "공지 제목"}
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
                      ? "공지 제목을 입력하세요."
                      : "학습자료 설명을 입력하세요."
                  }
                />
              </S.HeadInput>
              <S.BodyInput>
                <S.SmallTitle>
                  {selectedButton === "과제"
                    ? "과제 설정"
                    : selectedButton === "공지"
                    ? "공지 설정"
                    : "학습자료 설정"}
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
                      : "학습자료 설명을 입력하세요."
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
                  multiple
                />
                <S.LibraryButton
                  onClick={() => imageInput.current.click()}
                  style={{ marginLeft: "15px" }}
                >
                  라이브러리에서 파일 탐색
                </S.LibraryButton>
              </S.LegInput>

              <S.FileContainer>{renderFileList()}</S.FileContainer>
              <S.Foot>
                <S.SubmitBtn type="submit" onClick={handleSubmit}>
                  {info.intent === "corr" ? "수정하기" : "생성하기"}
                </S.SubmitBtn>

                <S.CancelBtn type="button" onClick={handleHeaderClick}>
                  취소
                </S.CancelBtn>
              </S.Foot>
            </S.AssigmentCreateForm>
          )}
          <S.AssignmentSettingForm>
            <S.CreateTitle>
              {selectedButton === "과제"
                ? "과제 설정"
                : selectedButton === "공지"
                ? "공지 설정"
                : "학습자료 설정"}
            </S.CreateTitle>
            {selectedButton === "과제" ? (
              <AssignInfo />
            ) : (
              <NoticeInfo
                paramsGroupId={paramsGroupId}
                info={info}
                infoteacher={info.teacher}
              />
            )}
          </S.AssignmentSettingForm>
        </S.Body>
      </S.Wrapper>
    </S.Wrap>
  );
}

export default MakeAssignment;
