import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: 'butt',
          textSize: '30px',
          pathTransitionDuration: 0.5,
          pathColor: `rgba(255, 0,0, 1, ${percentage / 100})`, // 실행된 부분은 빨간색으로 표현
          textColor: '#000',
          trailColor: 'rgba(255, 255, 0, 0.3)', // 기본 줄은 노란색으로 표현
        })}
      />
    </CircularBarContainer>
  );
};

export default CircularBar;