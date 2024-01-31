import instance from "../../axios";

export const sendPasswordResetEmail = async (email, navigate) => {
  try {
    const response = await instance.post(
      `/api/auth/password/email?email=${email}`
    );

    if (response.status === 200) {
      alert("인증 번호 전송이 완료되었습니다.");
      navigate("/ResetPassword", { state: { email } }); // state에 email값 담아서 같이 보내기
    } else {
      alert("인증 번호 발송에 실패하였습니다.");
    }
  } catch (error) {
    alert("이메일을 다시 확인해주세요.");
  }
};