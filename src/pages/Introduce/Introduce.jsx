import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";

import React from "react";

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
import e6 from "src/assets/img/Introduce/e6.png";
import e7 from "src/assets/img/Introduce/e7.png";

import f1 from "src/assets/img/Introduce/f1.png";
import f2 from "src/assets/img/Introduce/f2.png";


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
top: 357px;
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
background: #FFFFFF;
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
background: #FFFFFF;
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
background: #FFFFFF;
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

const E6 = styled.img`
width: 947px;
height: 143px;
top: 4352px;
left: 50%;
transform: translateX(-50%);
position: absolute;
`;

const E7 = styled.img`
width: 1483px;
height: 32px;
top: 4535px;
left: 50%;
transform: translateX(-50%);
position: absolute;
`;

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
top: 5095px;
left: 50%;
transform: translateX(-50%);
position: absolute;
`;












const NotelassImage = styled.div`
  position: relative; 
  width: 1920px;
  height: 6000px;
  object-fit: cover;
  margin: 0 auto; // 수평 중앙 정렬
`;




function Introduce() {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
   <NotelassImage >
    

    <A1 src={a1} alt="a1" />
    <A2 src={a2} alt="a2" />
    <A3 src={a3} alt="a3" />
    <A4 onClick={navigateLogin} src={a4} alt="a4" />
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
    <E5 src={e5} alt="e5" />
    <E6 src={e6} alt="e6" />
    <E7 src={e7} alt="e7" />

    <F1 src={f1} alt="f1" />
    <F2 src={f2} alt="f2" />

   



      </NotelassImage>
    
  );
}

export default Introduce;
