import React, { useState } from "react";
import * as S from "src/pages/Style/AssignmentStyle";
import QuestionList from "./QuestionList";





export default function AssignInfo() {
    const [showContainer, setShowContainer] = useState(false);
    const [deadline, setDeadline] = useState('');
    const [allowedAttempts, setAllowedAttempts] = useState(''); 

    const handleShowContainer = () => {
        setShowContainer(!showContainer);
    };

    // 마감 기한
    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };

    // 허용된 시도 
    const handleAllowedAttemptsChange = (e) => {  
        setAllowedAttempts(e.target.value);
    };


    return (
        <>
        <S.SettingBox>
            <S.SmallTitle>마감기한</S.SmallTitle>
            <S.SubText>
            <input 
            type="datetime-local" 
            value={deadline} 
            onChange={handleDeadlineChange}
            style={{ border: 'none', padding: '0', fontFamily: 'Pretendard', fontSize: '16px' }}
        />
            </S.SubText>
        </S.SettingBox>
        <S.SettingBox>
            <S.SmallTitle>허용된 시도</S.SmallTitle>
            <S.SubText>
            <input 
                type="text" 
                value={allowedAttempts} 
                onChange={handleAllowedAttemptsChange} 
                style={{ border: 'none', padding: '0', fontFamily: 'Pretendard', fontSize: '16px' }}
            />
                회</S.SubText>
        </S.SettingBox>
        <S.SettingBox>
            <S.SmallTitle>전체 배점</S.SmallTitle>
            <S.SubText>100점</S.SubText>
            <S.Qbtn onClick={handleShowContainer}>문제당 배점</S.Qbtn>
        </S.SettingBox>
        <S.SettingBox>
            <S.SmallTitle>할당된 그룹</S.SmallTitle>
            <S.SubText>노트고등학교 3학년 1반 문학</S.SubText>
        </S.SettingBox>
      
        {showContainer &&  <QuestionList/>}
        </>
    );
};
