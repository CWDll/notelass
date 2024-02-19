import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import personimg from "../../assets/personimg.svg";
import bell from "../../assets/bell.svg";
import searching from "../../assets/searching.svg";
import instance from "../../assets/api/axios";
import Logo from "../Component/Etc/Logo";

const NavContainer = styled.div`
  width: 100vw;
  height: 84px;
  background-color: white;
  display: flex;
  align-items: center;

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
  white-space: nowrap;
  margin-right: 180px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 20px;
  gap: 10px; /* Add this line to create a gap between the components */
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

const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  /* margin-left: 358px; */
`;

const NavItems = styled.span`
  width: auto;
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
  /* margin-left: 250px; */
`;

const SignBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  /* margin-left: 406px; */
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

const NavDropdownBox = styled.div`
  width: 150px;
  background-color: white;

  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  margin-left: 180px;
  border-radius: 10px;
`;

const NavDropdownOptionUp = styled.div`
  &:hover {
    background-color: #f5f5fc;
  }
  width: 100%;
  border-radius: 10px 10px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
const NavDropdownOptionDown = styled(NavDropdownOptionUp)`
  border-radius: 0 0 10px 10px;
`;

export default function Nav() {
  const [show, setShow] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // token에 문자열이 존재하면 true 반환
  const { paramsGroupId } = useParams();
  console.log(paramsGroupId);

  const updateLoginState = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  const handleNavItemClick = (index) => {
    setSelectedItemIndex(index);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // 외부 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    // 클린업 함수에서 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //페이지 이동시키는 navigate
  const navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate("/home");
  // };
  const navigateToIntroduce = () => {
    navigate("/introduce");
  };
  const navigateToGroupDetail = () => {
    navigate("/Groupdetail");
  };
  const navigateToNote = () => {
    navigate("/note");
  };
  // const navigateTosetting = () => {
  //   navigate("/setting");
  // };
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/selectSchool");
  };

  const handleLogout = async () => {
    try {
      await deleteFile(paramsGroupId);
      const res = await instance.post(`/api/auth/logout`);

      if (res.status === 200) {
        alert("로그아웃 되었습니다");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      // 오류 처리 로직...
    }
  };

  //생활기록부 파일 삭제 DELETE 함수
  const deleteFile = async (paramsGroupId) => {
    try {
      const response = await instance.delete(
        `/api/record/excel/${paramsGroupId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("생활기록부 파일 삭제 성공!");
      } else {
        console.error("예상치 못한 상태 코드:", response.status, response.data);
      }
    } catch (error) {
      console.error("데이터 삭제 중 오류 발생:", error);
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 표시 상태 추가
  const dropdownRef = useRef(); // 드롭다운 레퍼런스 추가
  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    // 이미 드롭다운이 보이는 상태에서 프로필 사진을 클릭하면 드롭다운을 닫습니다.
    if (dropdownVisible) {
      setDropdownVisible(false);
    } else {
      // 드롭다운이 보이지 않는 상태에서 프로필 사진을 클릭하면 드롭다운을 엽니다.
      setDropdownVisible(true);
    }
  };

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      // 로그인 상태일 때 '마이페이지
      return (
        <>
          <SearchBox type="text" placeholder="노트, 학습자료 검색" />
          <Searching src={searching} alt="searching" />

          <Bell src={bell} alt="bell" />
          <Person src={personimg} alt="personimg" onClick={toggleDropdown} />
          {dropdownVisible && (
            <NavDropdownBox ref={dropdownRef} className="dropdown-menu">
              <NavDropdownOptionUp
                className="dropdown-item"
                // onClick={navigateTosetting}
              >
                환경설정
              </NavDropdownOptionUp>
              <hr />
              <NavDropdownOptionDown
                className="dropdown-item"
                onClick={handleLogout}
              >
                로그아웃
              </NavDropdownOptionDown>
            </NavDropdownBox>
          )}
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
      <Logo />

      <NavItemContainer>
        <NavItems
          isSelected={selectedItemIndex === 0}
          onClick={() => {
            handleNavItemClick(0), navigateToIntroduce();
          }}
        >
          소개
        </NavItems>
        {/* 2024-02-18 QA를 위한 홈탭 제거
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

        <NavItems
          isSelected={selectedItemIndex === 3}
          onClick={() => {
            handleNavItemClick(3), navigateToNote();
          }}
        >
          노트
        </NavItems>

        {/* <NavItems
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
