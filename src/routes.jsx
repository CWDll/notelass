// src/routes.jsx (js로 사용해도 무방)
// import GlobalLayout from "./pages/_layout";
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import TimeTable from "./components/Component/TimeTable";
import MealTable from "./components/Component/MealTable";
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

export const routes = [
  {
    path: "/",
    children: [
      { path: "/", element: <Layout /> },
      { path: "/", element: <Home /> }, // path="/" index
      { path: "/TimeTable", element: <TimeTable />, index: true },
      { path: "/MealTable", element: <MealTable />, index: true },
      { path: "/Introduce", element: <Introduce />, index: true },
      { path: "/GroupDetail", element: <GroupDetail />, index: true },
      { path: "/GroupDetailClass", element: <GroupDetailClass />, index: true },
      {
        path: "/GroupDetailClass/AssignmentDetail",
        element: <AssignmentDetail />,
      },
      { path: "/StudentScoreDetail", element: <StudentScoreDetail /> },
      { path: "/StudentTaskDetail", element: <StudentTaskDetail /> },
      { path: "/GroupScoreDetail", element: <GroupScoreDetail />, index: true },
      { path: "/GroupDetailWrite", element: <GroupDetailWrite />, index: true },
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
      { path: "/SelectSchool", element: <SelectSchool />, index: true },
      {
        path: "/EmailVerificationAndPassword",
        element: <EmailVerificationAndPassword />,
        index: true,
      },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/TimeTable" },
  { route: "/MealTable" },
  { route: "/Introduce" },
  { route: "/GroupDetail" },
  { route: "/GroupDetailClass" },
  { route: "/GroupDetailClass/AssignmentDetail" },
  { route: "/StudentScoreDetail" },
  { route: "/StudentTaskDetail" },
  { route: "/GroupScoreDetail" },
  { route: "/GroupDetailWrite" },
  { route: "/TasksDetail" },
  { route: "/Note" },
  { route: "/NoteDetailSubject" },
  { route: "/NoteDetailSubject/pdf-viewer" },
  { route: "/Setting" },
  { route: "/Login" },
  { route: "/SelectSchool" },
  { route: "/EmailVerificationAndPassword" },
];
