import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import * as S from "src/pages/Note/Style/NoteDetailStyle"
import NoteDetailContent from "src/components/Component/DetailPage/NoteDetailContent";
import { useEffect } from "react";
import chevron_left from "../../assets/chevron_left.svg";
import chevron_down from "../../assets/chevron_down.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;


`;


const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;

  width: 1194px;
  margin: 60px 0px;
`;

const Img = styled.img.attrs({
  src: chevron_left,
})`
  margin-right: 10px;
`;

const DownIcon = styled.img.attrs({
  src: chevron_down,
})`
  width: 15px;
  height: 15px;
  margin-left: auto;
  margin-right: 4px;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

function NotesDetail() {
  const navigate = useNavigate();
  const { groupId, materialId } = useParams(); // groupId 매개변수 받기

  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const info = location.state;
  console.log("ND의 info:", info);
  console.log("ND의 materialId", materialId);

  //뒤로가기
  function BackButton() {
    navigate(-1);
  }

  return (
    <div>
    <Container>
      <Breadcrumb onClick={BackButton}>
        <Img alt="chevron_left" />
        <BoldText>학습자료</BoldText>
      </Breadcrumb>
      <NoteDetailContent materialId={materialId} info={info} /> 
  
    </Container>

    
      
    </div>
  );
}

export default NotesDetail;
