import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // 백엔드의 서버 경로 위치(현재 임의로 설정)
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance; //이 파일 밖에서도 사용가능하게 함
