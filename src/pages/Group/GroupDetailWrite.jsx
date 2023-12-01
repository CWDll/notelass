import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import arrow_repeat from "../../assets/arrow_repeat.svg";
import chevron_right_Blue from "../../assets/chevron_right_Blue.svg";
import exit from "../../assets/exit.svg";
import right from "../../assets/right.svg";
import noncheck from "../../assets/noncheck.svg";
import check from "../../assets/check.svg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import axios from "../../assets/api/axios";
import instance from "../../assets/api/axios";
import BeatLoader from "react-spinners/BeatLoader";
import BarLoader from "react-spinners/BarLoader";

import StudentBook from "../Student/StudentBook";
import StudentBookContent from "../Student/StudentBookContent";
import { Check } from "@mui/icons-material";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const BlueTitle = styled.p`
  color: #2f80ed;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const StudentSelect = styled.select`
  width: 264px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 60px;

  /* 학생 선택 글씨 */
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 684px;
  min-height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 48px;
  overflow-y: hidden;
`;

const SaveButton = styled.button`
  width: 73px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 579px;
  margin-top: -34px;

  /* 저장하기, 엑셀로 출력 글씨 */
  color: #ffffff;
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 480px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 30px;
  margin-top: 48px;
  position: relative;
  overflow-y: auto;
`;

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 32px;
  margin-top: 32px;
`;

const ScoreList = styled.div`
  margin-left: 32px;
  margin-top: 12px;
  height: 48px;
`;

const ScoreTitle = styled.span`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  display: inline;
`;

const ScoreResult = styled.span`
  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: inline;
`;

const WritingBox = styled.div`
  width: 620px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 24px;
  padding-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 185px;
  border: none;
  resize: none;
  padding: 16px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
  
`;

const ByteCounting = styled.p`
  color: var(--cool-grayscale-placeholder, #9ea4aa);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 24px;
  margin-bottom: -15px;
`;

const SuggestWordContainer = styled.div`
  margin-left: 150px;
  margin-top: -92px;
`;

const SuggestWord = styled.div`
  display: inline-flex;
  padding: 3px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--primary-light-cobalt, #ededff);
  margin-top: 24px;

  &:not(:first-child) {
    margin-left: 8px;
  }

  color: #000;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const GuidelineContainer = styled.div`
  display: row;
  align-items: center;
  margin-left: 32px;
  margin-top: 16px;
`;

const GuidelineTitle = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ReapeatImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 570px;
  margin-top: -48px;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
`;

const GuidelineBox = styled.div`
  width: 620px;
  min-height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 24px;
  padding: 10px;
  overflow: hidden;
`;

const GuidelineText = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 24px 24px 24px 24px;
`;

const SavedTextContainer = styled.div`
  width: 620px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 16px;
`;

const SavedText = styled.pre`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  white-space: pre-wrap; /* 줄 바꿈 */
  word-wrap: break-word; /* 단어 바꿈 */
  padding: 16px 50px 16px 16px;
`;

const InfoContainer = styled.div`
  display: column;
  align-items: center;
  margin-left: 32px;
  margin-top: 16px;
`;

const TimeText = styled.p`
  color: #9ea4aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StudentBookText = styled.div`
  width: 413px;
  min-height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-top: 8px;
