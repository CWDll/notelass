import styled from 'styled-components';


export const Header = styled.header`
  display: flex;
`;

export const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

export const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

export const NoteContainer = styled.div`
  width: 1194px;
  height: 728px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 370px;
  margin-top: 48px;
`;

export const MakeNoteBody = styled.div`
  width: 1194px;
  height: 72px;
  margin-top: 32px;
  display: flex;
`;

export const AddNote = styled.div`
  display: flex;
  width: 48px;
  height: 64px;
  border-radius: 2px;
  border: 1.5px dashed #4849ff;
  margin-left: 32px;
  margin-top: 36px;
`;

export const PlusImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 18px;
  margin-top: 26px;
`;

export const Title = styled.p`
  color: #4849ff;
  font-size: 16px;
  font-weight: 600;
  padding-left: 26px;
  padding-top: 59px;
`;

export const PaperImg = styled.img`
  width: 48px;
  height: 64px;
  margin-left: 32px;
  margin-top: 4px;
`;

export const ChevronDownImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 1105px;
  align-self: center;
  position: absolute;
`;

export const StarImg = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-left: 1140px;
  
  position: absolute;
`;

export const BoldText = styled.p`
  color: #26282b;
  font-size: 16px;
  font-weight: 600;
`;

export const GrayText = styled.p`
  color: #9ea4aa;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
`;

export const SubjectBody = styled.div`
  display: flex;
  width: 1194px;
  height: 72px;
  margin-top: 16px;
`;

export const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;
`;

export const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;


export const NavDropdownBox = styled.div`
  width: 150px;
  background-color: white;

  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 945px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.1);
`;

export const NavDropdownOptionUp = styled.div`
  &:hover {
    background-color: #f5f5fc;
  }
  width: 100%;
  border-radius: 10px 10px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const NavDropdownOptionDown = styled(NavDropdownOptionUp)`
  border-radius: 0 0 10px 10px;
`;