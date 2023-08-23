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
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


function StudentBook (){
    return(
      <StudentBookContainer>
        <BookImg src={book} alt="book" />
        <Text>학생 수첩</Text>
      </StudentBookContainer>
    );
}

export default StudentBook;