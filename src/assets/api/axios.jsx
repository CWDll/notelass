import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SERVER_HOST}`,
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem("token");
    // 헤더에 토큰 추가
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 로그인 토큰이 만료되었거나 유효하지 않으면
      localStorage.removeItem("token"); // 토큰 삭제
      alert("로그아웃 되었습니다.");
      window.location.href = "/login"; // 페이지 리다이렉트
    }
    return Promise.reject(error);
  }
);

export default instance;
