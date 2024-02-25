import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import moment from "moment";

import * as S from "src/pages/Style/AssignmentStyle";
import instance from "src/assets/api/axios";

export default function NoticeInfo({
  matchedGroup,
  noticeId,
  teacher,
  info,
  creDate,
  paramsGroupId,
  infoteacher,
}) {
  // const currentDate = moment().format("YYYY.MM.DD");
  const postDate = moment(creDate).format("YYYY.MM.DD");
  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const infos = location.state;
  console.log("NI의 info in NDC:", infos);

  const [group, setGroup] = useState(matchedGroup || {});
  console.log("추출한 정보!:", matchedGroup);
  console.log("teacher", teacher);

  // info가 있으면 info를 사용하고, 없으면 matchedGroup을 사용
  const displayGroup = info || matchedGroup;
  console.log("teacher", teacher);

  console.log("infoteacher:", infoteacher);
  


  const [grouplist, setGrouplist] = useState([]);
  
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await instance.get(`/api/group`);
        if (response.status === 200 && Array.isArray(response.data.result)) {
          const matched = response.data.result.find(
            (group) => group.id.toString() === paramsGroupId
          );
          if (matched) {
            setGrouplist(matched);
            console.log("Matched 그룹 정보:", matched);
          } else {
            console.error("Matching group not found");
          }
        } else {
          console.error("그룹 목록을 불러오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("그룹 목록 요청 중 오류가 발생했습니다:", error);
      }
    }
  
    fetchGroups();
  }, [paramsGroupId]);



  return (
    <>
      <S.SettingBox>
        <S.SmallTitle>작성자</S.SmallTitle>
        {/* <S.SubText>{matchedGroup && `${matchedGroup.teacher}선생님`}</S.SubText> */}
        <S.SubText>{grouplist.teacher} 선생님</S.SubText>
      </S.SettingBox>
      <S.SettingBox>
        <S.SmallTitle>게시일</S.SmallTitle>
        <S.SubText>{postDate}</S.SubText>
      </S.SettingBox>
      <S.SettingBox>
        <S.SmallTitle>할당된 그룹</S.SmallTitle>
        <S.SubText>
          {displayGroup &&
            `${displayGroup.school} ${displayGroup.grade}학년 ${displayGroup.classNum}반 ${displayGroup.subject}`}
        </S.SubText>
      </S.SettingBox>
    </>
  );
}
