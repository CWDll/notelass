import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import personimg from "../../assets/personimg.svg";
import bell from "../../assets/bell.svg";
import searching from "../../assets/searching.svg";

// const NavContainer = styled.div`
//   width: 1920px;  
//   height: 84px;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   padding: 0px 20px 0px 20px; 
//   
//   
// `;

const NavContainer = styled.div`
  width: 1920px;  
  height: 84px;
  background-color: white;
  display: flex;
  align-items: center;
  

  {/*임시*/}
  justify-content: space-between; 
  padding: 0px 0px 0px 20px;
`;

const Notelass = styled.h2`
  color: #4849ff;
  display: flex;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  {/*margin-left: 12;*/}
  white-space: nowrap;

  {/*임시*/}
  margin-left: -70px;
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

  cursor: pointer;
  margin-left: 250px;
  
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

const Bell = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 25px;
`;

const Person = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  margin-left: 10px;
  margin-right: 70px;
  border-radius: 50%;
  background: var(--primary-cobalt, gray);
`;

const SearchBox = styled.input`
  display: inline-flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 77px;
  width: 224px;
  height: 36px;
  border-radius: 100px;
  background: var(--cool-grayscale-background, #f5f5fc);
`;

const Searching = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-left: -30px;
`;

export default function Nav() {
  const [show, setShow] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // token에 문자열이 존재하면 true 반환

  const updateLoginState = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

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
  const navigateSignup = () => {
    navigate("/selectSchool");
  };

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      // 로그인 상태일 때 '마이페이지
      return (
        <>
          <SearchBox type="text" placeholder="노트, 학습자료 검색" />
          <Searching src={searching} alt="searching" />

          <Bell src={bell} alt="bell" />
          <Person src={personimg} alt="personimg" />
        </>
      );
      //<SignInBtn onClick={() => navigate('/mypage')}>마이페이지</SignInBtn>;
    } else {
      // 로그인 상태가 아닐 때 '로그인'과 '회원가입' 버튼 표시
      return (
        <>
          <SignInBtn onClick={navigateLogin}>로그인</SignInBtn>
          <SignUnBtn onClick={navigateSignup}>회원가입</SignUnBtn>
        </>
      );
    }
  };

  return (
    <NavContainer>
      <Imgbox>
        {" "}
        <LogoImg src={logo} alt="logo" />{" "}
      </Imgbox>
      <Notelass> Note-lass</Notelass>
      <NavItemContainer>
        {/* <NavItems
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
        </NavItems> */}

        <NavItems
          isSelected={selectedItemIndex === 2}
          onClick={() => {
            handleNavItemClick(2), navigateToGroupDetail();
          }}
        >
          그룹
        </NavItems>

        {/* <NavItems
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
        </NavItems> */}

      </NavItemContainer>
      <SignBtnContainer>{renderAuthButtons()}</SignBtnContainer>
    </NavContainer>
  );
}
