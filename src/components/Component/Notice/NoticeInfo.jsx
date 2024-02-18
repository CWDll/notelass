
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import moment from "moment";

import * as S from "src/pages/Style/AssignmentStyle";
import instance from "src/assets/api/axios";

export default function NoticeInfo({matchedGroup }) {
  
  const currentDate = moment().format("YYYY.MM.DD");

   const [group, setGroup] = useState(matchedGroup || {});
   console.log("추출한 정보!:", matchedGroup);
 
   

  return (
    <>
      
          <S.SettingBox>
            <S.SmallTitle>작성자</S.SmallTitle>
            <S.SubText>{matchedGroup &&`${matchedGroup.teacher}선생님`}</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>게시일</S.SmallTitle>
            <S.SubText>{currentDate}</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>할당된 그룹</S.SmallTitle>
            <S.SubText>{matchedGroup &&`${matchedGroup.school} ${matchedGroup.grade}학년 ${matchedGroup.classNum}반 ${matchedGroup.subject}`}</S.SubText>
          </S.SettingBox>
   
    </>
  );
}

