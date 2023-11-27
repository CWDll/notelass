import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  padding: 40px 0;
  position: relative;
  z-index: 100;
  padding: 20px 0 10px 0px;
  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }

  margin-top: 136px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterTextContent = styled.div`
  width: 500px;
  display: flex;
  flex-dicretion: row;
  justify-content: "space-between";
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterLinkContainer = styled.div`
  width: 500px;
  display: flex;
  flex-dicretion: row;
  justify-content: "space-between";

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-bewteen;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

export const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const FooterDescContainer = styled.div`
  margin-top: 30px;

  /* @media (max-width: 768px) {
    margin-top: 20px;
  } */
`;

export const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
