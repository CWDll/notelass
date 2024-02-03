import React, { useState } from "react";
import * as S from "src/pages/Style/AssignmentStyle";
import QuestionList from "./QuestionList";

export default function AssignInfo() {
    const [showContainer, setShowContainer] = useState(false);

    const handleShowContainer = () => {
        setShowContainer(!showContainer);
    };

    return (
        <>
        <S.SettingBox>
            <S.SmallTitle>마감기한</S.SmallTitle>
            <S.SubText>김태연 선생님</S.SubText>
        </S.SettingBox>
        <S.SettingBox>
            <S.SmallTitle>허용된 시도</S.SmallTitle>
            <S.SubText>2회</S.SubText>
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
        {/* 조건부 렌더링을 통해 상태에 따라 컨테이너를 표시하되, 내용은 표시하지 않습니다. */}
        {showContainer &&  <QuestionList/>}
        </>
    );
};
