import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

const Container = styled.div`
  width: 100%;
  max-width: 682px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: -500px;
  position: absolute;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 20px;

  color: var(--Cool-Grayscale-Title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ListItem = styled.div`
  display: flex;
  width: 616px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 12px 16px;
  border-top: 1px solid #ededff;
  border-radius: 4px;
  gap: 210px;

  &:first-child {
    border-top: none;
  }
`;

const NumberSpan = styled.span`
  font-weight: bold;
`;

const NameInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 8px 12px;
  margin-left: 10px;
  flex-grow: 1;
`;

const Button = styled.button`
  display: inline-flex;
  height: 40px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 6px;
  border: 1.5px solid var(--Primary-Cobalt, #4849ff);
  background: #4849ff;

  &:focus,
  &:hover,
  &:active {
    outline: none !important;
    box-shadow: none;
  }

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DateSpan = styled.p`
  color: hotpink;
  color: #9ea4aa;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

const Cancle = styled.button`
  display: inline-flex;
  height: 40px;
  padding: 11px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #e6e8ee;

  &:focus,
  &:hover,
  &:active {
    outline: none !important;
    box-shadow: none;
  }

  color: #9ea4aa;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SpanContainer = styled.div`
  display: flex;
  gap: 220px;
`;

const BtnContainer = styled.div`
  display: inline-flex;
  gap: 16px;
  justify-content: center;
`;

const QuestionList = () => {
  const [itemCount, setItemCount] = useState("");
  const [items, setItems] = useState(
    new Array(itemCount).fill("").map((_, i) => ({ id: i, value: "" }))
  );

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleItemCountChange = (e) => {
    const value = e.target.value.trim();
    const count = value ? Math.floor(Number(value)) : 0;

    if (!value) {
      setItemCount("");
      setItems([]);
    } else if (count > 0 && count <= 10000) {
      setItemCount(count);
      setItems(new Array(count).fill("").map((_, i) => ({ id: i, value: "" })));
    } else {
      alert("1부터 10000 사이의 값을 입력해주세요.");
    }
  };

  useEffect(() => {
    if (itemCount === "") {
      setItems([]);
    } else {
      const count = Math.floor(Number(itemCount));
      if (count >= 1 && count <= 10000) {
        setItems(
          new Array(count).fill("").map((_, i) => ({ id: i, value: "" }))
        );
      }
    }
  }, [itemCount]);

  //날짜
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const dateString = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <Container style={{ display: isVisible ? "block" : "none" }}>
        <InputContainer>
          <Title>총 {itemCount}문제</Title>
          <DateSpan>{dateString}</DateSpan>
        </InputContainer>

        <InputContainer>
          <Title>문항 개수: </Title>
          <InputBox
            adornment="개"
            type="number"
            value={itemCount}
            onChange={handleItemCountChange}
          />
        </InputContainer>

        {itemCount > 0 && (
          <SpanContainer>
            <NumberSpan>문항번호</NumberSpan>
            <NumberSpan>정답</NumberSpan>
            <NumberSpan>배점</NumberSpan>
          </SpanContainer>
        )}
        {items.map((item, index) => (
          <ListItem key={item.id}>
            <NumberSpan>{index + 1}</NumberSpan>
            <InputBox adornment="번" type="number" />
            <InputBox adornment="점" type="number" />
          </ListItem>
        ))}
        <BtnContainer>
          <Cancle onClick={handleClose}>취소</Cancle>
          <Button>저장하기</Button>
        </BtnContainer>
      </Container>
    </>
  );
};

export default QuestionList;
