import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import {
  useRoutes,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import store from "./store";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import TimeTable from "./components/Component/Table/TimeTable";
import MealTable from "./components/Component/Table/MealTable";
import GroupDetail from "./pages/Group/GroupDetail";
import Introduce from "./pages/Introduce/Introduce";
import Note from "./pages/Note/Note";
import Setting from "./pages/Setting/Setting";
import TasksDetail from "./pages/Task/TasksDetail";
import NoteDetail from "./components/Component/Note/NoteDetail";
import NoteDetailSubject from "./pages/Note/NoteDetailSubject";
import GroupDetailClass from "./pages/Group/GroupDetailClass";
import GroupDetailWrite from "./pages/Group/GroupDetailWrite";
import PdfViewer from "./pages/Note/PdfViewer";
import AssignmentDetail from "./pages/Group/AssignmentDetail";
import StudentScoreDetail from "./pages/Student/StudentScoreDetail";
import StudentTaskDetail from "./pages/Student/StudentTaskDetail";
import GroupScoreDetail from "./pages/Group/GroupScoreDetail";
import CreateGroup from "./components/Component/Group/CreateGroup";
import NoticeDetail from "./pages/Notice/NoticeDetail";
// 로그인페이지
import Login from "./pages/LogInPage/Login";
import SelectSchool from "./pages/LogInPage/SelectSchool";
import EmailVerificationAndPassword from "./pages/LogInPage/EmailVerificationAndPassword";
import SignupComplete from "./pages/LogInPage/SignupComplete";

function App() {
  // const elem = useRoutes(routes);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Home의 공지 부분의 시간표,급식표 */}
            <Route path="/TimeTable" element={<TimeTable />} />
            <Route path="/MealTable" element={<MealTable />} />
            <Route path="/NoticeDetail" element={<NoticeDetail />} />

            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/GroupDetail" element={<GroupDetail />} />
            <Route
              path="/GroupDetailClass/:id"
              element={<GroupDetailClass />}
            />
            <Route path="/CreateGroup" element={<CreateGroup />} />
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
          <Route path="/SignupComplete" element={<SignupComplete />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

/*
// router 따로 빼는건데, error fix하고 수정할 예정..
function App() {
  const elem = useRoutes(routes);

  return (
    <Router>
      <Provider store={store}>{elem}</Provider>
    </Router>
  );
}
*/
