import instance from "../../axios";

// 인증번호 확인
export const checkCode = async (email, certifiNumber) => {
  try {
    const res = await instance.get(
      `/api/auth/password/reset?email=${email}&code=${certifiNumber}`
    );

    if (res.status === 200) {
      console.log("올바른 비밀번호 재설정 코드입니다.");
    } else if (res.status === 400) {
      alert("올바르지 않은 비밀번호 재설정 코드입니다.");
    } else {
      alert("인증에 실패하였습니다.");
    }
  } catch (error) {
    console.error("인증 코드 확인 오류", error);
  }
};

// 비밀번호 재설정
export const resetPassword = async (
  email,
  certifiNumber,
  newPassword,
  onSuccess
) => {
  try {
    const res = await instance.put(`/api/auth/password/reset`, {
      email: email,
      code: certifiNumber,
      newPassword: newPassword,
    });

    if (res.status === 200) {
      console.log("reset password 성공");
      alert("비밀번호가 재설정 되었습니다.");
      onSuccess();
    } else {
      alert("비밀번호 재설정에 실패하였습니다.");
    }
  } catch (error) {
    console.error("비밀번호 재설정 오류", error);
  }
};

// 비밀번호 재설정 메일 보내기
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

// 회원 탈퇴 로직 필요 !!
export const withdrawal = async () => {
  try {
    const response = await instance.delete(`/api/auth`);
    if (response.status === 200) {
      alert("회원 탈퇴 되었습니다.");
    } else {
      alert("회원 탈퇴에 실패했습니다.");
    }
  } catch (error) {
    alert("회원 탈퇴에서 에러 발생", error);
  }
};
