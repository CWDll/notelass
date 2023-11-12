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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  /* width: 100%; */
  margin: 0px 0 130px 0px;
`;

const TitleImg = styled.img`
  margin-bottom: 12px;
`;

export default function SignupComplete() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <ContainerWidth_1920>
      <InnerContainer>
        <TitleImg src={intro1} alt="My Button" />
        <img src={title} alt="My Button" />
      </InnerContainer>
      <InnerContainer>
        <img src={welcomeTitle} alt="My Button" />
      </InnerContainer>
      <img src={toLoginBtn} alt="My Button" onClick={navigateToLogin} />
    </ContainerWidth_1920>
  );
}