`;

const HancellButton = styled.button`
  display: inline-flex;
  width: 168px;
  height: 25px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #ededff;
  margin-left: 485px;
  margin-top: 8px;
  position: relative;

  color: var(--primary-cobalt, #4849ff);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SmallContainer = styled.div`
  width: 480px;
  height: 288px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

const Exit = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Notice = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 63px;
  margin-right: 63px;
  margin-top: 76px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;
  margin-right: 32px;
`;

const ExitButton = styled.button`
  width: 192px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-right: 16px;

  /* 나가기 글씨 */
  color: #ffffff;
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContinueButton = styled.button`
  width: 192px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;

  /* 계속 작성하기 글씨 */
  color: var(--primary-cobalt, #4849ff);
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Printexecl = styled.button`
  display: inline-flex;
  height: 46px;
  padding: 11px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #4849ff;
  margin-left: 260px;
  margin-top: 60px;

  /* 엑셀로 출력 글씨 */
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Percent = styled.input`
  display: flex;
  width: 56px;
  height: 25px;
  padding: 4px 12px 4px 31px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;
  margin-right: 8px;
  margin-left: 8px;

  /* % 글씨 */
  color: var(--primary-cobalt, #4849ff);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  padding-left: 12px;
`;

const PercentBody = styled.div`
  display: flex;
  align-items: column;
`;

const Print = styled.button`
  display: inline-flex;
  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 40px;
  margin-top: 56px;

  /* 출력하기 글씨 */
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

const PrintNotice = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  margin-top: 104px;
`;

const Keyword = styled.input`
  display: flex;
  width: 70px;
  height: 25px;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;
  margin-left: 5px;
  margin-top: -68px;
`;

const Text = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 24px 24px 24px 24px;
`;

const AssigncellButton = styled.button`
  margin-left: 8px;
  margin-top: 32px;
  display: inline-flex;
  height: 32px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #fff;

  border-radius: 999px;
  border: 1.6px solid #4849ff;

  /*글씨**/
  color: #26282b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Checkbox = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 370px;
  margin-top: -40px;
`;

const SyncButton = styled.button`
  display: flex;
  width: 164px;
  height: 25px;
  padding: 3px 0px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin-left: 168px;
  margin-top: -24px;
  background: #fff;

  border-radius: 999px;
  border: 1px solid #4849ff;

  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none; // 외곽선을 없애기 위해
    border: 1px solid #4849ff; // 기존의 테두리 스타일을 유지하기 위해
  }
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const KeywordChip = styled.div`
  padding: 3px 10px;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${(props) => (props.selected ? "#4849ff" : "#E7E7E7")};

  color: #26282b;

  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Line = styled.div`
  width: 619px;
  height: 0px;
  border: 1px solid #e7e7e7;
  margin-left: 32px;
  margin-top: 16px;
`;

const XIMG = styled.img`
  width: 10px;
  height: 10px;
`;



const SynonymsDisplay = styled.div`
  display: flex;
  height: 65px;
  padding-left: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  flex-direction: column;        

