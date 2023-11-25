import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import arrow_repeat from "../../assets/arrow_repeat.svg";
import chevron_right_Blue from "../../assets/chevron_right_Blue.svg";
import exit from "../../assets/exit.svg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import axios from "../../assets/api/axios";
import instance from "../../assets/api/axios";

import StudentBook from "../Student/StudentBook";
import StudentBookContent from "../Student/StudentBookContent";

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
  height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 48px;
`;

const SaveButton = styled.button`
  width: 73px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 579px;
  margin-top: -24px;

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
  overflow-y: scroll;
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
  height: 240px;
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
  height: 200px;
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
  margin-bottom: 5px;
`;

const SuggestWordContainer = styled.div`
  margin-left: 32px;
`;

const SuggestWord = styled.div`
  display: inline-flex;
  padding: 3px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--primary-light-cobalt, #ededff);
  margin-top: 24px;

  &:not(:first-child) {
    margin-left: 8px;
  }

  /*보기, 본보기, 사례 글씨*/
  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const GuidelineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-top: 32px;
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
  margin-left: 438px;
  flex-shrink: 0;
`;

const GuidelineBox = styled.div`
  width: 620px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 24px;
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
  margin-bottom: 16px;
  padding: 16px 16px 16px 16px;
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

const EditButton = styled.button`
  flex-shrink: 0;
  color: #9ea4aa;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  background: none;
  border: none;
  margin-left: 380px;
  margin-right: 16px;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const CopyButton = styled.button`
  flex-shrink: 0;
  color: #9ea4aa;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  background: none;
  border: none;
  margin-right: 16px;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StudentBookText = styled.div`
  width: 416px;
  height: 56px;
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
  margin-right: 24px;
  margin-left: 438px;
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
  width: 150px;
  height: 25px;
  padding: 4px 12px 4px 31px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;
  margin-left: 130px;
  margin-top: -48px;
`;

