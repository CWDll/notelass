import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-3-38-78-120.ap-northeast-2.compute.amazonaws.com:8080/",
  // 백엔드의 서버 경로 위치(현재 임의로 설정)
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance; //이 파일 밖에서도 사용가능하게 함
