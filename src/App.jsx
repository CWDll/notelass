import { useState } from "react";
import React from "react";
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupDetail from "./components/Component/GroupDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<GroupDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
