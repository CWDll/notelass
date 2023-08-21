import React, { useState, useRef } from "react";
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
  position: absolute;
  margin-left: 450px;
  margin-top: 200px;
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
  margin-left: 20px;
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
  margin-top: 30px;
`;

const BodyInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const LegInput = styled(HeadInput)`
  justify-content: flex-start;
  margin-left: 30px;
`;

const InputTitle = styled.input.attrs({
  placeholder: "Title입니다.",
  placeholdertextcolor: "red",
})`
  width: 496px;
  height: 40px;
  /* background-color: yellow; */
  border-radius: 8px;
  border: 1px solid #c9cdd2;
`;
const InputDesc = styled.textarea.attrs({
  placeholder: "과제 설명을 입력하세요.",
  placeholdertextcolor: "red",
})`
  width: 620px;
  height: 320px;
  /* background-color: purple; */
  border-radius: 8px;
  resize: none;
  border: 1px solid #c9cdd2;
`;

const fileBtn = styled.button`
  width: 180px;
  height: 40px;
  background-color: #c9cdd2;
`;

const CancelBtn = styled.button`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background-color: #e6e8ee;
  font-size: 14px;
  margin-right: 20px;
`;

const SubmitBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #4849ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
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
  // useRef를 이용해 input태그에 접근한다.
  const imageInput = useRef();

  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
  const onCickImageUpload = () => {
    imageInput.current.click();
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
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              ref={imageInput}
            />
            <button onClick={onCickImageUpload}>
              라이브러리에서 파일 탐색
            </button>
          </LegInput>
          <Foot>
            <SubmitBtn type="submit">생성하기</SubmitBtn>
            <CancelBtn type="submit">취소</CancelBtn>
          </Foot>
        </AssigmentCreateForm>
        <AssignmentSettingForm></AssignmentSettingForm>
      </Body>
    </Wrapper>
  );
}

export default AssignmentDetail;
