import React from "react";
import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import store from "./store";
import { routes } from "./routes";

import ReactGA from "react-ga4";
ReactGA.initialize("G-QSTTQEGWWQ");

function App() {
  // useRoutes를 호출해 라우트 구성을 가져옴. 앞으로 모든 route 경로는 ./route.jsx에 추가하여 사용 !
  const routeElement = useRoutes(routes);

  return (
    <Provider store={store}>
      {routeElement} {/* 라우트 구성을 여기에 포함 */}
    </Provider>
  );
}

export default App;
