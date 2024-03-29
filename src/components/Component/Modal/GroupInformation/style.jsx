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
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  height: 9rem;
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

  color:#fff;
`;

// DeleteConfirmModal style
export const Input = styled.input`
  width: 320px;
  border-bottom: 1.5px solid #c9cdd280;
  margin-top: 25px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// EditListModal style
export const EditModalContainer = styled.div`
  width: 580px;
  height: 658px;
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
  align-items: center;

  padding: 20px;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StudentListSection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AddButton = styled.button`
  width: 103px;
  height: 32px;
  background-color: #ededff;
  color: #4849ff;
  text-align: center;
  padding: 0;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0 10px 0;
`;

export const TopCategory = styled(Category)`
  color: #9ea4aa;
  border-bottom: 1px solid #9ea4aa;
`;

export const Index = styled.div`
  margin-right: 120px;
`;

export const AboutStudent = styled.div`
  display: flex;
`;

export const StudentName = styled.p`
  font-weight: bold;
`;

export const CateStudentName = styled(StudentName)`
  margin-right: 80px;
  font-weight: 400;
  color: #9ea4aa;
`;

export const DeleteButton = styled.p`
  color: #9ea4aa;
  margin-left: 30px;
  border-bottom: 1px solid #9ea4aa;
`;

export const TextSection = styled.div``;

export const ClassSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #26282b;
`;
export const SemesSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #9ea4aa;
  margin-left: 8px;
`;
