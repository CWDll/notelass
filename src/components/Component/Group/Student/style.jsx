import styled from "styled-components";
import exit from "../../../../assets/exit.svg";

export const ModalContainer = styled.div`
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
  z-index: 10;

  display: flex;
  flex-direction: column;
`;

export const Exit = styled.img.attrs({ src: exit })`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 432px;
  width: 24px;
  border: 1px solid black;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 80px;
  margin-top: -30px;
  margin-bottom: 30px;
  width: 100%;
  height: 9rem;
`;

export const Text = styled.p`
  color: var(--Cool-Grayscale-Title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Input = styled.input`
  width: 400px;
  height: 56px;
  border-bottom: 1.5px solid #c9cdd280;
  margin-top: 25px;
  border: 1px solid #c9cdd280;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  padding: 4px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  // 내부 폰트
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
export const Button = styled.button`
  width: 230px;
  height: 56px;
  background-color: #e6e8ee;
  color: #9ea4aa;
  &:hover {
    border: none;
  }
`;

export const SmallButton = styled.button`
  margin-left: auto;
  witdh: 40px;
  heigth: 20px;
  border: 1px solid black;
  margin-right: 30px;
`;
