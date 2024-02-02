import React from "react";

import * as S from "src/pages/Style/AssignmentStyle"

export default function NoticeInfo()
{

    return (
        <>
        <S.SettingBox>

            <S.SmallTitle>작성자</S.SmallTitle>
            <S.SubText>김태연 선생님</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>게시일</S.SmallTitle>
            <S.SubText>2024.01.21</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>할당된 그룹</S.SmallTitle>
            <S.SubText>노트고등학교 3학년 1반 문학</S.SubText>
        </S.SettingBox>
        </>
    )
};

