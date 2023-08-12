import { useState } from "react";
import React from "react";
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupDetail from "./components/Component/GroupDetail";
import Introduce from "./components/MainPage/Introduce";
import Note from "./components/MainPage/Note";
import Setting from "./components/MainPage/Setting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/Groupdetail" element={<GroupDetail />} />
          <Route path="/note" element={<Note />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
