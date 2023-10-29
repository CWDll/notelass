import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const NavContainer = styled.div`
  width: 1920px;
  height: 84px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

const Notelass = styled.h2`
  color: #4849ff;
  size: 22px;

  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 12px;
`;

const NavItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-left: 358px;
`;

const NavItems = styled.span`
  width: 100px;
  color: #9ea4aa;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  height: 100%;
  color: ${(props) => (props.isSelected ? "#4849ff" : "#9EA4AA")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "600")};
  margin: 0px 20px 0px 20px;
`;

const SignBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-left: 406px;
`;

const SignInBtn = styled.span`
  width: auto;
  color: #4849ff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 20px 0px 20px;
`;

const SignUnBtn = styled(SignInBtn)`
  color: #9ea4aa;
`;

const Imgbox = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 48px;
`;

const LogoImg = styled.img`
  margin-left: 5px;
  margin-top: 5px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

export default function Nav() {
  const [show, setShow] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);

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

  const handleNavItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  //페이지 이동시키는 navigate
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToIntroduce = () => {
    navigate("/introduce");
  };
  const navigateToGroupDetail = () => {
    navigate("/Groupdetail");
  };
  const navigateToNote = () => {
    navigate("/note");
  };
  const navigateTosetting = () => {
    navigate("/setting");
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <NavContainer>
      <Imgbox>
        {" "}
        <LogoImg src={logo} alt="logo" />{" "}
      </Imgbox>
      <Notelass> Note-lass</Notelass>
      <NavItemContainer>
        <NavItems
          isSelected={selectedItemIndex === 0}
          onClick={() => {
            handleNavItemClick(0), navigateToIntroduce();
          }}
        >
          소개
        </NavItems>
        <NavItems
          isSelected={selectedItemIndex === 1}
          onClick={() => {
            handleNavItemClick(1), navigateToHome();
          }}
        >
          홈
        </NavItems>
        <NavItems
          isSelected={selectedItemIndex === 2}
          onClick={() => {
            handleNavItemClick(2), navigateToGroupDetail();
          }}
        >
          그룹
        </NavItems>
        <NavItems
          isSelected={selectedItemIndex === 3}
          onClick={() => {
            handleNavItemClick(3), navigateToNote();
          }}
        >
          노트
        </NavItems>
        <NavItems
          isSelected={selectedItemIndex === 4}
          onClick={() => {
            handleNavItemClick(4), navigateTosetting();
          }}
        >
          환경설정
        </NavItems>
      </NavItemContainer>
      <SignBtnContainer>
        <SignInBtn onClick={navigateLogin}>로그인</SignInBtn>
        <SignUnBtn>회원가입</SignUnBtn>
      </SignBtnContainer>
    </NavContainer>
  );
}
