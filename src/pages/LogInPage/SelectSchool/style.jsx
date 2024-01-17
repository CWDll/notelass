import styled from "styled-components";

export const ContainerWidth_1920 = styled.div`
  width: 1920px;
  height: 1080px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 500px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: 20px 0 10px 10px;
`;

export const NextBtnContainer = styled.div`
  margin-top: 150px;
`;

export const NextButton = styled(Button)`
  width: 400px;
`;

export const Notelass = styled.h1`
  color: #4849ff;
  size: 30px;

  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TitleText = styled.p`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
