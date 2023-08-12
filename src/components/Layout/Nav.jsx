import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  width: 1920px;
  height: 84px;
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Notelass = styled.h2`
  color: purple;
  size: 16px;
`;

const NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const NavItems = styled.div`
  width: 100px;
  background-color: skyblue;
`;

const SignBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const SignBtn = styled.button`
  width: auto;
  background-color: yellow;
`;

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //50 이상 내려가면
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <NavContainer>
      <Notelass>Note-lass</Notelass>
      <NavItemContainer>
        <NavItems>소개</NavItems>
        <NavItems>홈</NavItems>
        <NavItems>그룹</NavItems>
        <NavItems>노트</NavItems>
        <NavItems>환경설정</NavItems>
      </NavItemContainer>
      <SignBtnContainer>
        <SignBtn>로그인</SignBtn>
        <SignBtn>회원가입</SignBtn>
      </SignBtnContainer>
    </NavContainer>
  );
}
