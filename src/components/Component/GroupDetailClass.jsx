import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import person from "../../assets/person.svg";
import file from "../../assets/file.svg";
import envelope from "../../assets/envelope.svg";
import envelopeOpen from "../../assets/envelopeOpen.svg";
import book from "../../assets/book.svg";

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282B;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
`;

const NoticeContainer = styled.div`
    width: 684px;
    height: 360px;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 363px;
    margin-top: 48px;
    position: relative;
    align-items: center; 
`;




const GroupContainer = styled.div`
    width: 684px;
    height: 312px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 363px;
    margin-top: 30px;
    position: relative;
`;

const ManagementContainer = styled.div`
    width: 480px;
    height: 1044px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 30px;
    margin-top: 48px;
    position: relative;
`;

const Title = styled.p`
    
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 32px; 
    padding-left: 32px; 
`;

const DetailText = styled.p`
  
  color: var(--cool-grayscale-placeholder, #9EA4AA);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  position: absolute;
  top: 37px;
  right: 32px;
`;

const SubjectContainer = styled.div`
    display: flex;
    width: 684px;
    height: 48px;
    flex-shrink: 0;
    background-color: yellow;
    flex-direction: column;
    margin-top: 24px;



`;

const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "#9EA4AA" : "inherit")};
`;

const NoticeContent = styled.div`
  display: flex; 
`;

const NoticeImg = styled.img`
    margin-top: 13px;
    margin-left: 32px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;


const NoticeTitle = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 16px; 
    margin-top: 14px;
    margin-bottom: 15px;
    
`;

const StudentBook = styled.div`
    width: 60px;
    height: 118px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #4849FF;
    box-shadow: 0px 0px 8px 0px rgba(38, 40, 43, 0.20);
    margin-left: 32px;
    margin-top: 56px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  
`;

const BookImg = styled.img`
    margin-top: 24px;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

const Text = styled.p`
    margin-top: 8px;
    margin-left: 13px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    
    
`;

function GroupDetailClass() {
    
    const navigate = useNavigate();
    const onClick = () => {
      navigate("/detail");
    };

    const [clickedIndices, setClickedIndices] = useState(new Set());

  const postContent = [
    "Notice 1",
    "Notice 2",
    "Notice 3",
    "Notice 4",
    "Notice 5",
  ];

  const handleOnClick = (index) => {
    setClickedIndices((prevIndices) => {
      const newIndices = new Set(prevIndices);
      if (!newIndices.has(index)) {
        newIndices.add(index);
      }
      return newIndices;
    });
  };



  return (
    <div>
      <Header>
        <Img src={chevron_left} alt="chevron_left" />
        <BoldTitle>노트고등학교 3학년 1반 문학</BoldTitle>
      </Header>
      <MainContainer>
        <LeftSectionContainer>

          <NoticeContainer>
            <Title>공지/과제</Title>
            <DetailText style={{ "text-decoration": "underline" }} onClick={onClick}>
            더보기
            </DetailText>

            <SubjectContainer>
                {postContent.map((content, index) => (
                <StyledNoticeItem
                    key={index}
                    isClicked={clickedIndices.has(index)}
                    onClick={() => handleOnClick(index)}
                    >
                    <NoticeContent>
                        <NoticeImg src={clickedIndices.has(index) ? envelopeOpen : envelope} alt="envelope" />
                        <NoticeTitle>{content}</NoticeTitle>
                    </NoticeContent>
                </StyledNoticeItem>
            ))}
            </SubjectContainer>
            
          </NoticeContainer>

          <GroupContainer>
            <Title>과제별 성적 열람</Title>
                <DetailText style={{ "text-decoration": "underline" }} onClick={onClick}>
                더보기
                </DetailText>
                GROUP DETAIL CLASS
          </GroupContainer>

          <GroupContainer>
            <Title>학생별 성적 열람</Title>
                <DetailText style={{ "text-decoration": "underline" }} onClick={onClick}>
                더보기
                </DetailText>
                GROUP DETAIL CLASS
          </GroupContainer>
        </LeftSectionContainer>

        <ManagementContainer>
            <Title>생기부 관리</Title>

        </ManagementContainer>

        <StudentBook>
            <BookImg src={book} alt="book" />
            <Text>학생 수첩</Text>
        </StudentBook>
      </MainContainer>
    </div>
  );
}

export default GroupDetailClass;
