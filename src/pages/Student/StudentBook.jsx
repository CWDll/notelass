import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import book from "../../assets/book.svg";
import exit from "../../assets/exit.svg";
import caret_up from "../../assets/caret_up.svg";
import caret_down from "../../assets/img/caret_down.svg";
// import caret_down from "../../assets/caret_down.svg";

import instance from "../../assets/api/axios";

const StudentBookContainer = styled.div`
  width: 60px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #4849ff;
  box-shadow: 0px 0px 8px 0px rgba(38, 40, 43, 0.2);

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  margin-top: 236px;
  margin-left: 1589px;
`;

const BookImg = styled.img`
  margin-top: 24px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const Text = styled.p`
  margin-top: 8px;
  margin-left: 13px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SmallContainer = styled.div`
  width: 760px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  margin-left: -1000px;
  margin-top: 100px;
`;

const StudentSelect = styled.select`
  width: 264px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 24px;
  margin-top: 24px;

  /* 학생 선택 글씨 */
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const GroupSelect = styled.select`
  width: 264px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 24px;
  margin-top: 24px;

  /* 학생 선택 글씨 */
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const ExitImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  margin-top: -40px;
  margin-left: 700px;
`;

const Textarea = styled.textarea`
  width: 710px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 24px;
  margin-top: 48px;
  resize: none;
  padding: 16px;
  font-size: 16px;
  font-style: normal;
  outline: none;
`;

const Button = styled.div`
  width: 12px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 4px;
  background: rgba(201, 205, 210, 0.5);
  outline: none;
  align-items: center;
  position: relative;
  z-index: 0;
`;

const Img = styled.img`
  width: 12px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  margin-left: 30px;
