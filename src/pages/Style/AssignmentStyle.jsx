import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1920px; 
  min-height: 1080px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

// Left Body 시작
export const Header = styled.header`
  display: flex;
  margin-bottom: 50px;
  /* justify-content: center; */
  /* margin: 70px 0 55px 357px; */
  /* align-items: center; */
  /* flex-direction: row; */
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Foot = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  /* margin-bottom: auto; */
  position: absolute;
  margin-left: 450px;
  margin-top: 30px;
  margin-bottom: 30px;
  
`;

export const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

export const BigTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: bold;
  /* margin-left: 24px;
  margin-top: 72px; */
  font-family: Pretendard;
`;

export const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
  font-family: Pretendard;
`;

export const CreateTitle = styled(BigTitle)`
  margin-left: 32px;
  margin-top: 32px;
  font-family: Pretendard;
`;

export const SmallTitle = styled.p`
color: var(--cool-grayscale-title, #26282B);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const SubText = styled.p`
  color: var(--primary-cobalt, #4849FF);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 5px;
`;

export const AssigmentCreateForm = styled.div`
  width: 684px;
  height: 800px;
  background-color: white;
  margin-right: 30px;
`;

export const AssignmentSettingForm = styled.div`
  width: 480px;
  height: 800px;
  background-color: white;
`;

export const HeadInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; // 여기를 변경
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding-left: 32px; // 왼쪽 패딩 추가
`;

export const BodyInput = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-left: 29.5px;
  margin-top: 25px;
`;

export const LegInput = styled(HeadInput)`
  justify-content: flex-start;
  margin-left: 30px;
`;

export const InputTitle = styled.input.attrs({
  placeholder: "과제 제목을 입력하세요.",
  placeholdertextcolor: "red",
})`
  
  width: ${props => props.selectedButton === '강의자료' ? '493px' : '525px'};
  height: 40px;
  border-radius: 8px;
  border: 1px solid #c9cdd2;
  padding: 10px;
  margin-left: 24px;
`;

export const InputDesc = styled.textarea.attrs({
  placeholder: "과제 설명을 입력하세요.",
  placeholdertextcolor: "red",
})`
  width: 620px;
  height: 320px;
  /* background-color: purple; */
  border-radius: 8px;
  resize: none;
  border: 1px solid #c9cdd2;
  margin-top: 10px;
  padding: 10px;
`;

export const CancelBtn = styled.button`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background-color: #e6e8ee;
  font-size: 14px;
  margin-right: 20px;
`;

export const SubmitBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #4849ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
// Left Body 끝
// Right Body 시작
export const SettingBox = styled.div`
  margin-top: 20px;
  margin-left: 45px;
  width: 80%;
  height: 60px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-items: center;
  flex-direction: column;
`;

export const LibraryButton = styled.button`
    display: inline-flex;
    height: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0; 
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    outline: none; 

    &:hover, &:focus, &:active {
    outline: none; 
    }

    color: var(--cool-grayscale-placeholder, #9EA4AA);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;


`;

export const Btn = styled.button`
  display: inline-flex;
  height: 28px;
  margin: 8px;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  background: #F5F5FC;
  color: ${props => props.selected ? '#4849FF' : '#9E9E9E'}; 
  border: none; 
  outline: none; 

  &:hover, &:focus, &:active {
    border: none;
    outline: none; 
  }

  &.firstButton {
    margin-left: 460px;
  }
`;

export const Title =  styled.div`
display: flex;
margin-top : -35px;
`;

export const FileList = styled.div`
margin-top: 15px;
  margin-left: -300px;
`;

export const FileItem = styled.div`
  width: 620px;
  height: 40px;
  background: #F5F5FC;
  border: 1px solid #e6e8ee;
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 10px;
  margin-left: 330px;
`;

export const FileName = styled.span`
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Cool-Grayscale-Placeholder, #9EA4AA);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FileSize = styled.span`
  color: var(--Cool-Grayscale-Placeholder, #9EA4AA);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 파일 아이콘을 표시하기 위한 스타일 컴포넌트
export const FileIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const NoticeInfo = styled.div`
  display: flex
  `;

export const AssignInfo = styled.div`
display
`;