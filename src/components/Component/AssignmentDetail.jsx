import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import chevron_left from "../../assets/chevron_left.svg";

const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  /* display: flex; */
`;

const Header = styled.header`
  display: flex;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
`;

const Foot = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  /* margin-bottom: auto; */
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BigTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: bold;
  margin-left: 24px;
  margin-top: 72px;
`;

const SmallTitle = styled.p`
  color: #26282b;
  font-size: 16px;
  font-weight: 700;
  /* height: 54px; */
`;

const AssigmentCreateForm = styled.div`
  width: 684px;
  height: 800px;
  background-color: white;
`;

const AssignmentSettingForm = styled.div`
  width: 480px;
  height: 800px;
  background-color: skyblue;
`;

const HeadInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

const BodyInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const LegInput = styled(HeadInput)`
  justify-content: flex-start;
`;

const InputTitle = styled.input.attrs({
  placeholder: "Title입니다.",
  placeholdertextcolor: "red",
})`
  width: 536px;
  height: 40px;
  background-color: yellow;
  border-radius: 8px;
`;
const InputDesc = styled.textarea.attrs({
  placeholder: "과제 설명을 입력하세요.",
  placeholdertextcolor: "red",
})`
  width: 620px;
  height: 320px;
  background-color: purple;
  border-radius: 8px;
  resize: none;
`;

function AssignmentDetail() {
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");

  const onChangeName = (e) => {
    setAssignmentName(e.target.value);
  };
  const onChangeDesc = (e) => {
    setAssignmentDesc(e.target.value);
  };
  return (
    <Wrapper>
      <Header>
        <Img src={chevron_left} alt="chevron_left" />
        <BigTitle>노트고등학교 3학년 1반 문학</BigTitle>
      </Header>
      <Body>
        <AssigmentCreateForm>
          <BigTitle>공지/과제 생성</BigTitle>
          <HeadInput>
            <SmallTitle>과제 제목</SmallTitle>
            <InputTitle
              type="text"
              name="username"
              value={assignmentName}
              onChange={onChangeName}
            />
          </HeadInput>
          <BodyInput>
            <SmallTitle>과제 설정</SmallTitle>
            <InputDesc
              type="text"
              name="username"
              value={assignmentDesc}
              onChange={onChangeDesc}
            />
          </BodyInput>
          <LegInput>
            <SmallTitle>파일 첨부</SmallTitle>
            <input type="file" id="fileUpload" />
          </LegInput>
          <Foot>
            <button type="submit">생성하기</button>
            <button type="submit">취소</button>
          </Foot>
        </AssigmentCreateForm>
        <AssignmentSettingForm></AssignmentSettingForm>
      </Body>
    </Wrapper>
  );
}

export default AssignmentDetail;
