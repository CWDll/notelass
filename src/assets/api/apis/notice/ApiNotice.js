import instance from "../../axios";

export const getAllNotce = async (onSuccess) => {
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
