import "./App.css";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { useRoutes, useNavigate } from "react-router-dom";
import store from "./store";
import { routes } from "./routes";
import RoleContext from "./RoleContext";

import ReactGA from "react-ga4";
ReactGA.initialize("G-QSTTQEGWWQ");

function App() {
  const navigate = useNavigate();
  // useRoutes를 호출해 라우트 구성을 가져옴. 앞으로 모든 route 경로는 ./route.jsx에 추가하여 사용 !
  const routeElement = useRoutes(routes);
  const [role, setRole] = useState(localStorage.getItem("role") || "teacher");

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  // 사이트 마운트 시 타이머 시작(1회만) -> 일단 10분으로 해놨음.
  useEffect(() => {
    const timer = setTimeout(() => {
      // 10분 후 로그인 상태 확인
      if (!localStorage.getItem("token")) {
        // 토큰이 없으면 로그인 페이지로 이동시킬 건데, 일단 임시 처리임.
        alert("로그인 해주세요!");
        navigate("/login");
      }
    }, 600000); // 600,000밀리초 = 10분

    return () => clearTimeout(timer); // 언마운트 시 타이머 제거
  }, []);

  return (
    <Provider store={store}>
      <RoleContext.Provider value={{ role, setRole }}>
        {routeElement} {/* 라우트 구성을 여기에 포함 */}
      </RoleContext.Provider>
    </Provider>
  );
}
export default App;