`;

const CancleButton = styled.button`
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--cool-grayscale-inactive, #e6e8ee);

  margin-left: 558px;
  margin-top: 24px;
  color: var(--cool-grayscale-placeholder, #9ea4aa);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
`;

const SaveButton = styled.button`
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 16px;
  margin-right: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  align-items: center;
`;

const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 20px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  padding: 5px;
`;

const students = [
  { id: 1, name: "1번 김민수" },
  { id: 2, name: "2번 김민수" },
  { id: 3, name: "3번 김민수" },
  { id: 4, name: "4번 김민수" },
];

function StudentBook() {
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedGroup, setSelectedGroup] = useState();
  const [students, setStudents] = useState([]); // 학생 데이터를 저장할 상태
  const [inputText, setInputText] = useState("");
  const [speechCount, setSpeechCount] = useState(0);
  const [attitudeCount, setAttitudeCount] = useState(0);

  const [groups, setGroups] = useState([]); // useEffect용 그룹 데이터를 저장할 상태 추가
  // const Existgroups = [
  //   { id: 1, group: "1반" },
  //   { id: 2, group: "2반" },
  //   { id: 3, group: "3반" },
  //   { id: 4, group: "4반" },
  // ];

  useEffect(() => {
    console.log("useEffect 실행 시작");
    const fetchGroups = async () => {
      try {
        const resp = await instance.get(`/api/group`);
        console.log("서버 응답: ", JSON.stringify(resp, null, 2));
        console.log("서버 응답 확인" + resp.data);
        if (resp.data && resp.data.result && resp.data.result.groupList) {
          console.log("api/groups GET 성공");
          // 서버에서 받은 데이터를 기반으로 새로운 배열 생성
          const newGroups = resp.data.result.groupList.map((g) => ({
            id: g.id,
            group: `${g.grade}학년 ${g.classNum}반`, // 예시: '1학년 3반'
          }));
          setGroups(newGroups);
        }
      } catch (error) {
        console.error("그룹 데이터를 가져오는 중 오류 발생:", error);
        console.log("sd");
      } finally {
        console.log("useEffect 실행 완료");
      }
    };

    fetchGroups();
  }, []);

  //발표 점수 계산
  const speechUpCount = () => {
    setSpeechCount(speechCount + 1);
  };

  const speechDownCount = () => {
    if (speechCount > 0) {
      setSpeechCount(speechCount - 1);
    }
  };

  //태도 점수 계산
  const attitudeUpCount = () => {
    setAttitudeCount(attitudeCount + 1);
  };

  const attitudeDownCount = () => {
    if (attitudeCount > 0) {
      setAttitudeCount(attitudeCount - 1);
    }
  };

  //학생 선택
  const handleStudentChange = (e) => {
    e.stopPropagation();
    setSelectedStudent(e.target.value);
    console.log("Selected Student: " + e.target.value);
    console.log("Selected Student: " + e.target);
  };

  //반 선택
  const handleGroupChange = async (e) => {
    e.stopPropagation();
    const groupId = e.target.value;
    setSelectedGroup(groupId);
    console.log("Selected Group: " + groupId);

    try {
      const res = instance.get(`/api/group/students/${groupId}`);
      if (res.data && res.data.result && res.data.result.studentIdNameDtoList) {
        setStudents(res.data.result); // 학생 데이터를 상태에 저장합니다.
      }
    } catch (error) {
      console.error("학생 데이터를 가져오는 중 오류 발생:", error);
      // 오류 처리 로직...
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    // 상태에서 groupId와 userId를 사용합니다.
    const groupId = selectedGroup; // 이전에 선택된 그룹 ID
    const userId = selectedStudent; // 이전에 선택된 학생 ID

    const requestBody = {
      content: inputText, // 텍스트 입력 내용
      attitudeScore: attitudeCount, // 태도 점수
      presentationNum: speechCount, // 발표 횟수
    };

    try {
      console.log("보낸 requestBody: ", requestBody);
      const response = await instance.post(
        `/api/handbook/${groupId}/${userId}`,
       
        requestBody
      );

      if (response.status === 201) {
        alert(`${userId}번 학생의 학생 수첩 작성이 완료되었습니다.`);
      } else {
        alert("학생 수첩 작성에 실패하였습니다.");
      }
    } catch (error) {
      console.error("학생 수첩 작성 오류:", error);
    }
  };

  return (
    <StudentBookContainer
      onClick={() => setShowSmallContainer(!showSmallContainer)}
    >
      <BookImg src={book} alt="book" />
      <Text>학생 수첩</Text>

      {showSmallContainer && (
        <SmallContainer onClick={(e) => e.stopPropagation()}>
          <GroupSelect onChange={handleGroupChange}>
            <option value="" disabled selected>
              그룹 선택
            </option>
            {groups.map(
              (
                group // 'groups' 상태를 사용
              ) => (
                <option key={group.id} value={group.id}>
                  {group.group}
                </option>
              )
            )}
          </GroupSelect>

          <StudentSelect onChange={handleStudentChange}>
            <option value="" disabled selected>
              학생 선택
            </option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </StudentSelect>
          <ExitImg
            src={exit}
            alt="exit"
            onClick={() => setShowSmallContainer(false)}
          ></ExitImg>
          <Textarea
            value={inputText}
            onChange={(e) => {
              const text = e.target.value;
              setInputText(text);
              // setByteCount(calculateByteCount(text));
            }}
          />
          <ButtonContainer>
            <p>발표 횟수</p>
            <CountContainer>
              <Button onClick={speechDownCount}>
                <Img src={caret_down} alt="caret_down" />
              </Button>
              <p style={{ marginLeft: "18px", marginRight: "18px" }}>
                {speechCount}
              </p>
              <Button onClick={speechUpCount}>
                <Img src={caret_up} alt="caret_up" />
              </Button>
            </CountContainer>

            <p>태도 점수</p>
            <CountContainer>
              <Button onClick={attitudeDownCount}>
                <Img src={caret_down} alt="caret_down" />
              </Button>
              <p style={{ marginLeft: "18px", marginRight: "18px" }}>
                {speechCount}
              </p>
              <Button onClick={attitudeUpCount}>
                <Img src={caret_up} alt="caret_up" />
              </Button>
            </CountContainer>
          </ButtonContainer>

          <CancleButton onClick={() => setShowSmallContainer(false)}>
            취소
          </CancleButton>
          <SaveButton onClick={handleSave}>저장하기</SaveButton>
        </SmallContainer>
      )}
    </StudentBookContainer>
  );
}

export default StudentBook;
