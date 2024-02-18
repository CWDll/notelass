import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ManageGroup from "../../components/Component/Modal/ManageGroup/ManageGroup";

import chevron_left from "../../assets/chevron_left.svg";
import person from "../../assets/person.svg";
import file from "../../assets/file.svg";
import envelope from "../../assets/envelope.svg";
import envelopeOpen from "../../assets/envelopeOpen.svg";
import fileDownload from "../../assets/fileDownload.svg";


// api
import instance from "../../assets/api/axios";

// import axios from "../../assets/api/axios";

import StuExcel from "../../assets/excel/StuExcel.xlsx";
import SelfEvaluation from "../../components/Component/Group/SelfEvalutaion";

const Wrap = styled.div`
margin-left: auto; /* 중앙 정렬을 위해 자동 마진 사용 */
margin-right: auto;
`;

const Main = styled.div`
margin-left:-363px;
`;

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

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
`;

const NoticeContainer = styled.div`
  width: 684px;
  height: 360px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 33px;
  position: relative;
  align-items: center;
`;

const GroupContainer = styled.div`
  width: 684px;
  height: 312px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 30px;
  position: relative;
`;

const ManagementContainer = styled.div`
  width: 480px;
  height: 1044px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 30px;
  margin-top: 33px;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 32px;
  padding-left: 32px;
`;

const DetailText = styled.button`
display:flex;
align-items: center;
height: 21px;
margin-top: -24px;

margin-left:579px;
border-radius: 16px
gap: 8px;
z-index: 1;
background: #F5F5FC;
padding:  6px, 8px;
text-align: center;

font-family: Pretendard;
font-size: 12px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #9EA4AA;


`;

const SubjectContainer = styled.div`
  display: flex;
  width: 684px;
  height: 48px;
  flex-shrink: 0;
  /*background-color: yellow;*/
  flex-direction: column;
  margin-top: 24px;
`;

const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "#9EA4AA" : "inherit")};
`;

const NoticeContent = styled.div`
  display: flex;
`;

const NoticeImg = styled.img`
  margin-top: 13px;
  margin-left: 32px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

//디자인 위치 다시 수정해야함. 임시로 배치
const NoticeTitle = styled.p`

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 10px;
  z-index: 1;
`;

const SudentNum = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 15px;
`;

const NoticeDate = styled.div`
  width: 132px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--primary-light-cobalt, #ededff);
  margin-left: 16px;
  margin-top: 14px;

  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const Button = styled.button`
  height: 54px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #4849ff;
  margin-left: 16px;
  margin-top: 57px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FileDownload = styled.img`
  position: relative;
  top: 24px;
  left: 3px;
  width: 24px;
  cursor: pointer;
`;

