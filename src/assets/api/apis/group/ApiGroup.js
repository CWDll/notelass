import instance from "../../axios";

export const AcceptAll = async (groupId, onSuccess) => {
  try {
    const res = await instance.post(`/api/group/approve/${groupId}`);

    if (res.status === 200) {
      onSuccess(res.data.result); // 데이터를 콜백함수를 통해 전달한다.
    } else {
      console.log("그룹 수락에서 문제가 발생했습니다.");
    }
  } catch (error) {
    console.error("그룹 일괄 수락 실패", error);
  }
};
