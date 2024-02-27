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

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BigTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #26282b;

  font-family: Pretendard;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SelfEvalList = styled.div`
  /* width: 420px; */
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 20px;
`;

export const SelfEvalContent = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

//질문
export const SelfEvalQuestion = styled(BigTitle)`
  font-size: 14px;
  font-family: Pretendard;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

//답변
export const SelfEvalInput = styled.textarea`
  width: 416px;
  height: 117px;
  border: 1.5px solid #c9cdd2;
  margin-top: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  margin-bottom: 24px;
  resize: none;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;

  // 내부 폰트
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Button = styled.button`
  width: 150px;

  justify-content: center;
  align-items: center;
  background-color: #4849ff;
`;

export const GrayButton = styled(Button)`
  background-color: #e6e8ee;
  color: #9ea4aa;

  &:hover {
    border: none;
  }
`;

export const ExitButton = styled.img`
  position: absolute;
  right: 1px;
  cursor: pointer;
  margin-top: -20px;
`;
