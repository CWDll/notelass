
import React,{useEffect,useState} from "react";
import { useParams } from 'react-router';
import moment from "moment";

import * as S from "src/pages/Style/AssignmentStyle";
import instance from "src/assets/api/axios";

export default function NoticeInfo({paramsGroupId }) {
  
  const currentDate = moment().format("YYYY.MM.DD");

  const [group, setGroup] = useState("");
 

  const fetchGroups = async () => {
    try {
      const response = await instance.get(`/api/${paramsGroupId}`);
      if (response.status === 200 && Array.isArray(response.data.result)) {
        setGroup(response.data.result);
        console.log("그룹 정보:", response.data.result)
      } else {
        // 오류 처리
        console.error("그룹 목록을 불러오는데 실패했습니다.");
      }
    } catch (error) {
      console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, [paramsGroupId]);

 

  return (
    <>
      
          <S.SettingBox>
            <S.SmallTitle>작성자</S.SmallTitle>
            <S.SubText>{`${group.teacher}선생님`}</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>게시일</S.SmallTitle>
            <S.SubText>{currentDate}</S.SubText>
          </S.SettingBox>
          <S.SettingBox>
            <S.SmallTitle>할당된 그룹</S.SmallTitle>
            <S.SubText>{`${group.school} ${group.grade}학년 ${group.classNum}반 ${group.subject}`}</S.SubText>
          </S.SettingBox>
   
    </>
  );
}

