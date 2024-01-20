import instance from "../../axios";

export const checkCode = async (email, certifiNumber, onSuccess, onError) => {
  try {
    const res = await instance.get(
      `/api/auth/password/reset?email=${email}&code=${certifiNumber}`
    );

    if (res.status === 200) {
      onSuccess(); // 인증 성공시 실행될 콜백
    } else if (res.status === 400) {
      alert("올바르지 않은 비밀번호 재설정 코드입니다.");
    } else {
      alert("인증에 실패하였습니다.");
    }
  } catch (error) {
    console.error("인증 코드 확인 오류", error);
    onError(error); // 오류 처리 콜백
  }
};

export const resetPassword = async (
  email,
  certifiNumber,
  newPassword,
  onSuccess,
  onError
) => {
  try {
    const res = await instance.put(`/api/auth/password/reset`, {
      email: email,
      code: certifiNumber,
      newPassword: newPassword,
    });

    if (res.status === 200) {
      onSuccess(); // 비밀번호 재설정 성공시 실행될 콜백
    } else {
      alert("비밀번호 재설정에 실패하였습니다.");
    }
  } catch (error) {
    console.error("비밀번호 재설정 오류", error);
    onError(error); // 오류 처리 콜백
  }
};
