import styled from "styled-components";

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

export const BlueTitle = styled.p`
  color: #2f80ed;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

export const StudentSelect = styled.select`
  width: 264px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 60px;

  /* 학생 선택 글씨 */
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 684px;
  height: 880px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 48px;
`;

export const SaveButton = styled.button`
  width: 73px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 579px;
  margin-top: -34px;

  /* 저장하기, 엑셀로 출력 글씨 */
  color: #ffffff;
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 480px;
  height: 880px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 30px;
  margin-top: 48px;
  position: relative;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 32px;
  margin-top: 32px;
`;

export const ScoreList = styled.div`
  margin-left: 32px;
  margin-top: 12px;
  height: 48px;
`;

export const ScoreTitle = styled.span`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  display: inline;
`;

export const ScoreResult = styled.span`
  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: inline;
`;

export const WritingBox = styled.div`
  width: 620px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 24px;
  padding-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 185px;
  border: none;
  resize: none;
  padding: 16px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const ByteCounting = styled.p`
  color: var(--cool-grayscale-placeholder, #9ea4aa);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 24px;
  margin-bottom: -15px;
`;

export const SuggestWordContainer = styled.div`
  margin-left: 150px;
  margin-top: -92px;
`;

export const SuggestWord = styled.div`
  display: inline-flex;
  padding: 3px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--primary-light-cobalt, #ededff);
  margin-top: 24px;

  &:not(:first-child) {
    margin-left: 8px;
  }

  color: #000;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const GuidelineContainer = styled.div`
  display: row;
  align-items: center;
  margin-left: 32px;
  margin-top: -25px;
`;

export const GuidelineTitle = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ReapeatImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 570px;
  margin-top: -48px;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const GuidelineBox = styled.div`
  width: 620px;
  min-height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 24px;
  padding: 10px;
  overflow: hidden;
`;

export const GuidelineText = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 24px 24px 24px 24px;
`;

export const SavedTextContainer = styled.div`
  width: 620px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-left: 32px;
  margin-top: 16px;
`;

export const SavedText = styled.pre`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  white-space: pre-wrap; /* 줄 바꿈 */
  word-wrap: break-word; /* 단어 바꿈 */
  padding: 16px 50px 16px 16px;
`;

export const InfoContainer = styled.div`
  display: column;
  align-items: center;
  margin-left: 32px;
  margin-top: 16px;
`;

export const TimeText = styled.p`
  color: #9ea4aa;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StudentBookText = styled.div`
  width: 413px;
  min-height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.5px solid rgba(201, 205, 210, 0.5);
  background: #fff;
  margin-top: 8px;
`;

export const HancellButton = styled.button`
  display: flex;
  width: 168px;
  height: 25px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #ededff;
  margin-top: -85px;
  margin-left: 432px;
  position: relative;

  color: var(--primary-cobalt, #4849ff);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

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

export const FileDownload = styled.img`
  position: relative;
  top: 12px;
  left: 3px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Notice = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-left: 63px;
  margin-right: 63px;
  margin-top: 76px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;
  margin-right: 32px;
`;

export const ExitButton = styled.button`
  width: 192px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--primary-cobalt, #4849ff);
  margin-right: 16px;

  /* 나가기 글씨 */
  color: #ffffff;
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContinueButton = styled.button`
  width: 192px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;

  /* 계속 작성하기 글씨 */
  color: var(--primary-cobalt, #4849ff);
  font-size: 14px;
  padding: 12px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Printexecl = styled.button`
  display: inline-flex;
  height: 46px;
  padding: 11px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #4849ff;
  margin-left: 260px;
  margin-top: 60px;

  /* 엑셀로 출력 글씨 */
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Percent = styled.input`
  display: flex;
  width: 56px;
  height: 25px;
  padding: 4px 12px 4px 31px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;
  margin-right: 8px;
  margin-left: 8px;

  /* % 글씨 */
  color: var(--primary-cobalt, #4849ff);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  padding-left: 12px;
`;

export const PercentBody = styled.div`
  display: flex;
  align-items: column;
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

export const Keyword = styled.input`
  display: flex;
  width: 70px;
  height: 25px;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #ededff;
  margin-left: 5px;
  margin-top: -68px;
`;

export const Text = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
  padding: 24px 24px 24px 24px;


  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

`;

export const AssigncellButton = styled.button`
  margin-left: 8px;
  margin-top: 32px;
  display: inline-flex;
  height: 32px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #fff;

  border-radius: 999px;
  border: 1.6px solid #4849ff;

  /*글씨**/
  color: #26282b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Checkbox = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 370px;
  margin-top: -40px;
`;

export const SyncButton = styled.button`
  display: flex;
  width: 164px;
  height: 25px;
  padding: 3px 0px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin-left: 168px;
  margin-top: -24px;
  background: #fff;

  border-radius: 999px;
  border: 1px solid #4849ff;

  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none; // 외곽선을 없애기 위해
    border: 1px solid #4849ff; // 기존의 테두리 스타일을 유지하기 위해
  }
`;

export const KeywordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

export const KeywordChip = styled.div`
  padding: 3px 10px;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${(props) => (props.selected ? "#4849ff" : "#E7E7E7")};

  color: #26282b;

  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Line = styled.div`
  width: 619px;
  height: 0px;
  border: 1px solid #e7e7e7;
  margin-left: 32px;
`;

export const XIMG = styled.img`
  width: 10px;
  height: 10px;
`;

export const SynonymsDisplay = styled.div`
  display: flex;
  height: 65px;
  padding-left: 32px;
  margin-top: 36px;
  flex-direction: column;
`;

export const SynonymWord = styled.span`
  display: inline-block;
  margin-right: 8px;
  margin-top: 16px;
  background: #ededff;
  padding: 5px 10px;
  marin-left: -102px;

  border-radius: 10px;

  color: var(--primary-cobalt, #4849ff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SelectedWord = styled.span`
  color: #4849ff;
`;

export const SynonymTitle = styled.p`
  color: #26282b;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CustomDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 35px;
  margin-top: -38px;
`;

export const ViewButton = styled.button`

display: flex;
height: 24px;
background: #EDEDFF;
top: 260px;
left: 1373px;
padding: 4px 12px; 
border-radius: 6px;
gap: 8px; 
text-align: center;
margin-left: 272px;
margin-top: -24px;

  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
  color: #4849FF;


 

`;