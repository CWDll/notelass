import instance from "../../axios";

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

export const groupAccept = async (groupId, userId, onSuccess) => {
  try {
    const res = await instance.post(`/api/group/approve/${groupId}/${userId}`);

    if (res.status === 200) {
      onSuccess(res.data.result);
    } else {
      console.log("그룹 수락에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 개인 수락 실패", error);
  }
};

export const groupReject = async (groupId, userId, onSuccess) => {
  try {
    const res = await instance.delete(
      `/api/group/approve/${groupId}/${userId}`
    );

    if (res.status === 200) {
      onSuccess(res.data.result); // 데이터를 콜백함수를 통해 전달한다.
    } else {
      console.log("그룹 거절에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 일괄 수락 실패", error);
  }
};
