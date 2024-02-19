import instance from "../../axios";

export const sendPasswordResetEmail = async (email) => {
  try {
    const response = await instance.post(
      `/api/auth/password/email?email=${email}`
    );
    if (response.status === 200) {
      alert("비밀번호 재설정 메일을 전송했습니다.");
    } else {
      alert("존재하지 않는 이메일입니다.");
    }
  } catch (error) {
    alert("이메일을 다시 확인해주세요.");
  }
};
