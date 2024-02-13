import styled from "styled-components";
import exit from "../../../../assets/exit.svg";

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
  justify-content: space-between;
  height: 70px;
  padding-left: 50px;
`;

export const GroupInfoText = styled.p`
  color: var(--Cool-Grayscale-Title, var(--title_text, #26282b));
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const GroupNumber = styled.span`
  color: var(--Primary-Cobalt, var(--title_text, #4849ff));
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AcceptAll = styled.div`
  color: var(--title_text, #9ea4aa);
  /* text-decoration-line: underline; */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 127px;
  heigth: 25px;
  padding: 8px;
  background-color: #f5f5fc;
`;

export const SchoolInfo = styled(AcceptAll)`
  width: auto;
  padding: 0;
  background-color: #ffffff;
`;

export const LineContainer = styled.div`
  width: 480px;
  height: 80px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px 10px 30px;
`;

export const BoldTitle = styled.p`
  color: var(--Cool-Grayscale-Title, var(--title_text, #26282b));
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StudentInfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  margin-right: 40px;
`;

export const RefuseButton = styled.button`
  display: inline-flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--Grayscale-Background, #f1f1f1);
`;

export const AcceptButton = styled.button`
  display: inline-flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: var(--Primary-Light-cobalt, #ededff);
`;
