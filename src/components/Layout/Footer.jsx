import React from "react";
import styled from "styled-components";
import {
  FooterContainer,
  FooterTextContent,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLinkContent,
  FooterLink,
  FooterDescContainer,
  FooterDescRights,
} from "./Styled.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";

const FooterLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 90px;
  margin-right: 600px;
`;

const FooterRightContent = styled(FooterLeftContent)`
  flex-direction: row;
`;

const FooterIconContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 1194px;
`;

const BoldText = styled.p`
  font-weight: bold;
  width: 200px;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  margin-left: 10px;
`;

const Notelass = styled.p`
  color: #4849ff;
  font-weight: bold;
  font-size: 30px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Hr = styled.hr`
  border: none;
  height: 1.5px;
  background-color: var(--primary-cobalt, #4849ff);
  width: 1194px;
`;

const NameBox = styled.p`
  width: 1000px;
  display: inline-flex;
`;

const Name = styled.div`
  width: 80px;
`;

const CCBox = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CCBox2 = styled.div`
  width: 300px;
`;

const SmallCCBox = styled(CCBox)`
  width: 150px;
  display: block;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterIconContent>
        <Notelass>Note-lass</Notelass>
        <Icons>
          {/* <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} /> */}
          {/* 같은 코드로 drum 아이콘은 넣었는데, 인스타 페북 아이콘은 안 들어가는 상태. 나중에 다시 할 것. */}

          <Img src={instagram} />
          <Img src={facebook} />
          <Img src={github} />
        </Icons>
      </FooterIconContent>
      <Hr></Hr>
      <FooterTextContent>
        <FooterLeftContent>
          <FooterLinkTitle>
            Copyright ⓒNote-lass. All Rights Reserved.
          </FooterLinkTitle>
          <BoldText>개인정보 보호 정책</BoldText>
          <BoldText>오류 제보 및 만족도 평가</BoldText>
        </FooterLeftContent>
        <FooterRightContent>
          <CCBox>
            <BoldText>Developer</BoldText>
            <NameBox>
              <Name>백민석</Name>
              <Name>강하현</Name>
              <Name>이창준</Name>
            </NameBox>
            <NameBox>
              <Name>조나애</Name>
              <Name>신수민</Name>
              <Name>전승석</Name>
            </NameBox>
          </CCBox>

          <SmallCCBox>
            <BoldText>Designer</BoldText>
            <NameBox>
              <Name>기혜림</Name>
            </NameBox>
            <NameBox>
              <Name>유주하</Name>
            </NameBox>
          </SmallCCBox>

          <SmallCCBox>
            <BoldText>Sales</BoldText>
            <NameBox>이상윤</NameBox>
          </SmallCCBox>
          <CCBox2>
            <BoldText>대표자: 조창익</BoldText>
            <NameBox>E-mail: whckddlr00@ajou.ac.kr</NameBox>
          </CCBox2>
        </FooterRightContent>
      </FooterTextContent>
    </FooterContainer>
  );
}
