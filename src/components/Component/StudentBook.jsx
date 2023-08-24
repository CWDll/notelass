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


const SmallContainer = styled.div`
    width: 700px;
    height: 600px;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(38, 40, 43, 0.2);
    border-radius: 30px;
    position: fixed;
    margin-left :-1000px;
    margin-top : 100px;

  
`;

const StudentSelect = styled.select`
    width: 264px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 60px;

    /* 학생 선택 글씨 */
    color: var(--cool-grayscale-title, #26282B);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 16px;
`;

const GroupSelect = styled.select`
    width: 264px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 60px;

    /* 학생 선택 글씨 */
    color: var(--cool-grayscale-title, #26282B);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 16px;
`;

const Textarea = styled.textarea`
    width: 600px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid rgba(201, 205, 210, 0.50);
    background: #FFF;
    margin-left: 32px;
    margin-top: 60px;
    resize: none;
    padding: 16px;
    font-size: 16px;
    font-style: normal;
    outline : none; 
`;

const ExitButton = styled.button`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    margin-left: 10px;
    margin-top: 60px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #26282B;
    outline : none;
    align-items: center;
`;

const Button = styled.button`
  
    flex-shrink: 0;
    border-radius: 8px;
    background: gray;
    margin-left: 32px;
    margin-top: 60px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #FFF;
    outline : none;
    align-items: center;

`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
`;

const CancleButton = styled.button`
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    background: lightgray;
    margin-left: 400px;
    margin-top: 30px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #26282B;
    outline : none;
    align-items: center;
`;

const BlueButton = styled.button`
    width: 100px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #4849FF;
    margin-left: 32px;
    margin-top: 30px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #FFF;
    outline : none;
    align-items: center;
`;




const groups = [
    { id: 1, group: "1반" },
    { id: 2, group: "2반" },
    { id: 3, group: "3반" },
    { id: 4, group: "4반" },
];
const students = [
    { id: 1, name: "1번 김민수" },
    { id: 2, name: "2번 김민수" },
    { id: 3, name: "3번 김민수" },
    { id: 4, name: "4번 김민수" },
];

function StudentBook() {
    const [showSmallContainer, setShowSmallContainer] = useState(false); 
    const [selectedStudent, setSelectedStudent] = useState();
    const [selectedGroup, setSelectedGroup] = useState();
    const [inputText, setInputText] = useState("");
    const [speechCount, setSpeechCount] = useState(0);
    const [attitudeCount, setAttitudeCount] = useState(0);

    //발표 점수 계산
    const speechUpCount = () => {
        setSpeechCount(speechCount + 1);
      };
      
      const speechDownCount = () => {
        if (speechCount > 0) {
          setSpeechCount(speechCount - 1);
        }
      };

      //태도 점수 계산
      const attitudeUpCount = () => {
        setAttitudeCount(attitudeCount + 1);
      };
      
      const attitudeDownCount = () => {
        if (attitudeCount > 0) {
            setAttitudeCount(attitudeCount - 1);
        }
      };

     //학생 선택 
    const handleStudentChange = (e) => {
        e.stopPropagation();
        setSelectedStudent(e.target.value);
    };

    //반 선택 
    const handleGroupChange = (e) => {
        e.stopPropagation();
        setSelectedGroup(e.target.value);
    };

    const handleSave = () => {
        setShowSmallContainer(false);
        onSave(inputText); 
      }

      

    return (
      <StudentBookContainer onClick={() => setShowSmallContainer(!showSmallContainer)}>
        <BookImg src={book} alt="book" />
        <Text>학생 수첩</Text>
        
        
        {showSmallContainer && (
        <SmallContainer onClick={(e) => e.stopPropagation()}>
            <GroupSelect onChange={handleGroupChange}>
            <option value=""></option>
            {groups.map((group) => (
                <option key={group.id} value={group.id}>
                {group.group}
                </option>
            ))}  
            </GroupSelect>
            
            <StudentSelect onChange={handleStudentChange}>
            <option value=""></option>
            {students.map((student) => (
                <option key={student.id} value={student.id}>
                {student.name}
                </option>
            ))}
            </StudentSelect>
            <ExitButton onClick={() => setShowSmallContainer(false)}>X</ExitButton>
            <Textarea
                    value={inputText}
                    onChange={(e) => {
                    const text = e.target.value;
                    setInputText(text);
                    setByteCount(calculateByteCount(text));
                    }}
             />
             <ButtonContainer>
             <p>발표 횟수</p>
             <Button onClick={speechDownCount}>-</Button>
             {speechCount}
             <Button onClick={speechUpCount}>+</Button>
             
             <p>태도 점수</p>
             <Button onClick={attitudeDownCount}>-</Button>
             {attitudeCount}
             <Button onClick={attitudeUpCount}>+</Button>
             </ButtonContainer>
             <CancleButton onClick={() => setShowSmallContainer(false)}>취소</CancleButton>
             <BlueButton onClick={handleSave}>저장</BlueButton>
             
             
             
        </SmallContainer>
        )}
        
      </StudentBookContainer>
    );
}

export default StudentBook;