`;

const Synonym = styled.span`
  display: inline-block;
  margin-right: 8px;
  margin-top: 16px;
  background: #ededff;
  padding: 5px 10px;
  marin-left: -102px;

  
  border-radius: 10px;
  

  color: var(--primary-cobalt, #4849FF);
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;


const SelectedWord = styled.span`
  color: #4849ff;
`;

const SynonymTitle = styled.p`
color: #26282B;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const calculateByteCount = (text) => {
  let byteCount = 0;

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);

    if (charCode <= 0x7f) {
      byteCount += 1;
    } else if (charCode <= 0x7ff) {
      byteCount += 2;
    } else if (charCode <= 0xffff) {
      byteCount += 3;
    } else {
      byteCount += 4;
    }
  }

  return byteCount;
};

function GroupDetailWrite() {
  const { paramsGroupId, paramsUserId } = useParams(); // URL에서 id들의 매개변수의 값을 추출합니다.
  const location = useLocation();
  console.log("location: ", location);
  const info = location.state;
  console.log("info:", info);

  // 학생 수업 관련 state
  const [showStudentBook, setShowStudentBook] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [contentId, setContentId] = useState();
  // 학생 선택
  const [students, setStudents] = useState([]);
  //
  const [byteCount, setByteCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [savedText, setSavedText] = useState("");
  const [buttonText, setButtonText] = useState("저장하기");
  const [isTextSaved, setIsTextSaved] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();
  const [savedTextFromStudentBook, setSavedTextFromStudentBook] = useState("");
  const [guideLineText, setGuideLineText] = useState("");
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  // const [fetchText, setFetchText] = useState("");
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // 학생 수첩 관련 함수
  // StudentBook 모달을 열기 위한 함수
  const openStudentBook = (groupId, userId) => {
    setSelectedGroupId(groupId);
    setSelectedUserId(userId);
    setShowStudentBook(true);
  };

  // StudentBook 모달을 닫기 위한 함수
  const closeStudentBook = () => {
    setShowStudentBook(false);
  };

  const findGroupAndUserIdByEntryId = (entryId) => {
    console.log(entryId);
    console.log(
      "findGroupAndUserIdByEntryId에서의 studentBookEntries: ",
      studentBookEntries
    );
    const entry = studentBookEntries.find((entry) => entry.id === entryId);
    if (entry) {
      return { groupId: entry.groupId, userId: entry.userId };
    }
    return { groupId: null, userId: null };
  };

  // 학생 수첩 수정 버튼 클릭 핸들러
  const handleStudentBookEdit = (entryId) => {
    console.log("작동중입니다...");
    const entry = studentBookEntries.find((e) => e.id === entryId);
    console.log("entry", entry);
    console.log("entry.id", entry.id);
    console.log("entryIdType", typeof entry.id);
    console.log("entryId", entryId);

    if (entry) {
      setSelectedGroupId(paramsGroupId);
      setSelectedUserId(paramsUserId);
      setShowStudentBook(true);
      setContentId(entryId);
      console.log("setShowStudentBook=true 만든 상태");
    } else {
      console.error("학생 정보를 찾을 수 없음");
    }
    console.log("작동 끝??");
    console.log("showStudentBook의 상태: ", showStudentBook);
  };
  //

  //생활기록부 엑셀 파일 업로드 POST 함수
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      //클라이언트에서 파일 읽기
      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   try {
      //     const data = new Uint8Array(e.target.result);
      //     const workbook = XLSX.read(data, { type: "array" });
      //     const sheetName = workbook.SheetNames[0];
      //     const worksheet = workbook.Sheets[sheetName];
      //     const json = XLSX.utils.sheet_to_json(worksheet);
      //     console.log("Loaded data:", json); // 로드된 데이터 확인

      //     const studentSpecificAbilities = json
      //       .filter((row) => row["성명"].toString() === paramsUserId)
      //       .map((row) => row["세부능력 및 특기사항"])
      //       .join("\n");

      //     console.log(
      //       "Extracted studentSpecificAbilities:",
      //       studentSpecificAbilities
      //     ); // 추출된 데이터 확인
      //     setInputText(studentSpecificAbilities); // Textarea에 값을 설정
      //   } catch (error) {
      //     console.error("Error reading file:", error);
      //   }
      // };
      // reader.onerror = (error) => {
      //   console.error("Error occurred while reading file:", error);
      // };
      // reader.readAsArrayBuffer(file);

      // 서버에 파일 업로드
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await instance.post(
          `/api/record/excel/${paramsGroupId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201) {
          console.log("생활기록부 파일 업로드 성공!");
          setUploadStatus("업로드 성공!");
          await fetchText();
        } else {
          console.error(
            "예상치 못한 상태 코드:",
            response.status,
            response.data
          );
          setUploadStatus("업로드 실패: 예상치 못한 상태 코드");
        }
      } catch (error) {
        console.error("생활기록부 파일 업로드 중 오류 발생:", error);
        setUploadStatus("업로드 실패: 오류 발생");
      }
    }
  };

  // 생기부 다운로드 받기 GET 함수
  const exportToExcel = async () => {
    try {
      const response = await instance.get(`/api/record/excel/${paramsGroupId}`);
      if (response.status === 200 && response.data.result) {
        const fileUrl = response.data.result.fileUrl;
        console.log("생활기록부 다운로드:", response.data);

        const downloadLink = document.createElement("a");
        downloadLink.href = fileUrl;
        downloadLink.download = "과목별 세부능력 및 특기사항.cell";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        await deleteFile(paramsGroupId);
      } else {
        console.error("생활기록부 파일을 가져오는 데 실패했습니다:", response);
        alert("생활기록부 파일을 가져오지 못했습니다.");
      }
    } catch (error) {
      console.error("엑셀 파일을 가져오는 중 오류가 발생했습니다.", error);
      alert("엑셀 파일을 가져오는 중 오류가 발생했습니다.");
    }
  };

  //과제 성적 파일 업로드 POST 함수
  const uploadAssignment = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);

      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      try {
        const response = await instance.post(
          `/api/assignment/file/${paramsGroupId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response); // 서버 응답 확인

        if (response.status === 201) {
          console.log("과제 성적 파일 업로드 성공!");
          setUploadStatus("업로드 성공!"); // 상태 업데이트
        } else {
          console.error(
            "예상치 못한 상태 코드:",
            response.status,
            response.data
          );
          setUploadStatus("업로드 실패: 예상치 못한 상태 코드"); // 상태 업데이트
        }
      } catch (error) {
        console.error("과제 성적 파일 업로드 중 오류 발생:", error);
        setUploadStatus("업로드 실패: 오류 발생"); // 상태 업데이트
      }
    }
  };

  // 과제 점수 조회 GET 함수

  const [percentage, setPercentage] = useState("");
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [getAssignment, setgetAssignment] = useState([]);

  const fetchAssignment = async () => {
    try {
      const url = `/api/record/detail/${paramsGroupId}/${paramsUserId}?percentage=${percentage}`;
      console.log("요청 URL:", url);
      const response = await instance.get(url);
      console.log("과제 점수 조회 내용:", response.data);
      if (response.status === 200) {
        setFilteredAssignments(response.data.result.highScoreAssignmentList);
        console.log(
          "과제 점수 조회 내용2: ",
          response.data.result.highScoreAssignmentList
        );
      } else {
        console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
      }
    } catch (error) {
      console.error("과제 점수를 가져오지 못했습니다.:", error);
    }
  };

  useEffect(() => {
    if (paramsGroupId && paramsUserId && percentage) {
      fetchAssignment();
    }
  }, [paramsGroupId, paramsUserId, percentage]);

  const handlePercentChange = (e) => {
    setPercentage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchAssignment();
    }
  };

  //속한 그룹 조회 GET 함수
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    // console.log(
    //   "보자보자",
    //   paramsGroupId,
    //   paramsUserId,
    //   school,
    //   grade,
    //   classNum,
    //   subject
    // );
    const fetchGroups = async () => {
      try {
        const response = await instance.get("/api/group");
        if (response.status === 200 && Array.isArray(response.data.result)) {
          const filteredGroups = response.data.result.filter(
            (group) => group.id.toString() === paramsGroupId
          );
          setGroupList(filteredGroups);
          console.log("그룹 목록:", filteredGroups);
        } else {
          console.error("그룹 목록을 불러오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
      }
    };

    fetchGroups();
  }, []);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    setSelectedWord(''); 
    setSynonyms([]);
    navigate(`/GroupDetailWrite/${paramsGroupId}/${e.target.value}`, {
      replace: true,
    });
  };

  const navigate = useNavigate();
  const BackButton = () => {
    navigate(-1);
  };

  //학생 수첩 체크 박스 토글 함수
  const [checked, setChecked] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [checkedState, setCheckedState] = useState({});

  // 체크 상태를 토글하는 함수
  const toggleCheck = (id) => {
    setStudentBookEntries((currentEntries) =>
      currentEntries.map((entry) => {
        if (entry.id === id) {
          // 새로운 체크 상태 객체를 만들어서 상태를 업데이트
          const newCheckedState = {
            ...checkedState,
            [id]: !checkedState[id],
          };
          setCheckedState(newCheckedState);
          return { ...entry, checked: !checkedState[id] };
        }
        return entry;
      })
    );
  };

  const handleRemoveKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleSyncButtonClick = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  const getKeywords = () => [
    "성실",
    "리더십",
    "창의성",
    "책임",
    "협력",
    "자기주도",
    "도전",
    "봉사",
    "인내",
    "해결능력",
    "독립적",
    "주도적",
    "유연성",
    "혁신",
    "성취",
    "논리",
    "팀워크",
  ];

  const [selectedKeywords, setSelectedKeywords] = useState([]);

  // 키워드 토글
  const toggleKeywordSelection = (keyword) => {
    setSelectedKeywords((prevSelectedKeywords) =>
      prevSelectedKeywords.includes(keyword)
        ? prevSelectedKeywords.filter((k) => k !== keyword)
        : [...prevSelectedKeywords, keyword]
    );
  };

  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddKeyword = (keyword) => {
    setKeywords([...keywords, keyword]);
    setInputValue("");
  };

  useEffect(() => {
    // URL에서 가져온 userId 값을 상태에 설정
    if (paramsUserId) {
      setSelectedStudent(paramsUserId);
    }

    const fetchStudents = async () => {
      try {
        const response = await instance.get(
          `/api/group/students/${paramsGroupId}`
        );
        console.log(response);

        if (response.data && response.data.result) {
          setStudents(response.data.result);
          console.log("response.data.result: ", response.data.result);
        }
      } catch (error) {
        console.error("학생리스트를 가져오지 못했습니다.:", error.message);
      }
    };

    fetchStudents();
  }, [paramsGroupId]);

  //학생 수첩 조회 Get 함수
  const [studentBookEntries, setStudentBookEntries] = useState([]);

  useEffect(() => {
    const fetchStudentBook = async () => {
      try {
        const response = await instance.get(
          `/api/handbook/${paramsGroupId}/${paramsUserId}`
        );
        console.log("학생 수첩 조회 내용:", response.data);
        if (response.status === 200) {
          setSavedTextFromStudentBook(response.data.result);
          setStudentBookEntries(response.data.result);
          console.log("학생 수첩 조회 내용2: ", response.data.result);
        } else {
          console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
        }
      } catch (error) {
        console.error("학생 수첩을 가져오지 못했습니다.:", error);
      }
    };

    if (paramsGroupId && paramsUserId) {
      fetchStudentBook();
    }
  }, [paramsGroupId, paramsUserId]);

  // 학생 수첩 내용 DELETE 함수
  const deleteStudentBookEntry = async (handbookContentId) => {
    try {
      const response = await instance.delete(
        `/api/handbook/${handbookContentId}`
      );
      if (response.status === 204) {
        setStudentBookEntries((currentEntries) =>
          currentEntries.filter((entry) => entry.id !== handbookContentId)
        );
        alert("항목이 성공적으로 삭제되었습니다.");
      } else {
        // 오류가 있을 경우
        console.error("삭제에 실패했습니다:", response);
      }
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다:", error);
    }
  };

  //생활기록부 글 GET 함수
  const [TextEntries, setTextEntries] = useState([]);

  //생활기록부 내용 불러오기 함수
  const fetchText = async () => {
    try {
      const response = await instance.get(
        `/api/record/excel/${paramsGroupId}/${paramsUserId}`
      );
      if (response.status == 200 || response.data.result) {
        setInputText(response.data.result);
        // await deleteFile(paramsGroupId);
        console.log("생활기록부 내용:", response.data.result);
      } else {
        console.error(
          "fetchText데이터를 가져오는 데 실패했습니다:",
          response.status
        );
      }
    } catch (error) {
      console.error("데이터 불러오기 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (paramsGroupId && paramsUserId) {
      fetchText();
    }
  }, [paramsGroupId, paramsUserId]);

  // 가이드라인 GET 함수
  const [loading, setLoading] = useState(false);

  const fetchGuideLine = useCallback(async () => {
    setLoading(true);
    const checkedHandbookIds = studentBookEntries
      .filter((entry) => entry.checked)
      .map((entry) => entry.id)
      .join(",");

    const allKeywords = [...keywords, ...selectedKeywords].join(",");

    try {
      const response = await instance.get(
        `/api/guideline/${paramsGroupId}/${paramsUserId}`,
        {
          params: {
            keywords: allKeywords,
            handbookIds: checkedHandbookIds,
          },
        }
      );

      console.log("가이드라인 내용:", response.data);
      if (response.status === 200) {
        setGuideLineText(response.data.result);
      } else {
        console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
      }
    } catch (error) {
      console.error("가이드라인 에러:", error);
    } finally {
      setLoading(false);
    }
  }, [
    paramsGroupId,
    paramsUserId,
    keywords,
    selectedKeywords,
    studentBookEntries,
  ]);

  // 생활기록부 POST 함수

  const saveData = async () => {
    const requestBody = {
      content: inputText,
    };

    try {
      const postResponse = await instance.post(
        `/api/record/excel/${paramsGroupId}/${paramsUserId}`,
        requestBody
      );

      if (postResponse.status === 201) {
        console.log("생활기록부 작성 성공!");
        setIsTextSaved(true);
        console.log("생활기록부 작성 내용:", requestBody.content);
        alert("성공적으로 저장되었습니다");
        return postResponse.data;
      } else {
        console.error(
          "예상치 못한 상태 코드:",
          postResponse.status,
          postResponse.data
        );
      }
    } catch (error) {
      console.error("데이터 저장 중 오류 발생:", error);
    }
    return null;
  };

  //생활기록부 파일 삭제 DELETE 함수
  const deleteFile = async (paramsGroupId) => {
    try {
      const response = await instance.delete(
        `/api/record/excel/${paramsGroupId}`
      );
      if (response.status === 200) {
        console.log("생활기록부 파일 삭제 성공!");
      } else {
        console.error("예상치 못한 상태 코드:", response.status, response.data);
      }
    } catch (error) {
      console.error("데이터 삭제 중 오류 발생:", error);
    }
  };

  //유의어 추천 GET 함수
  const [selectedWord, setSelectedWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const fetchSynonyms = async (word) => {
    try {
      const response = await axios.get(`/api/synonym?word=${word}`);
      // Assuming 'result' contains the synonyms array, limit to 4 synonyms
      setSynonyms(response.data.result.slice(0, 4));
    } catch (error) {
      console.error('Error fetching synonyms:', error);
    }
  };


  const handleWordSelection = (word) => {
    setSelectedWord(word);
    fetchSynonyms(word);
  };


  const closeContextMenu = () => {
    setContextMenu(null);
  };










  return (
    <div onClick={closeContextMenu}>
      <Header>
        <Img
          src={chevron_left}
          alt="chevron_left"
          onClick={() => setShowExitConfirm(!showExitConfirm)}
        />

        {showExitConfirm && (
          <SmallContainer>
            <Exit
              src={exit}
              alt="exit"
              onClick={() => setShowExitConfirm(!showExitConfirm)}
            ></Exit>
            <Notice>
              출력하지 않으면 작성한 문장이 초기화됩니다. <br />
              정말 나가시겠습니까?
            </Notice>
            <ButtonContainer>
              <ExitButton onClick={BackButton}>나가기</ExitButton>
              <ContinueButton
                onClick={() => setShowExitConfirm(!showExitConfirm)}
              >
                계속 작성하기
              </ContinueButton>
            </ButtonContainer>
          </SmallContainer>
        )}

        <BlueTitle>세부능력특기사항</BlueTitle>
        <StudentSelect value={selectedStudent} onChange={handleStudentChange}>
          <option value="" disabled selected>
            학생 선택
          </option>
          {students.map((student, index) => (
            <option key={student.id} value={student.id}>
              {index + 1}번 {student.name}
            </option>
          ))}
        </StudentSelect>
        <Printexecl onClick={() => setShowSmallContainer(!showSmallContainer)}>
          한셀로 출력
        </Printexecl>

        {/*한셀로 출력하기 버튼을 누르면 창 생성*/}
        {showSmallContainer && (
          <SmallContainer>
            <Exit
              src={exit}
              alt="exit"
              onClick={() => setShowSmallContainer(!showSmallContainer)}
            ></Exit>
            <PrintNotice>한셀로 출력하시겠습니까?</PrintNotice>
            <Print
              onClick={() => {
                exportToExcel();
                setShowSmallContainer(false);
              }}
            >
              출력하기
            </Print>
          </SmallContainer>
        )}
      </Header>
      <MainContainer>
        <LeftContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>활동기록 총 정리</Title>
            <>
              <AssigncellButton>
                <input
                  type="file"
                  onChange={uploadAssignment}
                  accept=".xls,.xlsx,.csv,.cell"
                  style={{
                    position: "absolute",
                    opacity: 0,
                  }}
                />
                과제 데이터 불러오기
                <img src={right} alt="right" />
              </AssigncellButton>
            </>
          </div>
          <SaveButton onClick={saveData}>저장하기</SaveButton>
          <ScoreList>
            <ScoreTitle>태도 점수: </ScoreTitle>
            <ScoreResult>5점(상위 5%)</ScoreResult>
            <ScoreTitle>&emsp;</ScoreTitle>
            <ScoreTitle>발표 횟수: </ScoreTitle>
            <ScoreResult>5회(상위 1%)</ScoreResult>
            <PercentBody>
              <ScoreTitle>기준 퍼센테이지</ScoreTitle>
              <Percent
                type="text"
                value={percentage}
                onChange={handlePercentChange}
                onKeyDown={handleKeyDown}
              />
              <ScoreTitle>:</ScoreTitle>
              <div style={{ marginLeft: "3px" }}>
                {filteredAssignments.length > 0 ? (
                  filteredAssignments.map((assignment, index) => (
                    <div key={index}>
                      <p>
                        과제명: {assignment.name}, 점수: {assignment.score},
                        상위: {assignment.rank}%
                      </p>
                    </div>
                  ))
                ) : (
                  <p>해당 퍼센테이지에 대한 과제가 없습니다.</p>
                )}
              </div>
            </PercentBody>
          </ScoreList>

          <>
          <WritingBox onContextMenu={(event) => {
              event.preventDefault();
              const selectedText = window.getSelection().toString().trim();
              if (selectedText) {
                handleWordSelection(selectedText);
              }
            }}>
              {/*생활기록부 입력창*/}

              <Textarea
                value={inputText}
                spellCheck={false}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setByteCount(calculateByteCount(e.target.value));
                }}
              />

              <ByteCounting>{byteCount}/1500 byte</ByteCounting>
              
            </WritingBox>
            <HancellButton>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".xls,.xlsx,.csv,.cell"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                  }}
                />
                한셀에서 가져오기
                <img src={chevron_right_Blue} alt="chevron_right_Blue" />
              </HancellButton>
            <SynonymsDisplay>
            {selectedWord && (
              <>
                <SynonymTitle>
                  <SelectedWord >'{selectedWord}'</SelectedWord> 비슷한 유의어</SynonymTitle>
                <div>
                  {synonyms.map((synonym, index) => (
                    <Synonym key={index}>{synonym}</Synonym>
                  ))}
                </div>
                </>
            )}
             </SynonymsDisplay>
         




            <Line />

            {/*가이드라인 문장 */}
            <GuidelineContainer>
              <GuidelineTitle>가이드라인 문장</GuidelineTitle>
              <SyncButton onClick={handleSyncButtonClick}>
                학생 수첩 연동하기
                <img src={chevron_right_Blue} alt="chevron_right_Blue" />
              </SyncButton>
              <>
                {/* *키워드 입력창 */}
                <Text style={{ marginLeft: "-25px", marginTop: "-8px" }}>
                  단어를 입력하세요 :{" "}
                </Text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <SuggestWordContainer
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {keywords.map((keyword, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "10px",
                        }}
                      >
                        <SuggestWord>
                          {keyword}

                          <XIMG
                            src={exit}
                            alt="exit"
                            onClick={() => handleRemoveKeyword(keyword)}
                            style={{
                              display: "flex",
                              marginLeft: "3px",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </SuggestWord>
                      </div>
                    ))}
                  </SuggestWordContainer>

                  <Keyword
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddKeyword(e.target.value);
                    }}
                  />
                </div>
                <ReapeatImg
                  src={arrow_repeat}
                  alt="arrow_repeat"
                  onClick={fetchGuideLine}
                />

                <KeywordContainer>
                  {getKeywords().map((keyword) => (
                    <KeywordChip
                      key={keyword}
                      selected={selectedKeywords.includes(keyword)}
                      onClick={() => toggleKeywordSelection(keyword)}
                    >
                      {keyword}
                    </KeywordChip>
                  ))}
                </KeywordContainer>
              </>
            </GuidelineContainer>
            <GuidelineBox>
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "40px",
                  }}
                >
                  <BeatLoader color="#4849ff" loading={loading} size={10} />
                </div>
              ) : (
                <Text>{guideLineText}</Text>
              )}
            </GuidelineBox>
          </>
        </LeftContainer>

        <RightContainer>
          <Title>학생수첩</Title>
          {studentBookEntries.map((entry) => (
            <InfoContainer key={entry.id}>
              <TimeText>
                {/* 날짜 형식을 년-월-일 */}
                {new Date(entry.createdDate).toLocaleDateString("ko-KR")}
              </TimeText>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "right",
                  marginRight: "35px",
                  marginTop: "-20PX",
                }}
              >
                <TimeText
                  onClick={() => {
                    handleStudentBookEdit(entry.id);
                    setShowStudentBook(!showStudentBook);
                  }}
                >
                  수정
                </TimeText>

                <TimeText onClick={() => deleteStudentBookEntry(entry.id)}>
                  삭제
                </TimeText>
              </div>
              <StudentBookText key={entry.id}>
                <SavedText>{entry.content}</SavedText>
                {showCheckboxes && (
                  <div style={{ position: "absolute" }}>
                    <Checkbox
                      onClick={() => toggleCheck(entry.id)}
                      src={checkedState[entry.id] ? check : noncheck}
                      alt="check"
                    />
                  </div>
                )}
              </StudentBookText>
            </InfoContainer>
          ))}
          {showStudentBook && (
            <StudentBookContent
              show={showStudentBook}
              onClose={() => setShowStudentBook(false)}
              propsGroupId={selectedGroupId}
              propsUserId={selectedUserId}
              contentId={contentId}
            />
          )}
        </RightContainer>
      </MainContainer>
    </div>
  );
}

export default GroupDetailWrite;
