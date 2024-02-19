import instance from "../../axios";

// 모든 그룹 공지 가져오기
export const getAllNotice = async (onSuccess) => {
  try {
    const res = await instance.get(`/api/notice`);

    if (res.status === 200 && res.data) {
      onSuccess(res.data.result); // 데이터를 콜백함수를 통해 전달한다.
    } else if (res.status === 400) {
      alert("공지사항을 가져오는 데 실패했습니다.");
    } else {
      console.log("공지사항을 가져오는 데 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("공지사항 가져오기 실패", error);
  }
};

// 특정 그룹 공지 가져오기
export const getGroupNotice = async (groupId, onSuccess) => {
  try {
    const res = await instance.get(`/api/notice/${groupId}`);

    if (res.status === 200 && res.data) {
      onSuccess(res.data.result); // 데이터를 콜백함수를 통해 전달한다.
    } else if (res.status === 400) {
      alert("공지사항을 가져오는 데 실패했습니다.");
    } else {
      console.log("공지사항을 가져오는 데 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("공지사항 가져오기 실패", error);
  }
};