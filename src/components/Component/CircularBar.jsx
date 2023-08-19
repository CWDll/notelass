import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import styled from 'styled-components';

const CircularBarContainer = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;

const CircularBar = () => {
  const percentage = 70; 

  return (
    <CircularBarContainer>
      <CircularProgressbar
        value={percentage}
        text={"D-3"} // 글자를 원하는 내용으로 변경
        styles={buildStyles({
          textSize: '25px', // fontSize 수정
          textColor: '#F78', // 글씨의 색깔 수정
          textAnchor: 'middle', // 글자의 중앙 위치로 수정
          fontWeight: 600, // 텍스트 굵기 직접 설정

          rotation: 0,
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor: `#F78`, // 실행된 부분은 주어진 색으로 표현
          trailColor: 'rgba(255, 119, 136, .30)', // 기본 줄은 주어진 색으로 표현
        })}
      />
    </CircularBarContainer>
  );
};

export default CircularBar;
