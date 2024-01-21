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
`;

const FooterRightContent = styled(FooterLeftContent)`
  flex-direction: row;
  justify-content: space-between;
`;

const FooterIconContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 1194px;
`;

const BoldText = styled.p`
color: var(--cool-grayscale-title, #26282B);
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: 12px;
`;

const Notelass = styled.p`
  color: var(--primary-cobalt, #4849FF);
  font-family: SF Pro Rounded;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
              <Name>강하현</Name>
              <Name>이창준</Name>
              <Name>조나애</Name>
            </NameBox>
            <NameBox>
              <Name>신수민</Name>
              <Name>이상협</Name>
            </NameBox>
          </CCBox>

          <SmallCCBox>
            <BoldText>Designer</BoldText>
            <NameBox>
              <Name>박정주</Name>
            </NameBox>
  
          </SmallCCBox>

          <SmallCCBox>
            <BoldText>Product Manager</BoldText>
            <NameBox>백지원</NameBox>
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
