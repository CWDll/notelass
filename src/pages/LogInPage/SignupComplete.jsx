import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import intro1 from "../../assets/intro1.svg";
import title from "../../assets/title.svg";
import welcomeTitle from "../../assets/welcomeTitle.svg";
import toLoginBtn from "../../assets/toLoginBtn.svg";

const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: auto;
`;

const InnerContainer = styled.div`
  width: 100%;
  margin: 20px 0 10px 0px;
`;

const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* margin-left: 12px; */
`;

const TitleText = styled.p`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function SignupComplete() {
  const navigate = useNavigate();
  const navigateGo = () => {
    navigate("/login");
  };

  return (
    <ContainerWidth_1920>
      <Container>
        <img src={intro1} alt="My Button" />
        <InnerContainer>
          <img src={title} alt="My Button" />
        </InnerContainer>
        <img src={welcomeTitle} alt="My Button" />
        <img src={toLoginBtn} alt="My Button" />
      </Container>
    </ContainerWidth_1920>
  );
}
