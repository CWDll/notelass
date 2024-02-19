import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import exit from "../../assets/exit.svg";
import Group from "src/assets/icon/Group/Group.svg";
import instance from "../../assets/api/axios";

import CreateGroup from "../../components/Component/Group/CreateGroup";
import EnterGroup from "../../components/Component/Group/Student/EnterGroup";
import * as S from "./Style/GroupDetailStyle";
////////////////////////////
import RoleContext from "../../RoleContext";
/////////////////////////////

// 학교, 학년, 반, 과목 명이 들어갈 변수집단 subjectInfo
const subjectInfo = "노트고등학교 3학년 1반 문학";
// " "를 기준으로 나누고, 3번째인 과목 명을 가져와 subject에 저장
const subject = subjectInfo.split(" ")[3];
// subject에서 앞 1글자만 가져와 저장하는 letter
const letter = subject.substr(0, 1);

function GroupDetail() {
  const [showSmallContainer, setShowSmallContainer] = useState(false);
  const [groupCode, setGroupCode] = useState("");
  const [grade, setGrade] = useState("");
  const [classNum, setClassNum] = useState("");
  const [subject, setSubject] = useState("");
  const [groupList, setGroupList] = useState([]);

  const [showEnterGroupModal, setShowEnterGroupModal] = useState(false);

  const { role } = useContext(RoleContext);

  const accessToken = localStorage.getItem("token");

  // 창준
  // const role = useContext(RoleContext);

  const navigate = useNavigate();

  const handleGroupClick = (id, school, grade, classNum, subject) => {
    navigate(`/GroupDetailClass/${id}`, {
      state: { school, grade, classNum, subject },
    });
  };

  const handleButtonClick = () => {
    setShowSmallContainer(true);
  };

  const fetchGroups = async () => {
    try {
      const response = await instance.get("/api/group");
      if (response.status === 200 && Array.isArray(response.data.result)) {
        setGroupList(response.data.result);
      } else {
        console.error("그룹 목록을 불러오는데 실패했습니다.");
      }
    } catch (error) {
      console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useEffect(() => {
    console.log("로그인:", role);
    fetchGroups();
  }, [role]);

  return (
    <S.Warp>
      <S.Button onClick={handleButtonClick}>
        {role === "STUDENT" ? "그룹 입장" : "그룹 생성"}
      </S.Button>

      {showSmallContainer &&
        (role === "STUDENT" ? (
          <EnterGroup
            showSmallContainer={showSmallContainer}
            setShowSmallContainer={setShowSmallContainer}
          />
        ) : (
          <CreateGroup />
        ))}
      <S.NoteContainer>
        {groupList.length === 0 ? (
          <S.Notice>
            <S.Img src={Group} alt="Group" />
            그룹이 존재하지 않습니다.
          </S.Notice>
        ) : (
          <S.SubjectBodyWrapper>
            {groupList.map((group) => (
              <S.SubjectBody
                key={group.id}
                onClick={() =>
                  handleGroupClick(
                    group.id,
                    group.school,
                    group.grade,
                    group.classNum,
                    group.subject
                  )
                }
              >
                <S.CircleText>
                  <S.PurpleText>{group.subject[0]}</S.PurpleText>
                </S.CircleText>
                <S.BoldText>{`${group.school} ${group.grade}학년 ${group.classNum}반 ${group.subject}`}</S.BoldText>
              </S.SubjectBody>
            ))}
          </S.SubjectBodyWrapper>
        )}
      </S.NoteContainer>
    </S.Warp>
  );
}

export default GroupDetail;
