import React, { useState, useEffect } from "react";
import * as S from "./style";
import StudentLine from "./StudentLine";
import {
  groupAcceptAll,
  groupRetrieveList,
} from "../../../../assets/api/apis/group/ApiGroup";

const ManageGroup = ({ showEnrollModal, setShowEnrollModal, groupId }) => {
  const [applyDtos, setApplyDtos] = useState([]);
  const [groupInfo, setGroupInfo] = useState();
  const [groupCode, setGroupCode] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    // 신청 데이터 가져오기
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 API 호출
        const applyResponse = await groupRetrieveList(groupId);

        setApplyDtos(applyResponse.data.result.applyDtos);
        setGroupInfo(applyResponse.data.result.groupInfo);
        setGroupCode(applyResponse.data.result.groupCode);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 데이터를 가져오는 함수 호출
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  // 그룹 일괄 수락
  const GroupAcceptAll = () => {
    groupAcceptAll(groupId, () => {
      alert("모든 학생을 그룹에 수락하였습니다.");
    });
    setShowEnrollModal(false);
  };

  return (
    <S.ModalContainer>
      <S.Exit alt="exit" onClick={() => setShowEnrollModal(!showEnrollModal)} />
      <S.TextContainer>
        <S.GroupInfoText>
          {groupInfo} <S.GroupNumber>• {groupCode}</S.GroupNumber>
        </S.GroupInfoText>
        <S.AcceptAll
          onClick={() => {
            GroupAcceptAll;
          }}
        >
          한 번에 수락하기
        </S.AcceptAll>
      </S.TextContainer>
      {/* applyDtos 배열을 순회하여 각 학생에 대한 정보를 전달하고 StudentLine을 렌더링 */}
      {applyDtos.map((student, index) => (
        <StudentLine
          key={index}
          student={student}
          index={index + 1}
          groupId={groupId}
          userId={student.userId}
          setShowEnrollModal={setShowEnrollModal}
        />
      ))}
    </S.ModalContainer>
  );
};

export default ManageGroup;
