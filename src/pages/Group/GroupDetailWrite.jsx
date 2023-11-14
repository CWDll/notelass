import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import arrow_repeat from "../../assets/arrow_repeat.svg";
import chevron_right_Blue from "../../assets/chevron_right_Blue.svg";
import exit from "../../assets/exit.svg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import axios from "../../assets/api/axios";

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
  display: flex;
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
  margin-left: 32px;
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
  const [byteCount, setByteCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [savedText, setSavedText] = useState("");
  const [isTextSaved, setIsTextSaved] = useState(false);
  const [buttonText, setButtonText] = useState("저장하기");
  const [selectedStudent, setSelectedStudent] = useState();
  const [savedTextFromStudentBook, setSavedTextFromStudentBook] = useState("");
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  //파일 업로드
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('선택된 파일:', file); // 콘솔에 파일 정보 로깅
      setAttachedFile(file);
    }
  };

  const uploadFile = async (groupId, file) => {
    console.log("Uploading file...");
    const formData = new FormData();
    formData.append("file", file);

    setUploadStatus('pending'); // 업로드 진행 중 상태 설정
    try {
      const response = await axios.post(
        `/api/record/excel/${groupId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setUploadStatus('success'); // 업로드 성공 상태 설정
        alert("생기부 파일이 등록되었습니다.");
      } else {
        setUploadStatus('fail'); // 실패 상태 설정
        console.error("서버로부터 예상치 못한 응답을 받았습니다:", response);
        console.log("Response status code: ", response.status);
      }
    } catch (error) {
      setUploadStatus('fail'); // 실패 상태 설정
      console.error("파일 업로드 중 오류가 발생했습니다:", error);
      alert("파일 업로드 중 오류가 발생했습니다.");
    }
  };

  const handleSaveFromStudentBook = (text) => {
    setSavedTextFromStudentBook(text);
  };

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/GroupDetailClass");
  };

  const handleSaveButtonClick = () => {
    if (!isTextSaved) {
      setSavedText(inputText);
      setIsTextSaved(true);
      setButtonText("한셀 출력");

      sendRecord(groupId, selectedStudent, inputText);
    } else {
      exportToExcel(savedText);

      if (attachedFile) {
        uploadFile(groupId, attachedFile);
      }
    }
  };

  const handleTextEdit = () => {
    setIsTextSaved(false);
    setButtonText("저장하기");
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(savedText);
    alert("복사되었습니다.");
  };

  const exportToExcel = () => {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "학생별 세부능력 및 특기사항";
  
    
    // const headers = ["학생 이름", "반", "번호", "과제1","과제2", "과제3", "과제4"];
  
    
    // const studentsData = [
    //   ["지석진", "3학년 1반", "1", "상위 25%", "상위 25%", "상위 20%", "상위 10%"],
    //   ["이광수", "3학년 1반", "2", "상위 50%", "상위 45%", "상위 30%" , "상위 20%"],
    // ];

    const headers = ["학생 이름", "반","번", "내용"];
  
    
    const studentsData = [
      ["지석진", "3학년 1반", "1번" , "시인 윤동주 작품에 감명받아 시를 직접 작성하여 발표함"],
      ["이광수", "3학년 1반", "2번" , inputText],
      ["유재석", "3학년 1반", "1번" , "문학 부장으로써 한 학기 동안 성실하게 책임을 다 함"],
    ];
      
    
    const data = [headers, ...studentsData];
  
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = { Sheets: { 'Data': ws }, SheetNames: ["Data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(dataBlob, fileName + fileExtension);
  };


  ////////////
 
    const [percent, setPercent] = useState("");
    const [output, setOutput] = useState("");
  
    const handlePercentChange = (e) => {
      setPercent(e.target.value);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (percent) {
          if (parseInt(percent) <= 15) { // 입력값이 15 이하인 경우
            setOutput("과제2(상위 10%)");
          } else {
            setOutput("과제1(상위 25%), 과제2(상위 10%), 과제4(상위 20%)");
          }
        } else {
          setOutput("");
        }
      }
    };

    //////////// 가이드라인 문장 
    const [guidelineIndex, setGuidelineIndex] = useState(0);
    const guidelineTexts = ["","문학 공부에 있어서 책임감을 가지고 매일 꾸준히 독서하고 그 내용을 분석하여 이를 통해 문학에 대한 이해력을 향상시켰다.", 
    "문학 수업에서는 언제나 최선을 다해 열정을 보였고 이 과목에서 배운 다양한 작품들을 통해 인간의 감정과 삶에 대해 깊이 이해하려 노력했다.", 
    "학교에서 열린 문학 토론 대회에서는 팀장으로서 팀을 이끌었다. 이 경험을 통해 문학에 대한 사랑과 열정을 더욱 확실하게 느꼈다."]; 
    
    const handleGuidelineTextKeyDown = () => {
      setGuidelineIndex((prevIndex) => (prevIndex + 1) % guidelineTexts.length);
    };




  ////////////
    const [textOutput, setTextOutput] = useState("");

    const handleContainerClick = () => {
      setTextOutput(
        <StudentBookText>
          <SavedText>수업시간에 집중하여 수업에 적극적으로 참여함</SavedText>
        </StudentBookText>
      );
    };

    ////
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddKeyword = (keyword) => {
      setKeywords([...keywords, keyword]);
      setInputValue("");
    };
 

    // 학생 선택 
    const [students, setStudents] = useState([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/group/students/9');
        console.log(response); 
  
       
        const filteredStudents = response.data.result
          .filter(student => [22, 23, 24, 25, 26].includes(student.id));
        setStudents(filteredStudents);
  
      } catch (error) {
        console.error("학생리스트를 가져오지 못했습니다.:", error.message);
      }
    };
  
    fetchStudents();
  }, []);

  /***  통신  ***/
  //생기부 작성
 
  return (
    <div>
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
        <StudentSelect onChange={handleStudentChange}>
          <option value=""></option>
          {students.map((student, index) => (
            <option key={student.id} value={student.id}>
              {index+1}번 {student.name}
            </option>
          ))}
        </StudentSelect>
        <Printexecl onClick={() => setShowSmallContainer(!showSmallContainer)}>
          한셀로 출력
        </Printexecl>

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
              <Percent type="text" value={percent} onChange={handlePercentChange} onKeyDown={handleKeyDown}/>
              <ScoreTitle>:</ScoreTitle>
              <p style={{ marginLeft: "3px" }}>{output}</p>
            </PercentBody>
          </ScoreList>
          {!isTextSaved ? (
            <>
              <WritingBox>
                <Textarea
                  value={inputText}
                  onChange={(e) => {
                    const text = e.target.value;
                    setInputText(text);
                    setByteCount(calculateByteCount(text));
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
                
                    
                  {uploadStatus === 'pending' && <p>업로드 중...</p>}
                  {uploadStatus === 'success' && <p>업로드 성공!</p>}
                  {uploadStatus === 'fail' && <p>업로드 실패!</p>}

                </HancellButton>
              </WritingBox>
              <>
              <Text style={{marginLeft: "10px"}}>키워드 입력: </Text>
              <Keyword type="text" value={inputValue} 
               onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAddKeyword(e.target.value); }} />
              </>
              <SuggestWordContainer>
                {keywords.map((keyword, index) => <SuggestWord key={index}>{keyword}</SuggestWord>)}
              </SuggestWordContainer>
              <GuidelineContainer>
                <GuidelineTitle>가이드라인 문장</GuidelineTitle>
                <ReapeatImg src={arrow_repeat} alt="arrow_repeat" onClick={handleGuidelineTextKeyDown} />  
              </GuidelineContainer>
              <GuidelineBox>
              <Text>
                {guidelineTexts[guidelineIndex]}
              </Text>
              
              </GuidelineBox>
            </>
          ) : null}

          {isTextSaved && (
            <div>
              <InfoContainer>
                <TimeText>2023년 1학기-1</TimeText>
                <EditButton onClick={handleTextEdit}>수정하기</EditButton>
                <CopyButton onClick={handleCopyButtonClick}>
                  복사하기
                </CopyButton>
              </InfoContainer>
              <SavedTextContainer>
                <SavedText>{savedText}</SavedText>
              </SavedTextContainer>
            </div>
          )}
        </LeftContainer>

        <RightContainer onClick={handleContainerClick}>
          <Title>학생수첩</Title>
          <InfoContainer>
            <TimeText>2023년 1학기-1</TimeText>
          </InfoContainer>
          <StudentBookText>
            <SavedText>자발적으로 수업 준비물을 옮기는데 도움을 줌</SavedText>
          </StudentBookText>
          {textOutput}
        </RightContainer>
      </MainContainer>
    </div>
  );
}

export default GroupDetailWrite;
