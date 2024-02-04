import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


export const Container = styled.div`
  width: 100%; 
  max-width: 682px; 
  background: #FFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  padding: 30px; 
  margin: -500px; 
  position: absolute;
`;

export const Title = styled.h2`
display: flex; 
align-items: center; 
  text-align: left; 
  margin-bottom: 20px; 

  color: var(--Cool-Grayscale-Title, #26282B);
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ListItem = styled.div`
  display: flex;
  width: 616px;
  align-items: center; 
  justify-content: space-between;
  margin-bottom: 10px; 
  padding: 12px 16px; 
  border-top: 1px solid #EDEDFF; 
  border-radius: 4px; 
  gap:210px;

  &:first-child {
    border-top: none; 
  }
`;

export const NumberSpan  = styled.span`
  font-weight: bold; 
`;

export const NameInput = styled.input`
  border: 1px solid #d1d1d1; 
  border-radius: 4px; 
  padding: 8px 12px; 
  margin-left: 10px; 
  flex-grow: 1;
`;

export const Button = styled.button`
display: inline-flex;
height: 40px;
padding: 11px 12px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;

border-radius: 6px;
border: 1.5px solid var(--Primary-Cobalt, #4849FF);
background: #4849FF;

&:focus, &:hover, &:active {
    outline: none !important;
    box-shadow: none;
}


color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px; 
`;

export const DateSpan = styled.p`
  color: hotpink; 
  color: #9EA4AA;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

export const Cancle = styled.button`
display: inline-flex;
height: 40px;
padding: 11px 12px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
background: #E6E8EE;

&:focus, &:hover, &:active {
    outline: none !important;
    box-shadow: none;
}


color: #9EA4AA;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;


export const SpanContainer = styled.div`
  display: flex;
  gap: 220px; 
`;

export const BtnContainer = styled.div`
  display: inline-flex;
  gap: 16px; 
  justify-content: center;
`;
