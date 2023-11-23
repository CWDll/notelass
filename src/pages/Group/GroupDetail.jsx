import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import exit from "../../assets/exit.svg";
import instance from "../../assets/api/axios";

import noGroup from "../../assets/noGroup.svg";

const NoteContainer = styled.div`
  width: 1194px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  position: relative;
  margin-left: 363px;
  margin-top: 16px;
`;

const CircleText = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--primary-light-cobalt, #ededff);
  border-width: 1.5px;
  border-color: var(--primary-cobalt, #4849ff);
  border-style: solid;
  margin-left: 32px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

const PurpleText = styled.p`
  color: #4849ff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 12px;
`;

const BoldText = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  align-self: center;
`;

const SubjectBody = styled.div`
  display: flex;

  width: 1194px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 16px;
  gap: 16px;
`;

const Button = styled.button`
  width: 144px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px dashed #4849ff;
  background: #ededff;
  margin-top: 74px;
  margin-left: 1413px;

  color: #4849ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SmallContainer = styled.div`
  width: 480px;
  height: 544px;
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

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40px;
  text-align: left;

  flex-shrink: 0;
`;

const TextBox = styled.input`
  display: flex;
  width: 400px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 40px;

  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;

  color: var(--cool-grayscale-line, #c9cdd2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const Button2 = styled.button`
  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 40px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

const Exit = styled.img`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 432px;
  width: 24px;
`;

const Code = styled.p`
  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 140px;
`;

const Title2 = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 126px;
  margin-left: 184px;

  flex-shrink: 0;
`;

export const Img = styled.img`
  width: 12px;
  height: 12px;

  margin-top: 39px;
  margin-left: 360px;
`;

// 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
const subjectInfo = "노트고등학교 3학년 1반 문학";
// " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
const subject = subjectInfo.split(" ")[3];
// subject에서 앞 1글자만 가져와 저장하는 letter
const letter = subject.substr(0, 1);

function GroupDetail() {
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [content, setContent] = useState("form");
  const [groupCode, setGroupCode] = useState("");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [subject, setSubject] = useState("");
  const [groupList, setGroupList] = useState([]);

  const accessToken = localStorage.getItem("token");

  const navigate = useNavigate();
  const handleGroupClick = (id) => {
    navigate(`/GroupDetailClass/${id}`);
  };

  //그룹 생성 통신

  const generateGroup = async () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    setGroupCode(code);

    const requestBody = {
      grade: parseInt(grade),
      classNum: parseInt(classNum),
      subject: subject,
    };

    console.log(
      "grade: " + grade + ", type: " + `Type: ${typeof parseInt(grade)}`
    );
    console.log(
      "grade: " + classNum + ", type: " + `Type: ${typeof parseInt(classNum)}`
    );
    console.log("grade: " + subject + ", type: " + `Type: ${typeof subject}`);
    console.log(requestBody);
    try {
      const response = await instance.post("/api/group", requestBody);

      // 응답이 성공적이면 groupCode 상태 업데이트
      if (response.status === 201) {
        setGroupCode(response.data.result);
        setContent("code");
      } else {
        console.error(
          "서버로부터 예상치 못한 응답을 받았습니다:",
          response.data
        );
      }
    } catch (error) {
      console.error("그룹 생성 중 오류가 발생했습니다:", error);
    }
  };

  // 속한 그룹 목록 GET
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await instance.get("/api/group");
        if (response.status === 200 && Array.isArray(response.data.result)) {
          setGroupList(response.data.result);
        } else {
          // 오류 처리
          console.error("그룹 목록을 불러오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <>
      <Button onClick={() => setShowSmallContainer(!showSmallContainer)}>
        그룹생성
      </Button>

      {showSmallContainer && (
        <SmallContainer>
          <Exit
            src={exit}
            alt="exit"
            onClick={() => setShowSmallContainer(!showSmallContainer)}
          ></Exit>
          {content === "form" ? (
            <>
              <Title>대상 학년 선택</Title>
              <TextBox
                type="text"
                value={grade}
                placeholder="숫자만 적으세요 ex) 1"
                onChange={(e) => setGrade(e.target.value)}
              ></TextBox>
              <Title>대상 반 선택</Title>
              <TextBox
                type="text"
                value={classNum}
                placeholder="숫자만 적으세요 ex) 1"
                onChange={(e) => setClassNum(e.target.value)}
              ></TextBox>
              <Title>과목 선택</Title>
              <TextBox
                type="text"
                value={subject}
                placeholder="담당하시는 과목을 입력해 주세요"
                onChange={(e) => setSubject(e.target.value)}
              ></TextBox>
              <Button2 onClick={generateGroup}>다음</Button2>
            </>
          ) : (
            <>
              <Title2>그룹 입장 코드</Title2>
              <Code>{groupCode}</Code>
              <Button2
                onClick={() =>
                  navigate("/GroupDetailClass", {
                    state: { grade, classNum, subject, groupCode },
                  })
                }
              >
                완료
              </Button2>
            </>
          )}
        </SmallContainer>
      )}

      {/* <NoteContainer>
        <SubjectBodyWrapper>
          <SubjectBody onClick={onClick}>
            <CircleText>
              <PurpleText>{letter}</PurpleText>
            </CircleText>
            <BoldText>{subjectInfo}</BoldText>
          </SubjectBody>
          <SubjectBody onClick={onClick}>
            <CircleText>
              <PurpleText>문</PurpleText>
            </CircleText>
            <BoldText>노트고등학교 3학년 2반 문학</BoldText>
          </SubjectBody>

        </SubjectBodyWrapper>
      </NoteContainer>  */}

      <NoteContainer>
        <SubjectBodyWrapper>
          {groupList.length > 0 ? (
            groupList.map((group) => (
              <SubjectBody
                key={group.id}
                onClick={() => handleGroupClick(group.id)}
              >
                <CircleText>
                  <PurpleText>{group.subject[0]}</PurpleText>
                </CircleText>
                <BoldText>{`${group.school} ${group.grade}학년 ${group.classNum}반 ${group.subject}`}</BoldText>
              </SubjectBody>
            ))
          ) : (
            <Img src={noGroup} alt="noGroup" />
          )}
        </SubjectBodyWrapper>
      </NoteContainer>
    </>
  );
}

export default GroupDetail;
