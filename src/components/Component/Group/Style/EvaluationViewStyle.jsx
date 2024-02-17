import styled from "styled-components";

export const SmallContainer = styled.div`
  width: 480px;
  height: 476px; 
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 24px 0px rgba(38, 40, 43, 0.15);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const ExitButton = styled.img`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const Box = styled.div`
    width: 416px;
    height: 117px;
    border: 1.5px solid #C9CDD2;
    margin-top: 8px;
    padding : 16px;
    border-radius: 8px;
    margin-bottom:24px;

    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

`;


export const Label = styled.p`
  
  
  margin-top: 32px; 
  margin-left: 32px; 
  margin-bottom: 8px; 

  font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

`;

export const Question = styled.div`
  margin-top: 24px;
  margin-left: 32px;
`;

export const Title = styled.p`
font-family: Pretendard;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

`;