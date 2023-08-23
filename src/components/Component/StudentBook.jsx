import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import book from "../../assets/book.svg";


const StudentBookContainer = styled.div`
  width: 60px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #4849ff;
  box-shadow: 0px 0px 8px 0px rgba(38, 40, 43, 0.2);
 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  position : fixed; 
  margin-top :236px; 
  margin-left :1589px;
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
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 추가: 작은 컨테이너 스타일
const SmallContainer = styled.div`
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
 

   
   
   
  
`;

function StudentBook() {
    const [showSmallContainer, setShowSmallContainer] = useState(false); // 추가

    return (
      <StudentBookContainer onClick={() => setShowSmallContainer(!showSmallContainer)}>
        <BookImg src={book} alt="book" />
        <Text>학생 수첩</Text>
        
        {/* 추가 */}
        {showSmallContainer && (
          <SmallContainer>
            내용을 여기에 입력하세요.
          </SmallContainer>
        )}
      </StudentBookContainer>
    );
}

export default StudentBook;
