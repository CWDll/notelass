import { useState } from "react";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import TimeTable from "./components/Component/TimeTable";
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
import StudentScoreDetail from "./components/Component/StudentScoreDetail";
import StudentTaskDetail from "./components/Component/StudentTaskDetail";
import GroupScoreDetail from "./components/Component/GroupScoreDetail";
// 로그인페이지
import Login from "./components/LogInPage/Login";
import SelectSchool from "./components/LogInPage/SelectSchool";
import EmailVerificationAndPassword from "./components/LogInPage/EmailVerificationAndPassword";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Home의 공지 부분의 시간표 */}
            <Route path="/TimeTable" element={<TimeTable />} /> 
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/GroupDetail" element={<GroupDetail />} />
            <Route path="/GroupDetailClass" element={<GroupDetailClass />} />
            <Route
              path="/GroupDetailClass/AssignmentDetail"
              element={<AssignmentDetail />}
            />
            <Route
              path="/StudentScoreDetail"
              element={<StudentScoreDetail />}
            />
            <Route path="/StudentTaskDetail" element={<StudentTaskDetail />} />
            <Route path="/GroupScoreDetail" element={<GroupScoreDetail />} />
            <Route path="/GroupDetailWrite" element={<GroupDetailWrite />} />

            <Route path="/TasksDetail" element={<TasksDetail />} />
            <Route path="/Note" element={<Note />} />
            <Route path="/Note" element={<NoteDetail />} />

            {/* "/pdf-viewer" 경로를 "/NoteDetailSubject" 경로의 하위 경로로 정의 */}
            <Route path="/NoteDetailSubject" element={<NoteDetailSubject />} />
            <Route
              path="/NoteDetailSubject/pdf-viewer"
              element={<PdfViewer />}
            />

            <Route path="/Setting" element={<Setting />} />
          </Route>
          {/* 로그인페이지 추가(위치는 아직 셋팅X) */}
          <Route path="/Login" element={<Login />} />
          <Route path="/SelectSchool" element={<SelectSchool />} />
          <Route
            path="/EmailVerificationAndPassword"
            element={<EmailVerificationAndPassword />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
