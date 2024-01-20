import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga4";
ReactGA.initialize("G-QSTTQEGWWQ");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
