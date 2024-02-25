import styled from "styled-components";

export const SmallContainer = styled.div`
  width: 720px;
  height: 480px; 
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

export const Dropdown = styled.select`
  width: 264px;
  height: 48px;
  border-radius: 8px;
  border: 1.5px solid #d1d1d1;
  padding: 8px 12px;
  margin-top: 24px; 
  margin-left: 24px;
  margin-bottom: 10px; 
`;

export const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 30px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Label = styled.p`
  width: 28px;
  height: 19px;
  margin-top: 24px; 
  margin-left: 24px; 
  margin-bottom: 8px; 
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 53px;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 24px 20px;
`;

export const CancelButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: #ccc; 
  color: white;
  cursor: pointer;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

export const SaveButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#CCC" : "#4849ff")};
  color: white;
  cursor: pointer;
  margin-left: 16px;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

export const AddButton = styled.button`
  
  height: 40px;
  border-radius: 6px;
  border: none;
  background-color: #4849ff;
  color: white;
  cursor: pointer;
  margin-left: 280px;

  font-family: 'Pretendard';
  font-weight: 600;
  font-size: 14px;
  line-height 16.71px;
  text-align: center;
`;

export const QuestionInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 672px;
  margin: 10px 24px;
  position: relative;
  border-radius: 8px;
  border: 1.5px solid #d1d1d1;
`;

export const ExitButton = styled.img`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;