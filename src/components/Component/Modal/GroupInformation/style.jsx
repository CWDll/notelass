import styled from "styled-components";
import exit from "../../../../assets/exit.svg";

// EditOrDeleteModal style
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
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`;

export const ColorSpan = styled.span`
  color: #4849ff;
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
  width: 192px;
  height: 56px;
  background-color: #4849ff;
`;

// DeleteCheckModal style
export const ColorText = styled(Text)`
  color: #4849ff;
`;

export const GrayButton = styled(Button)`
  background-color: #e6e8ee;
  color: #9ea4aa;

  &:hover {
    border: none;
  }
`;

// DeleteConfirmModal style
