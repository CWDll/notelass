import styled from "styled-components";

export const SelfEvalModalContainer = styled.div`
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
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BigTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #26282b;
`;

export const SelfEvalList = styled.div`
  /* width: 420px; */
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  padding-top: 20px;
`;

export const SelfEvalContent = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
`;

export const SelfEvalQuestion = styled(BigTitle)`
  font-size: 14px;
`;

export const SelfEvalInput = styled.input`
  width: 416px;
  height: 117px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid black;
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

export const GrayButton = styled(Button)`
  background-color: #e6e8ee;
  color: #9ea4aa;

  &:hover {
    border: none;
  }
`;
