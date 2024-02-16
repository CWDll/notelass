import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import exit from '../../../assets/exit.svg';

const SmallContainer = styled.div`
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

const Exit = styled.img`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 432px;
  width: 24px;
`;


const SelfEvaluation = () => {

    
    const [showSelfEvaluation, setshowSelfEvaluation] = useState(false);

    return (
        <SmallContainer >
            컨테이너
            <Exit
              src={exit}
              alt="exit"
              onClick={() => setshowSelfEvaluation(!showSelfEvaluation)}
            ></Exit>
        </SmallContainer>
    );
};

export default SelfEvaluation;
