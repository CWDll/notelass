// src/routes.jsx (js로 사용해도 무방)
// import GlobalLayout from "./pages/_layout";
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
//학생수첩
import StudentBook from "./pages/Student/StudentBook";
// 로그인페이지
import Login from "./pages/LogInPage/Login/Login";
import SelectSchool from "./pages/LogInPage/SelectSchool/SelectSchool";
import SelectRole from "./pages/LogInPage/SelectRole/SelectRole";
import EmailVerificationAndPassword from "./pages/LogInPage/EmailVerificationAndPassword/EmailVerificationAndPassword";
import SignupComplete from "./pages/LogInPage/SignupComplete";
import FindPassword from "./pages/LogInPage/FindPassword/FindPassword";
import ResetPassword from "./pages/LogInPage/FindPassword/ResetPassword";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Home", element: <Home />, index: true }, // path="/" index
      { path: "/TimeTable", element: <TimeTable />, index: true },
      { path: "/MealTable", element: <MealTable />, index: true },
      { path: "/Introduce", element: <Introduce />, index: true },
      { path: "/GroupDetail", element: <GroupDetail />, index: true },
      {
        path: "/GroupDetailClass/:id",
        element: <GroupDetailClass />,
        index: true,
      },
      {
        path: "/GroupDetailClass/AssignmentDetail",
        element: <AssignmentDetail />,
      },
      { path: "/StudentScoreDetail", element: <StudentScoreDetail /> },
      { path: "/StudentTaskDetail", element: <StudentTaskDetail /> },
      { path: "/GroupScoreDetail", element: <GroupScoreDetail />, index: true },
      {
        path: "/GroupDetailWrite/:paramsGroupId/:paramsUserId",
        element: <GroupDetailWrite />,
        index: true,
      },
      { path: "/TasksDetail", element: <TasksDetail />, index: true },
      { path: "/Note", element: <Note />, index: true },
      { path: "/Note", element: <NoteDetail />, index: true },
      {
        path: "/NoteDetailSubject",
        element: <NoteDetailSubject />,
        index: true,
      },
      {
        path: "/NoteDetailSubject/pdf-viewer",
        element: <PdfViewer />,
        index: true,
      },
      { path: "/Setting", element: <Setting />, index: true },
      { path: "/Login", element: <Login />, index: true },
      { path: "/FindPassword", element: <FindPassword />, index: true },
      { path: "/ResetPassword", element: <ResetPassword />, index: true },
      { path: "/SelectSchool", element: <SelectSchool />, index: true },
      { path: "/SelectRole", element: <SelectRole />, index: true },
      {
        path: "/EmailVerificationAndPassword",
        element: <EmailVerificationAndPassword />,
        index: true,
      },
      {
        path: "/SignupComplete",
        element: <SignupComplete />,
        index: true,
      },
    ],
  },
];