function GroupDetailClass() {
  const location = useLocation();
  const info = location.state;
  const { paramsGroupId, paramsUserId } = useParams(); // URL에서 id들의 매개변수의 값을 추출합니다.
  const [uploadStatus, setUploadStatus] = useState(""); // 업로드 상태를 저장할 상태
  const [clickedIndices, setClickedIndices] = useState(new Set());
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [showSelfEvaluation, setShowSelfEvaluation] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 id 매개변수의 값을 추출합니다.
  const onClick = () => {
    navigate(`/GroupDetailClass/${id}/AssignmentDetail`);
  };
  const GroupDetailWrite = (
    paramsGruopId,
    paramsUserId,
    school,
    grade,
    classNum,
    subject
  ) => {
    navigate(`/GroupDetailWrite/${paramsGruopId}/${paramsUserId}`, {
      state: { school, grade, classNum, subject },
    });
  };

  const BackButton = () => {
    navigate("/GroupDetail");
  };
  const StudentScoreDetail = () => {
    navigate("/StudentScoreDetail");
  };
  const TaskClick = () => {
    navigate("/GroupScoreDetail");
  };

  
  const handleOnClick = (index) => {
    setClickedIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (!newIndices.has(index)) {
        newIndices.add(index);
      }
      return newIndices;
    });
  };

  //학생 목록 조회 GET 함수
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await instance.get(`/api/group/students/${id}`);
      console.log(response);

      if (response.data && response.data.result) {
        setStudents(response.data.result);
        console.log("response.data.result: ", response.data.result);
      }
    } catch (error) {
      console.error("학생리스트를 가져오지 못했습니다.:", error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  //학생 등록 파일 업로드 POST 함수
  const uploadname = async (event) => {
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
          `/api/group/file/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response);

        if (response.status === 201) {
          console.log("학생 등록 파일 업로드 성공!");
          setUploadStatus("업로드 성공!");
          await fetchStudents();
        } else {
          console.error(
            "예상치 못한 상태 코드:",
            response.status,
            response.data
          );
          setUploadStatus("업로드 실패: 예상치 못한 상태 코드");
        }
      } catch (error) {
        console.error("학생 등록 파일 업로드 중 오류 발생:", error);
        setUploadStatus("업로드 실패: 오류 발생");
      }
    }
  };

  // 학생 등록 양식 다운로드

  // const handleStuExcelDownload = () => {
  //   // Blob을 사용하지 않고, 정적 파일 경로를 이용합니다.
  //   const link = document.createElement("a");
  //   link.href = StuExcel;
  //   link.setAttribute("download", "학생등록양식.xlsx"); // 파일 다운로드 시 사용될 기본 파일명을 설정합니다.
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  // 공지사항 목록 조회 GET 함수
  const [notices, setNotices] = useState([]);

  const fetchNotices = async () => {
    try {
      const response = await instance.get(`/api/notice/${id}`);
      if (response.data.code === 200) {
        setNotices(response.data.result);
        console.log("공지사항 목록 조회 성공", response.data.result);
      } else {
        console.error("공지사항 목록 조회 실패", response.data.message);
      }
    } catch (error) {
      console.error("공지사항 목록 조회 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchNotices(); 
  }, [id]);


  return (
    <Wrap>
      <Main>
      <Header>
        <Img src={chevron_left} alt="chevron_left" onClick={BackButton} />
        <BoldTitle>
          {info.school} {info.grade}학년 {info.classNum}반 {info.subject}
        </BoldTitle>
        <Button onClick={() => setShowSmallContainer(!showSmallContainer)}>
          그룹 정보
        </Button>
        <Button style={{ position: 'relative' }}>
          <input
              type="file"
              onChange={uploadname}
              accept=".xls,.xlsx,.csv,.cell"
              style={{
                  position: "absolute",
                  opacity: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: 'auto', 
                  height: 'auto',
                  cursor: 'pointer', 
              }}
          />
          학생 등록
      </Button>
        {/* <FileDownload
          src={fileDownload}
          alt="fileDownload"
          onClick={handleStuExcelDownload}
        /> */}

       

        <Button onClick={() => setShowSelfEvaluation(!showSelfEvaluation)}>
          {isEditing ? "자기 평가서 수정" : "자기 평가서 생성"}
        </Button>
        {showSelfEvaluation && <SelfEvaluation setIsEditing={setIsEditing} />}

        {showSmallContainer && (
          <ManageGroup
            showSmallContainer={showSmallContainer}
            setShowSmallContainer={setShowSmallContainer}
          />
        )}

        
      </Header>
      <MainContainer>
        <LeftSectionContainer>
          <NoticeContainer>
            <Title>공지/과제</Title>
            <DetailText
              onClick={onClick}
            >
              생성하기
            </DetailText>

            <Title
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "-50px",
                height: "100%",
              }}
            ></Title>

            {/* 그룹별 공지사항 목록 조회*/}
            <div style={{marginTop:"-300px"}}>
            <SubjectContainer>
                {notices.slice(0, 5).map((notice, index) => (
                  <StyledNoticeItem
                    key={notice.id}
                    onClick={() => handleOnClick(index)}
                  >
                    <NoticeContent>
                      <NoticeImg
                        src={clickedIndices.has(index) ? envelopeOpen : envelope}
                        alt="envelope"
                      />
                      <NoticeTitle>{notice.title}</NoticeTitle>
                     
                    </NoticeContent>
                  </StyledNoticeItem>
                ))}
              </SubjectContainer>
            </div>
          </NoticeContainer>

          <GroupContainer>
            <Title>과제별 성적 열람</Title>
            <DetailText
              onClick={onClick}
            >
              전체보기
            </DetailText>
            <SubjectContainer>
              <NoticeContent>
                <NoticeImg src={file} alt="file" />
                <NoticeTitle>과제4</NoticeTitle>
              </NoticeContent>
              <NoticeContent>
                <NoticeImg src={file} alt="file" />
                <NoticeTitle>과제3</NoticeTitle>
              </NoticeContent>
              <NoticeContent>
                <NoticeImg src={file} alt="file" />
                <NoticeTitle>과제2</NoticeTitle>
              </NoticeContent>
              <NoticeContent>
                <NoticeImg src={file} alt="file" />
                <NoticeTitle onClick={TaskClick}>과제1</NoticeTitle>
              </NoticeContent>

              <Title
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "50px",
                  height: "100%",
                }}
              ></Title>
            </SubjectContainer>
          </GroupContainer>

          <GroupContainer>
            <Title>학생별 성적 열람</Title>
            <DetailText
              onClick={onClick}
            >
              전체보기
            </DetailText>
            <SubjectContainer>
              <NoticeContent onClick={StudentScoreDetail}>
                <NoticeImg src={person} alt="person" />
                <SudentNum>1</SudentNum>
                <NoticeTitle>김민수</NoticeTitle>
              </NoticeContent>
              <NoticeContent>
                <NoticeImg src={person} alt="person" />
                <SudentNum>2</SudentNum>
                <NoticeTitle>김민수</NoticeTitle>
              </NoticeContent>
              <NoticeContent>
                <NoticeImg src={person} alt="person" />
                <SudentNum>3</SudentNum>
                <NoticeTitle>김민수</NoticeTitle>
              </NoticeContent>

              <Title
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "50px",
                  height: "100%",
                }}
              ></Title>
            </SubjectContainer>
          </GroupContainer>
        </LeftSectionContainer>

        <ManagementContainer>
          <Title>생기부 관리</Title>
          <SubjectContainer>
            {students.map((student, index) => (
              <NoticeContent
                key={student.id}
                onClick={() =>
                  GroupDetailWrite(
                    id,
                    student.id,
                    info.school,
                    info.grade,
                    info.classNum,
                    info.subject
                  )
                }
              >
                <NoticeImg src={person} alt="person" />
                <SudentNum>{index + 1}</SudentNum>
                <NoticeTitle>{student.name}</NoticeTitle>
              </NoticeContent>
            ))}
          </SubjectContainer>
        </ManagementContainer>
      </MainContainer>
      </Main>
    </Wrap>
  );
}

export default GroupDetailClass;
