import React,{useState} from 'react';
import styled from 'styled-components';
import exit from '../../../assets/exit.svg';


export const SmallContainer = styled.div`
  width: 480px;
  height: 288px;
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
export const Exit = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  `;

export const Print = styled.button`
  display: inline-flex;
  width: 400px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 40px;
  margin-top: 56px;

  /* 출력하기 글씨 */
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  align-items: center;
`;

export const PrintNotice = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  margin-top: 104px;
`;



function DownloadSuccess({ onExit }) {
    const [isVisible, setIsVisible] = useState(true); // 상태 추가



    return (
        <>
            
                <SmallContainer>
                    <Exit
                        src={exit}
                        alt="exit"
                        onClick={onExit}
                    ></Exit>
                    <PrintNotice>성공적으로 출력되었습니다.</PrintNotice>
                    <Print onClick={onExit}>
                        확인
                    </Print>
          </SmallContainer>

        </>
    );
}

export default DownloadSuccess;

