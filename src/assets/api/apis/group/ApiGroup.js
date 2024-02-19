import instance from "../../axios";

// 그룹 신청자 리스트 받아오기
export const groupRetrieveList = async (groupId) => {
  try {
    const res = await instance.get(`/api/group/applications/${groupId}`);

    if (res.status === 200) {
      console.log("그룹 신청 데이터 불러오기 성공"); // 데이터를 콜백함수를 통해 전달한다.
      return res;
    } else {
      console.log("그룹 신청 데이터 불러오기 실패");
    }
  } catch (error) {
    console.error("그룹 신청 데이터 불러오기에서 에러 발생", error);
  }
};

// 그룹 신청자 일괄 수락
export const groupAcceptAll = async (groupId, onSuccess) => {
  try {
    const res = await instance.post(`/api/group/approve/${groupId}`);

    if (res.status === 200) {
      onSuccess(res.data.result); // 데이터를 콜백함수를 통해 전달한다.
    } else {
      console.log("그룹 일괄수락에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 일괄 수락 실패", error);
  }
};

// 그룹 신청자 개인 수락
export const groupAccept = async (groupId, userId) => {
  try {
    const res = await instance.post(`/api/group/approve/${groupId}/${userId}`);

    if (res.status === 200) {
      // onSuccess(res.data.result);
      alert("그룹 신청을 수락하였습니다.");
    } else {
      alert("그룹 수락에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 개인 수락 실패", error);
  }
};

// 그룹 신청 거절
export const groupReject = async (groupId, userId) => {
  try {
    const res = await instance.delete(
      `/api/group/approve/${groupId}/${userId}`
    );

    if (res.status === 200) {
      alert("그룹 신청을 거절하였습니다.");
    } else {
      console.log("그룹 거절에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 일괄 수락 실패", error);
  }
};

// 그룹 삭제
export const deleteGroup = async (groupId) => {
  try {
    const res = await instance.delete(`/api/group/${groupId}`);

    if (res.status === 200) {
      console.log("res메시지", res.message);
      alert("그룹을 삭제하였습니다.");
    } else {
      console.log("그룹 삭제에 실패하였습니다.");
    }
  } catch (error) {
    console.error("그룹 삭제 실패", error);
  }
};

// 그룹 내에 이미 속해있는 명단 가져오기
export const getStudentList = async (groupId) => {
  try {
    const res = await instance.get(`/api/group/students/${groupId}`);

    if (res.status === 200) {
      console.log("이미 속한 학생 리스트 가져오기 성공(ApiGroup.js)");
      return res;
    } else {
      console.log("이미 속한 학생 리스트 가져오기에 실패하였습니다.");
    }
  } catch (error) {
    console.error("이미 속한 학생 리스트 가져오기 실패", error);
  }
};

// 그룹 내에 이미 속해있는 학생 삭제하기
export const deleteStudentInList = async (groupId, userId) => {
  console.log(groupId, userId);
  try {
    const res = await instance.delete(`/api/group/${groupId}/${userId}`);

    if (res.status === 200) {
      console.log("그룹 내에 이미 속해있는 학생 삭제 성공");
      alert("선택한 학생이 삭제되었습니다.");
      window.location.reload();
    } else {
      console.log("그룹 내에 이미 속해있는 학생 삭제 실패");
    }
  } catch (error) {
    console.error("그룹 내에 이미 속해있는 학생 삭제에서 에러 발생", error);
  }
};

//학생

//학생 그룹 코드 입력
export const enterGroupCode = async (code, setGroupId, setGroupInfo) => {
  try {
    const res = await instance.get(`/api/group/${code}`);
    console.log(code);

    if (res.status === 200) {
      console.log("코드로 그룹 입장 성공 ");
      console.log(res.data.result.groupId);
      const myGroupId = res.data.result.groupId;
      setGroupId(myGroupId);
      setGroupInfo(res.data.result.groupInfo);
    } else {
      console.log("코드로 그룹 입장 실패");
    }
  } catch (error) {
    console.error("코드로 그룹 입장에서 에러", error);
  }
};

//학생 그룹 입장 신청
export const enterGroup = async (groupId) => {
  try {
    const res = await instance.get(`/api/group/join/${groupId}`);
    console.log(groupId);

    if (res.status === 201) {
      console.log("그룹 입장 성공 ");
      alert("그룹 입장을 신청하였습니다.");
      console.log(res.data.result);
      window.location.reload();
    } else if (res.status === 400) {
      console.log("이미 등록된 신청입니다.");
      alert("X");
    }
  } catch (error) {
    console.error("그룹 입장에서 에러", error);
  }
};
