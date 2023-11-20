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
      // console.log("axsios.jsx: token 존재:" + token);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance; //이 파일 밖에서도 사용가능하게 함
