import React, { useState, useEffect } from "react";
import styled from "styled-components";
import book from "../../assets/book.svg";
import exit from "../../assets/exit.svg";
import caret_up from "../../assets/caret_up.svg";
import caret_down from "../../assets/img/caret_down.svg";

import instance from "../../assets/api/axios";

import StudentBookContent from "./StudentBookContent";

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
  margin-left: 1750px;
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

/*
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
*/

function StudentBook({ show, onClose, groupId, userId }) {
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(userId);
  const [selectedGroup, setSelectedGroup] = useState(groupId);
  const [students, setStudents] = useState([]); // 학생 데이터를 저장할 상태
  const [inputText, setInputText] = useState("");
  const [speechCount, setSpeechCount] = useState(0);
  const [attitudeCount, setAttitudeCount] = useState(0);

  const [groups, setGroups] = useState([]); // useEffect용 그룹 데이터를 저장할 상태 추가

  useEffect(() => {
    console.log("useEffect 실행 시작");
    const fetchGroups = async () => {
      try {
        const resp = await instance.get(`/api/group`);
        console.log("서버 응답: ", JSON.stringify(resp, null, 2));
        console.log("서버 응답 확인" + resp.data);
        if (resp.data && resp.data.result) {
          console.log("api/groups GET 성공");
          // 서버에서 받은 데이터를 기반으로 새로운 배열 생성
          const newGroups = resp.data.result.map((g) => ({
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
  }, [groupId, userId]);

  // useEffect를 사용하여 외부에서 받은 show 상태에 따라 내부의 showSmallContainer 상태를 조절
  useEffect(() => {
    setShowSmallContainer(show);
    console.log(show, onclose, groupId, userId);
  }, [show]);

  // 모달 닫기 핸들러
  const handleClose = () => {
    // 모달을 닫을 때 부모 컴포넌트에 알리기
    if (onClose) onClose();
    // 내부 상태 업데이트
    // setShowSmallContainer(false);
  };

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
      const res = await instance.get(`/api/group/students/${groupId}`);
      console.log("students/groupId 서버 응답 확인", res);
      console.log("students/groupId 서버 응답 확인", res.data);
      console.log("students/groupId 서버 응답 확인", res.data.result);
      if (res.data && res.data.result) {
        setStudents(res.data.result); // 학생 데이터를 상태에 저장합니다.
      }
    } catch (error) {
      console.error("학생 데이터를 가져오는 중 오류 발생:", error);
      // 오류 처리 로직...
    }
    console.log("/api/group/students/groupId is finished");
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
        // `/api/handbook/9/22`,
        requestBody
      );

      if (response.status === 201) {
        // alert(`${userId}번 학생의 학생 수첩 작성이 완료되었습니다.`);
        alert(`${userId}번 학생의 학생 수첩 작성이 완료되었습니다.`);
        console.log("학생 수첩 작성 성공!");
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

      {showSmallContainer && <StudentBookContent />}
    </StudentBookContainer>
  );
}

export default StudentBook;
