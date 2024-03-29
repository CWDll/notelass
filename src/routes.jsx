import { Navigate } from "react-router-dom";
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
import MakeAssignment from "./pages/Group/MakeAssignment";
import StudentScoreDetail from "./pages/Student/StudentScoreDetail";
import StudentTaskDetail from "./pages/Student/StudentTaskDetail";
import GroupScoreDetail from "./pages/Group/GroupScoreDetail";
import CreateGroup from "./components/Component/Group/Teacher/CreateGroup";
import NoticeDetailList from "./pages/Notice/NoticeDetailList";
import NoticeDetail from "./pages/Notice/NoticeDetail";
import NotesDetail from "./pages/Note/NotesDetail";
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
  { path: "/", element: <Navigate to="/introduce" replace={true} /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/Home", element: <Home />, index: true }, // path="/" index
      { path: "/TimeTable", element: <TimeTable />, index: true },
      { path: "/MealTable", element: <MealTable />, index: true },
      { path: "/Introduce", element: <Introduce />, index: true },
      { path: "/NoticeDetailList", element: <NoticeDetailList />, index: true },
      {
        path: "/NoticeDetailList/:groupId",
        element: <NoticeDetailList />,
        index: true,
      },
      {
        path: "/NoticeDetail/:groupId/:noticeId",
        element: <NoticeDetail />,
        index: true,
      },
      {
        path: "/NotesDetail/:groupId/:materialId",
        element: <NotesDetail />,
        index: true,
      },
      { path: "/GroupDetail", element: <GroupDetail />, index: true },
      {
        path: "GroupDetailClass/:id",
        element: <GroupDetailClass />,
        index: true,
      },
      {
        path: "/GroupDetailClass/:paramsGroupId/MakeAssignment",
        element: <MakeAssignment />,
      },
      {
        path: "StudentScoreDetail",
        element: <StudentScoreDetail />,
        index: true,
      },
      {
        path: "StudentTaskDetail",
        element: <StudentTaskDetail />,
        index: true,
      },
      { path: "GroupScoreDetail", element: <GroupScoreDetail />, index: true },
      {
        path: "GroupDetailWrite/:paramsGroupId/:paramsUserId",
        element: <GroupDetailWrite />,
        index: true,
      },
      { path: "TasksDetail", element: <TasksDetail />, index: true },
      { path: "Note", element: <Note />, index: true },
      { path: "Notedetail", element: <NoteDetail />, index: true },
      {
        path: "/NoteDetailSubject",
        element: <NoteDetailSubject />,
        index: true,
      },
      {
        path: "NoteDetailSubject/pdf-viewer",
        element: <PdfViewer />,
        index: true,
      },
      { path: "Setting", element: <Setting />, index: true },
    ],
  },
  // Layout 컴포넌트 없이 직접 렌더링할 경로들
  { path: "/Login", element: <Login /> },
  { path: "/FindPassword", element: <FindPassword /> },
  { path: "/ResetPassword", element: <ResetPassword /> },
  { path: "/SelectSchool", element: <SelectSchool /> },
  { path: "/SelectRole", element: <SelectRole /> },
  {
    path: "/EmailVerificationAndPassword",
    element: <EmailVerificationAndPassword />,
  },
  { path: "/SignupComplete", element: <SignupComplete /> },
];
