import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import a1 from "src/assets/img/Introduce/a1.png";
import a2 from "src/assets/img/Introduce/a2.png";
import a3 from "src/assets/img/Introduce/a3.png";
import a4 from "src/assets/img/Introduce/a4.png";
import a5 from "src/assets/img/Introduce/a5.png";

import b1 from "src/assets/img/Introduce/b1.png";
import b2 from "src/assets/img/Introduce/b2.png";
import b3 from "src/assets/img/Introduce/b3.png";

import c1 from "src/assets/img/Introduce/c1.png";
import c2 from "src/assets/img/Introduce/c2.png";
import c3 from "src/assets/img/Introduce/c3.png";
import c4 from "src/assets/img/Introduce/c4.png";

import d1 from "src/assets/img/Introduce/d1.png";
import d2 from "src/assets/img/Introduce/d2.png";
import d3 from "src/assets/img/Introduce/d3.png";
import d4 from "src/assets/img/Introduce/d4.png";

import e1 from "src/assets/img/Introduce/e1.png";
import e2 from "src/assets/img/Introduce/e2.png";
import e3 from "src/assets/img/Introduce/e3.png";
import e4 from "src/assets/img/Introduce/e4.png";
import e5 from "src/assets/img/Introduce/e5.png";


import f1 from "src/assets/img/Introduce/f1.png";
import f2 from "src/assets/img/Introduce/f2.png";

// const { role } = useContext(RoleContext);

const A1 = styled.img`
  width: 417px;
  height: 32px;
  top: 315px;
  left: 620px;
  transform: translateX(-50%);
  position: absolute;
`;

const A2 = styled.img`
  width: 354px;
  height: 95px;
  top: 390px;
  left: 590px;
  transform: translateX(-50%);
  position: absolute;
`;

const A3 = styled.img`
  width: 472px;
  height: 70px;
  top: 544px;
  left: 640px;
  transform: translateX(-50%);
  position: absolute;
`;

const A4 = styled.img`
  width: 376px;
  height: 72px;
  top: 710px;
  left: 400px;
  padding: 21px, 100px, 22px, 99px;
  border-radius: 36px;
  background: #ffffff;
  position: absolute;
`;

const A5 = styled.img`
  width: 896px;
  height: 672px;
  top: 227px;
  left: 1320px;
  transform: translateX(-50%);
  position: absolute;
`;

const B1 = styled.img`
  width: 865px;
  height: 86px;
  top: 1137px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const B2 = styled.img`
  width: 704px;
  height: 111px;
  top: 1295px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const B3 = styled.img`
  width: 742px;
  height: 38px;
  top: 1472px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const C1 = styled.img`
  width: 713px;
  height: 359px;
  top: 1717px;
  left: 640px;
  transform: translateX(-50%);
  position: absolute;
`;

const C2 = styled.img`
  width: Hug (174px);
  height: Hug (54px);
  top: 1715px;
  left: 1105px;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 28px;
  gap: 10px;
  background: #ffffff;
  position: absolute;
`;

const C3 = styled.img`
  width: 373px;
  height: 88px;
  top: 1801px;
  left: 1300px;
  transform: translateX(-50%);
  position: absolute;
`;

const C4 = styled.img`
  width: 654px;
  height: 132px;
  top: 1921px;
  left: 1440px;
  transform: translateX(-50%);
  position: absolute;
`;

const D1 = styled.img`
  width: Hug (179px);
  height: Hug (54px);
  top: 2256px;
  width: Hug (179px);
  height: Hug (54px);
  top: 2256px;
  left: 270px;
  padding: 12px, 24px, 12px, 24px;
  border-radius: 28px;
  gap: 10px;
  background: #ffffff;
  position: absolute;
`;

const D2 = styled.img`
  width: 543px;
  height: 88px;
  top: 2342px;
  left: 550px;
  transform: translateX(-50%);
  position: absolute;
`;

const D3 = styled.img`
  width: 734px;
  height: 348px;
  top: 2462px;
  left: 650px;
  transform: translateX(-50%);
  position: absolute;
`;

const D4 = styled.img`
  width: 740px;
  height: 393px;
  top: 2356px;
  left: 1470px;
  transform: translateX(-50%);
  position: absolute;
`;

const E1 = styled.img`
  width: 740px;
  height: 93px;
  top: 2956px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const E2 = styled.img`
  width: 981px;
  height: 234px;
  top: 3146px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const E3 = styled.img`
  width: 912px;
  height: 550px;
  top: 3452px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const E4 = styled.img`
  width: 30;
  height: 98px;
  top: 4074px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const E5 = styled.img`
  width: 376px;
  height: 72px;
  top: 4220px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

