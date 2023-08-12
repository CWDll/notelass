import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
  
  export default function TasksDetail() {
    // 그룹 컴포넌트 컨테이너
    const Container = styled.div`
      display: flex;
      width: 30%;
      height: 100%;
      flex-direction: column;
    `;
    // bold 텍스트
    const BoldText = styled.p`
      font-weight: bold;
      size: 20px;
    `;
    // 그룹 컴포넌트 헤드
    const Head = styled.div`
      display: flex;
      justify-content: space-between;
    `;
    return <Container>TasksDetail</Container>;
  };
