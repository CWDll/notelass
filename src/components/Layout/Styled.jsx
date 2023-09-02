import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 1920px;
  position: relative;
  z-index: 100;
  padding: 20px 0 10px 0px;
  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }

  margin-top: 136px;
  margin-left: 363px
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
  color: gray;
  font-size: 17px;
  width: 500px;
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
