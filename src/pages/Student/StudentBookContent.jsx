import React, { useState, useEffect } from "react";
import styled from "styled-components";
import book from "../../assets/book.svg";
import exit from "../../assets/exit.svg";
import caret_up from "../../assets/caret_up.svg";
import caret_down from "../../assets/img/caret_down.svg";

import instance from "../../assets/api/axios";

const StudentBookContainer = styled.div`
  width: 60px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #4849ff;
  box-shadow: 0px 0px 8px 0px rgba(38, 40, 43, 0.2);

  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* position: fixed; */
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
  /* width: 760px;
  height: 480px; */
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  z-index: 20000;
  margin-left: 900px;
  margin-top: 450px;
  top: 500px;
  left: 50%;
  width: 760px;
  transform: translate(-50%, -50%);

  cursor: grab;
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

  /* 박스 스타일링 */

  padding: 5px 10px; /* 내부 여백 설정 */
  border: 1px solid #ccc; /* 테두리 색상과 두께 설정 */
  border-radius: 5px; /* 모서리 둥글게 처리 */
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

function StudentBookContent({
  show,
  onClose,
  propsGroupId,
  propsUserId,
  contentId,
}) {
  const [selectedStudent, setSelectedStudent] = useState(propsUserId);
  const [selectedStudentName, setSelectedStudentName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(propsGroupId);
  const [students, setStudents] = useState([]); // 학생 데이터를 저장할 상태
  const [inputText, setInputText] = useState("");
  const [speechCount, setSpeechCount] = useState(0);
  const [attitudeCount, setAttitudeCount] = useState(0);

  const [groups, setGroups] = useState([]); // useEffect용 그룹 데이터를 저장할 상태 추가

  //test 드래그 관련 상태
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    console.log(
      "props로 넘어온 정보들: ",
      show,
      onClose,
      propsGroupId,
      propsUserId,
      contentId
    );

    const fetchScores = async () => {
      try {
        const res = await instance.get(
          `/api/record/score/${propsGroupId}/${propsUserId}`
        );
        console.log("fetchScores res.data:", res.data);

        if (res.status === 200) {
          console.log("fetchScores성공");
          setSpeechCount(res.data.result.presentationNum);
          setAttitudeCount(res.data.result.attitudeScore);
        } else {
          alert("fetchScores성공");
        }
      } catch (error) {
        console.error("fatchScores error:", error);
      }
    };

    if (contentId) {
      fetchScores();

      const fetchStudentBook = async () => {
        try {
          const response = await instance.get(
            `/api/handbook/${propsGroupId}/${propsUserId}`
          );
          console.log("####학생 수첩 조회 내용:", response.data);
          if (response.status === 200 && response.data.result) {
            const studentBookEntries = response.data.result;
            // contentId와 일치하는 항목 찾기
            const matchingEntry = studentBookEntries.find(
              (entry) => entry.id === contentId
            );
            if (matchingEntry) {
              // 찾은 내용으로 setInputText 호출
              setInputText(matchingEntry.content);
            }
          } else {
            console.error(
              "서버로부터 예상치 못한 응답을 받았습니다:",
              response
            );
          }
        } catch (error) {
          console.error("학생 수첩을 가져오지 못했습니다.:", error);
        }
      };

      if (propsGroupId && propsUserId) {
        fetchStudentBook();
      }
    }

    console.log("useEffect 실행 시작");
    const fetchGroups = async () => {
      try {
        const resp = await instance.get(`/api/group`);
        // console.log("서버 응답: ", JSON.stringify(resp, null, 2));
        // console.log("서버 응답 확인" + resp.data);
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
  }, [propsGroupId, propsUserId]);

  if (show == false) {
    return null; // show가 false일 경우 아무 것도 렌더링하지 않음
  }

  // 모달 닫기 핸들러
  const handleClose = () => {
    // 모달을 닫을 때 부모 컴포넌트에 알리기
    if (onClose) onClose();
  };

  //발표 점수 계산
  const speechUpCount = () => {
    setSpeechCount(speechCount + 1);
  };

  const speechDownCount = () => {
    setSpeechCount(speechCount - 1);
  };

  //태도 점수 계산
  const attitudeUpCount = () => {
    setAttitudeCount(attitudeCount + 1);
  };

  const attitudeDownCount = () => {
    setAttitudeCount(attitudeCount - 1);
  };

  //학생 선택
  const handleStudentChange = (e) => {
    e.stopPropagation();
    const selectedId = e.target.value; // 선택된 학생의 ID를 이벤트 객체에서 직접 가져옴
    setSelectedStudent(selectedId);

    // students 배열에서 선택된 학생의 ID와 일치하는 학생을 찾아 이름을 업데이트
    const foundStudent = students.find((student) => student.id == selectedId);
    if (foundStudent) {
      setSelectedStudentName(foundStudent.name);
    } else {
      setSelectedStudentName(""); // 일치하는 학생이 없으면 이름을 비움
    }

    console.log("Selected Student ID: " + selectedId);
    console.log(
      "Selected Student Name: " + (foundStudent ? foundStudent.name : "None")
    );
  };

  //반 선택
  const handleGroupChange = async (e) => {
    e.stopPropagation();
    const groupId = e.target.value;
    setSelectedGroup(groupId);
    console.log("Selected Group: " + groupId);

    try {
      let res;
      if (contentId) {
        res = await instance.get(`/api/group/students/${propsGroupId}`);
      } else {
        res = await instance.get(`/api/group/students/${groupId}`);
      }

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

  // 저장하기 버튼 클릭
  const handleSave = async (e) => {
    e.preventDefault();

    // contentId가 있으면 POST대신 PATCH를 보낼 로직

    // 상태에서 groupId와 userId를 사용합니다.
    const groupId = selectedGroup; // 이전에 선택된 그룹 ID
    const userId = selectedStudent; // 이전에 선택된 학생 ID

    // inputText가 null이거나 빈 문자열이거나 공백만 있는 경우를 확인
    if (!inputText || inputText.trim() === "") {
      alert("내용을 입력하세요.");
      return;
    }

    const requestBody = {
      content: inputText, // 텍스트 입력 내용
      attitudeScore: attitudeCount, // 태도 점수
      presentationNum: speechCount, // 발표 횟수
    };

    try {
      console.log("보낸 requestBody: ", requestBody);
      console.log("현재 contentId: ", contentId);
      let response;
      if (contentId) {
        response = await instance.patch(
          `/api/handbook/${contentId}`,
          requestBody
        );
      } else {
        response = await instance.post(
          `/api/handbook/${groupId}/${userId}`,
          // `/api/handbook/9/22`,
          requestBody
        );
      }

      if (response.status === 201) {
        // alert(`${userId}번 학생의 학생 수첩 작성이 완료되었습니다.`);
        // alert(`${userId}번 학생의 학생 수첩 작성이 완료되었습니다.`);
        alert(`${selectedStudentName}학생의 학생 수첩 작성이 완료되었습니다.`);
        console.log("학생 수첩 작성 성공!");
        // location.reload();
      } else if (response.status === 200) {
        // alert(`${userId}번 학생의 학생 수첩 수정이 완료되었습니다.`);
        alert(`${selectedStudentName}학생의 학생 수첩 작성이 완료되었습니다.`);
        console.log("학생 수첩 수정 성공!");
        location.reload();
      } else {
        alert("학생 수첩 작성에 실패하였습니다.");
      }
    } catch (error) {
      console.error("학생 수첩 작성 오류:", error);
    }
  };

  return (
    <SmallContainer
      onClick={(e) => e.stopPropagation()}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : null}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // 드래그 중 컴포넌트를 벗어났을 때
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {contentId ? null : (
        <>
          <GroupSelect value={selectedGroup} onChange={handleGroupChange}>
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

          <StudentSelect value={selectedStudent} onChange={handleStudentChange}>
            <option value="" disabled selected>
              학생 선택
            </option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </StudentSelect>
          <ExitImg src={exit} alt="exit" onClick={handleClose}></ExitImg>
        </>
      )}
      <Textarea
        value={inputText}
        onChange={(e) => {
          const text = e.target.value;
          setInputText(text);
          // setByteCount(calculateByteCount(text));
        }}
      />
      {contentId ? null : (
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
              {attitudeCount}
            </p>
            <Button onClick={attitudeUpCount}>
              <Img src={caret_up} alt="caret_up" />
            </Button>
          </CountContainer>
        </ButtonContainer>
      )}

      {/* <CancleButton onClick={() => setShowSmallContainer(false)}> */}
      <CancleButton onClick={handleClose}>취소</CancleButton>
      <SaveButton onClick={handleSave}>저장하기</SaveButton>
    </SmallContainer>
  );
}

export default StudentBookContent;
