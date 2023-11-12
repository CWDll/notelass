import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import chevron_left from "../../assets/chevron_left.svg";
import plus_lg from "../../assets/plus_lg.svg";
import paper from "../../assets/paper.svg";
import chevron_down from "../../assets/chevron_down.svg";
import star from "../../assets/star.svg";
import FilledStar from "../../assets/FilledStar.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const NoteContainer = styled.div`
  width: 1194px;
  height: 728px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 370px;
  margin-top: 48px;
`;

const MakeNoteBody = styled.div`
  width: 1194px;
  height: 72px;
  margin-top: 32px;
  display: flex;
`;

const AddNote = styled.div`
  display: flex;
  width: 48px;
  height: 64px;
  border-radius: 2px;
  border: 1.5px dashed #4849ff;
  margin-left: 32px;
  margin-top: 36px;
`;

const PlusImg = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 18px;
  margin-top: 26px;
`;

const Title = styled.p`
  color: #4849ff;
  font-size: 16px;
  font-weight: 600;
  padding-left: 26px;
  padding-top: 59px;
`;

const PaperImg = styled.img`
  width: 48px;
  height: 64px;
  margin-left: 32px;
  margin-top: 4px;
`;

const ChevronDownImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 884px;
  align-self: center;
`;

const StarImg = styled.img`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-left: 24px;
`;

const BoldText = styled.p`
  color: #26282b;
  font-size: 16px;
  font-weight: 600;
`;

const GrayText = styled.p`
  color: #9ea4aa;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
`;

const SubjectBody = styled.div`
  display: flex;
  width: 1194px;
  height: 72px;
  margin-top: 16px;
`;

const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;
`;

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

//노트 목록
const starItems = [
  { key: "item1", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
  { key: "item2", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
  { key: "item3", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
];

function NoteDetailSubject() {
  const navigate = useNavigate();
  const [starredItems, setStarredItems] = useState({});

  //노트별 즐겨 찾기 기능
  function handleStarClick(itemKey) {
    setStarredItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  }



  function handleTitleClick() {
    // Title 클릭 시 PDF 뷰어 페이지로 이동
    navigate("/NoteDetailSubject/pdf-viewer"); // 이동할 경로를 설정합니다.
  }

  return (
    <div>
      <Header>
        <Img src={chevron_left} alt="chevron_left" />
        <BoldTitle>과제별 성적 열람</BoldTitle>
      </Header>
      <NoteContainer>
        <MakeNoteBody>
          <AddNote>
            <PlusImg src={plus_lg} alt="plus_lg" />
          </AddNote>
          <Title onClick={handleTitleClick}>신규 노트 만들기</Title>
        </MakeNoteBody>

        
        <SubjectBodyWrapper>
          {starItems.map((item) => (
            <SubjectBody key={item.key}>
              <PaperImg src={paper} alt="paper" />
              <SubjectContainer>
                <BoldText>{item.title}</BoldText>
                <GrayText>{item.date}</GrayText>
              </SubjectContainer>
              <ChevronDownImg src={chevron_down} alt="chevron_down" />
              <StarImg
                onClick={() => handleStarClick(item.key)}
                src={starredItems[item.key] ? FilledStar : star}
                alt="star"
              />
            </SubjectBody>
          ))}
        </SubjectBodyWrapper>


      </NoteContainer>
    </div>
  );
}

export default NoteDetailSubject;