const Text = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 24px 24px 24px 24px;
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
  // 학생 수업 관련 state
  const [showStudentBook, setShowStudentBook] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [contentId, setContentId] = useState();
  //
  const [byteCount, setByteCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [savedText, setSavedText] = useState("");
  const [buttonText, setButtonText] = useState("저장하기");
  const [isTextSaved, setIsTextSaved] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();
  const [savedTextFromStudentBook, setSavedTextFromStudentBook] = useState("");
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const { paramsGroupId, paramsUserId } = useParams(); // URL에서 id들의 매개변수의 값을 추출합니다.
  const [fetchText, setFetchText] = useState("");

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


//생활기록부 파일 업로드 POST 함수
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData); 

      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

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

      console.log(response); // 서버 응답 확인
  
      if (response.status === 201) {
        console.log("생활기록부 파일 업로드 성공!");
        setUploadStatus("업로드 성공!"); // 상태 업데이트
      } else {
        console.error("예상치 못한 상태 코드:", response.status, response.data);
        setUploadStatus("업로드 실패: 예상치 못한 상태 코드"); // 상태 업데이트
      }
    } catch (error) {
      console.error("생활기록부 파일 업로드 중 오류 발생:", error);
      setUploadStatus("업로드 실패: 오류 발생"); // 상태 업데이트
    }
  }
};

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    navigate(`/GroupDetailWrite/${paramsGroupId}/${e.target.value}`);
  };

  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/GroupDetailClass");
  };

  // 생활기록부 저장하기 버튼 클릭 핸들러
  const handleSaveButtonClick = async () => {
    if (!isTextSaved) {
      const saveSuccessful = await saveData(inputText);
      if (saveSuccessful) {
        setIsTextSaved(true);
        setButtonText("한셀 출력"); 
      }
    } else {
      
      exportToExcel(inputText);

      if (attachedFile) {
        uploadFile(groupId, attachedFile);
      }
    }
  };


  const handleTextEdit = () => {
    setIsTextSaved(false);
    setButtonText("저장하기");
  };


  // 학생 수첩 내용 복사 클릭 핸들러
  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(savedText);
    alert("복사되었습니다.");
  };



  ////////////

  const [percent, setPercent] = useState("");
  const [output, setOutput] = useState("");

  const handlePercentChange = (e) => {
    setPercent(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (percent) {
        if (parseInt(percent) <= 15) {
          // 입력값이 15 이하인 경우
          setOutput("과제2(상위 10%)");
        } else {
          setOutput("과제1(상위 25%), 과제2(상위 10%), 과제4(상위 20%)");
        }
      } else {
        setOutput("");
      }
    }
  };

  //
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddKeyword = (keyword) => {
    setKeywords([...keywords, keyword]);
    setInputValue("");
  };

  // 학생 선택
  const [students, setStudents] = useState([]);
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
          setStudents(response.data.result); // 학생 데이터를 상태에 저장합니다.
          console.log("response.data.result: ", response.data.result); // 학생 데이터를 상태에 저장합니다.
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

  // 학생 수첩 내용 수정 함수
  // const updateStudentBookEntry = async (handbookContentId, newContent) => {
  //   try {
  //     const response = await instance.patch(`/api/handbook/${handbookContentId}`, {
  //       content: newContent,
  //     });
  //     if (response.status === 200) {
  //       // UI를 업데이트하기 위해 상태를 업데이트 합니다.
  //       setStudentBookEntries(currentEntries =>
  //         currentEntries.map(entry =>
  //           entry.id === handbookContentId ? { ...entry, content: newContent } : entry
  //         )
  //       );
  //       alert("항목이 성공적으로 수정되었습니다.");
  //     } else {
  //       // 오류가 있을 경우
  //       console.error("수정에 실패했습니다:", response);
  //     }
  //   } catch (error) {
  //     console.error("수정 중 오류가 발생했습니다:", error);
  //   }
  // };

  // 전체 생활기록부 글 GET 함수
  const [TextEntries, setTextEntries] = useState([]);
  const [savedTextFromText, setSavedTextFromText] = useState("");

  // 생활기록부 전체 불러오기 함수
  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await instance.get(
          `/api/record/excel/${paramsGroupId}/${paramsUserId}`
        );
        if (response.status === 200 && response.data.result) {
          setTextEntries(response.data.result);
        } else {
          console.error("데이터를 가져오는 데 실패했습니다:", 
          response.status,
          response.data);
        }
      } catch (error) {
        console.error("데이터 불러오기 중 오류 발생:", error);
      }
    };

    if (paramsGroupId && paramsUserId) {
      fetchText();
    }
  }, [paramsGroupId, paramsUserId]);

  // 생활기록부 POST 함수
  const saveData = async (text) => {
    const requestBody = {
      content: text,
    };

    try {
      const postResponse = await instance.post(
        `/api/record/excel/${paramsGroupId}/${paramsUserId}`,
        requestBody
      );
      console.log("생활기록부 작성 내용:", requestBody);
      if (postResponse.status === 201) {
        console.log("생활기록부 작성 성공!");
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

  /***  통신  ***/
  //생기부 작성

  return (
    <div>
      {/* {showStudentBook && (
        <StudentBook
          show={showStudentBook}
          onClose={closeStudentBook}
          groupId={selectedGroupId}
          userId={selectedUserId}
        />
      )} */}
      <Header>
        <Img
          src={chevron_left}
          alt="chevron_left"
          onClick={() => setShowSmallContainer(!showSmallContainer)}
        />

        {showSmallContainer && (
          <SmallContainer>
            <Exit
              src={exit}
              alt="exit"
              onClick={() => setShowSmallContainer(!showSmallContainer)}
            ></Exit>
            <Notice>
              출력하지 않으면 작성한 문장이 초기화됩니다. <br />
              정말 나가시겠습니까?
            </Notice>
            <ButtonContainer>
              <ExitButton onClick={BackButton}>나가기</ExitButton>
              <ContinueButton
                onClick={() => setShowSmallContainer(!showSmallContainer)}
              >
                계속 작성하기
              </ContinueButton>
            </ButtonContainer>
          </SmallContainer>
        )}

        <BoldTitle>노트고등학교 3학년 1반 문학</BoldTitle>
        <BlueTitle>세부능력특기사항</BlueTitle>
        <StudentSelect value={selectedStudent} onChange={handleStudentChange}>
          <option value=""></option>
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
            <Print onClick={exportToExcel}>출력하기</Print>
          </SmallContainer>
        )}
      </Header>
      <MainContainer>
        <LeftContainer>
          <Title>활동기록 총 정리</Title>
          <SaveButton onClick={handleSaveButtonClick}>{buttonText}</SaveButton>
          <ScoreList>
            <ScoreTitle>태도 점수: </ScoreTitle>
            <ScoreResult>5점(상위 5%) </ScoreResult>
            <ScoreTitle>발표 횟수: </ScoreTitle>
            <ScoreResult>5회(상위 1%) </ScoreResult>
            <PercentBody>
              <ScoreTitle>기준 퍼센테이지</ScoreTitle>
              <Percent
                type="text"
                value={percent}
                onChange={handlePercentChange}
                onKeyDown={handleKeyDown}
              />
              <ScoreTitle>:</ScoreTitle>
              <div style={{ marginLeft: "3px" }}>{output}</div>
            </PercentBody>
          </ScoreList>
          {!isTextSaved ? (
            <>
              <WritingBox>
                {/*생활기록부 입력창*/}

                <Textarea
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setByteCount(calculateByteCount(e.target.value)); // Also update the byte count when text changes
                  }}
                />

                <ByteCounting>{byteCount}/1500 byte</ByteCounting>
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
              </WritingBox>
              <>
                {/**키워드 입력창 */}
                <Text style={{ marginLeft: "10px" }}>키워드 입력: </Text>
                <Keyword
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddKeyword(e.target.value);
                  }}
                />
              </>
              <SuggestWordContainer>
                {keywords.map((keyword, index) => (
                  <SuggestWord key={index}>{keyword}</SuggestWord>
                ))}
              </SuggestWordContainer>
              <GuidelineContainer>
                <GuidelineTitle>가이드라인 문장</GuidelineTitle>
                <ReapeatImg src={arrow_repeat} alt="arrow_repeat" />
              </GuidelineContainer>
              <GuidelineBox>
                <Text>안녕</Text>
              </GuidelineBox>
            </>
          ) : null}

          {isTextSaved && (
            <div>
              {/* <InfoContainer>
                  <EditButton onClick={handleTextEdit}>수정하기</EditButton>
                  <CopyButton onClick={handleCopyButtonClick}>복사하기</CopyButton>
                </InfoContainer>

                <SavedTextContainer>
                  {TextEntries.map((entry, index) => (
                    <SavedText key={index}>
                      {entry.content} - {new Date(entry.createdDate).toLocaleDateString('ko-KR')}
                    </SavedText>
                  ))}
                </SavedTextContainer> */}

              {TextEntries.map((entry) => (
                <InfoContainer key={entry.id}>
                  <TimeText>
                    {/* 날짜 형식을 년-월-일 */}
                    {new Date(entry.createdDate).toLocaleDateString("ko-KR")}
                  </TimeText>
                  <div style={{ marginTop: "-20px" }}>
                    <EditButton onClick={handleTextEdit}>수정하기</EditButton>
                    <CopyButton onClick={handleCopyButtonClick}>
                      복사하기
                    </CopyButton>
                  </div>
                  <StudentBookText>
                    <SavedText>{entry.content}</SavedText>
                  </StudentBookText>
                </InfoContainer>
              ))}
            </div>
          )}
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
                  수첩수정
                </TimeText>

                <TimeText onClick={() => deleteStudentBookEntry(entry.id)}>
                  삭제하기
                </TimeText>
              </div>
              <StudentBookText>
                <SavedText>{entry.content}</SavedText>
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
