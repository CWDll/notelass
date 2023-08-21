import { useState } from "react";
import "./App.css";
import React from "react";
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupDetail from "./components/Component/GroupDetail";
import Introduce from "./components/MainPage/Introduce";
import Note from "./components/MainPage/Note";
import Setting from "./components/MainPage/Setting";
import TasksDetail from "./components/Component/TasksDetail";
import NoteDetail from "./components/Component/NoteDetail";
import NoteDetailSubject from "./components/Component/NoteDetailSubject";
import GroupDetailClass from "./components/Component/GroupDetailClass";
import GroupDetailWrite from "./components/Component/GroupDetailWrite";
import PdfViewer from "./components/Component/PdfViewer";
import AssignmentDetail from "./components/Component/AssignmentDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Introduce" element={<Introduce />} />
          <Route path="/GroupDetail" element={<GroupDetail />} />
          <Route path="/GroupDetailClass" element={<GroupDetailClass />} />
          <Route
            path="/GroupDetailClass/AssignmentDetail"
            element={<AssignmentDetail />}
          />
          <Route path="/GroupDetailWrite" element={<GroupDetailWrite />} />

          <Route path="/TasksDetail" element={<TasksDetail />} />
          <Route path="/Note" element={<Note />} />
          <Route path="/Note" element={<NoteDetail />} />

          {/* "/pdf-viewer" 경로를 "/NoteDetailSubject" 경로의 하위 경로로 정의 */}
          <Route path="/NoteDetailSubject" element={<NoteDetailSubject />} />
          <Route path="/NoteDetailSubject/pdf-viewer" element={<PdfViewer />} />

          <Route path="/Setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