// const E6 = styled.img`
//   width: 947px;
//   height: 143px;
//   top: 4352px;
//   left: 50%;
//   transform: translateX(-50%);
//   position: absolute;
// `;

// const E7 = styled.img`
//   width: 1483px;
//   height: 32px;
//   top: 4535px;
//   left: 50%;
//   transform: translateX(-50%);
//   position: absolute;
// `;

const F1 = styled.img`
  width: 1202px;
  height: 373px;
  top: 4694px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const F2 = styled.img`
  width: 10px;
  height: 78px;
  top: 5135px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const P1 = styled.div`
  top: 5245px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
`;

const P2 = styled.div`
  top: 5335px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
`;

const P3 = styled.div`
  top: 5380px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
`;

const P4 = styled.div`
  width: 100%;
  top: 5490px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;

  font-family: Pretendard;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
`;

const NotelassImage = styled.div`
  position: relative;
  width: 1920px;
  height: 6000px;
  object-fit: cover;
  margin: 0 auto; // 수평 중앙 정렬
`;

const Button = styled.button`
  margin-top: 710px;
  margin-left: 410px;
  display: flex;
  width: 376px;
  height: 72px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => (props.isLoggedIn ? "#E6E8EE" : "#4849ff")};
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${(props) => (props.isLoggedIn ? "#9EA4AA" : "#ffffff")};

  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled.p`
  top: 315px;
  left: 32%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;
  color:#4849FF;
  font-family: Pretendard;
font-size: 32px;
font-weight: 700;
line-height: 38px;
letter-spacing: 0em;
text-align: left;

`;

const Title2 = styled.p`
  top: 370px;
  left: 32%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;
  color:#4849FF;
  font-family: Pretendard;
font-size: 96px;
font-weight: 1000;
line-height: 115px;
letter-spacing: 0em;
text-align: left;

`;

const Title3 = styled.p`
  top: 544px;
  left: 32%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;
  color:#4849FF;


font-family: Pretendard;
font-size: 24px;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

  `;

  const Title4 = styled.p`
  top: 584px;
  left: 27%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color:#4849FF;
  `;

  const Title5 = styled.p`
  top: 584px;
  left: 38.5%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 20px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 900;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color:#4849FF;
  `;

function Introduce() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // token에 문자열이 존재하면 true 반환

  const navigateLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <NotelassImage>
      {/* <A1 src={a1} alt="a1" />
      <A2 src={a2} alt="a2" />
      <A3 src={a3} alt="a3" /> */}
      {/* <A4 onClick={navigateLogin} src={a4} alt="a4" /> */}

      <Title>스마트 교육을 완성할 마지막 열쇠</Title>
      <Title2>노트라스</Title2>
      <Title3>선생님의 과도한 생활기록부 업무 부담을 줄여주는,</Title3>
      <br/>
      <Title4>새로운 선생님 맞춤형</Title4>
      <Title5>학생 관리 플랫폼</Title5>
      <Button
        isLoggedIn={isLoggedIn} // isLoggedIn prop 전달
        onClick={!isLoggedIn ? navigateLogin : undefined}
      >
        <Text isLoggedIn={isLoggedIn}>
          {isLoggedIn ? "로그인 완료" : "지금 바로 시작하기"}
        </Text>
      </Button>
      <A5 src={a5} alt="a5" />

      <B1 src={b1} alt="b1" />
      <B2 src={b2} alt="b2" />
      <B3 src={b3} alt="b3" />

      <C1 src={c1} alt="c1" />
      <C2 src={c2} alt="c2" />
      <C3 src={c3} alt="c3" />
      <C4 src={c4} alt="c4" />

      <D1 src={d1} alt="d1" />
      <D2 src={d2} alt="d2" />
      <D3 src={d3} alt="d3" />
      <D4 src={d4} alt="d4" />

      <E1 src={e1} alt="e1" />
      <E2 src={e2} alt="e2" />
      <E3 src={e3} alt="e3" />
      <E4 src={e4} alt="e4" />
      <a href="https://notelass.site/showcase/">
        <E5 src={e5} alt="e5" />
      </a>
      {/* <E6 src={e6} alt="e6" /> */}
      

      <F1 src={f1} alt="f1" />
      <F2 src={f2} alt="f2" />

      <P1> 궁금한 부분은 언제든 편하게 문의해주세요!</P1>
      <P2> 오픈채팅 문의 : https://open.kakao.com/o/sK1oZEpf</P2>
      <P3> 이메일 문의 : whckddlr99@gmail.com</P3>

      <P4>
        {" "}
        매일 밤 11시~12시에 업데이트를 진행해 해당 시간에는 접속이 안될 수
        있으니 유의 부탁드립니다.
      </P4>
    </NotelassImage>
  );
}

export default Introduce;
