import React from "react";
import styled from 'styled-components';


export const Warp = styled.div`
margin-left: auto; /* 중앙 정렬을 위해 자동 마진 사용 */
margin-right: auto;
`;

export const NoteContainer = styled.div`
width: 1194px;
height: 800px;
flex-shrink: 0;
border-radius: 8px;
background: #fff;
box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
position: relative;
margin-top: 16px;


  
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

export const CircleText = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--primary-light-cobalt, #ededff);
  border-width: 1.5px;
  border-color: var(--primary-cobalt, #4849ff);
  border-style: solid;
  margin-left: 32px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

export const PurpleText = styled.p`
  color: #4849ff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 12px;
`;

export const BoldText = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  align-self: center;
`;

export const SubjectBody = styled.div`
  display: flex;

  width: 1194px;
  height: 72px;
  flex-shrink: 0;
  margin-top: 16px;
  gap: 16px;
`;

export const Button = styled.button`
  width: 144px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #4849FF;
  margin-top: 74px;
  margin-left: 1050px;
  

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;


`;

export const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const SmallContainer = styled.div`
  width: 480px;
  height: 544px;
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
`;

export const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 40px;
  text-align: left;

  flex-shrink: 0;
`;

export const TextBox = styled.input`
  display: flex;
  width: 400px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 40px;

  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;

  color: var(--cool-grayscale-line, #c9cdd2);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

export const Button2 = styled.button`
  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 40px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

export const Exit = styled.img`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 432px;
  width: 24px;
`;

export const Code = styled.p`
  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 140px;
`;

export const Title2 = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 126px;
  margin-left: 184px;

  flex-shrink: 0;
`;

export const Notice = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Img = styled.img`
  display: flex;
  margin-bottom: 16px;
`;
