import instance from "../../axios";
// 학습자료 삭제
export const deleteMaterial = async (groupId, materialId, onSuccess) => {
  try {
    console.log("그룹아이디:" + groupId + "학습자료아이디:" + materialId);
    const res = await instance.delete(`/api/material/${groupId}/${materialId}`);

    if (res.status === 200) {
      alert("학습자료 삭제가 완료되었습니다.");
      onSuccess();
    } else {
      console.log("학습자료 삭제에 실패했습니다.");
    }
  } catch (error) {
    console.error("학습자료 삭제에서 에러 발생", error);
  }
};