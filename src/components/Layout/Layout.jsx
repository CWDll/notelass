import React, { useContext } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import StudentBook from "../../pages/Student/StudentBook";
import StudentSelfEval from "../Component/Modal/StudentSelfEval/StudentSelfEval";
import RoleContext from "../../RoleContext";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;

  position: relative;
`;

export default function Layout() {
  const location = useLocation();
  const { role } = useContext(RoleContext);

  // "GroupDetailClass/:groupId" 경로 패턴 확인
  const isGroupDetailClassPath = /\/GroupDetailClass\/\d+$/.test(
    location.pathname
  );

  // 렌더링하지 않을 경로들을 배열로 관리
  const excludePaths1 = ["/NoteDetailSubject/pdf-viewer", "/introduce", "/"];

  // 현재 경로가 excludePaths 배열에 있는지 확인하여 렌더링 여부 결정
  const shouldRenderFooter = !excludePaths1.includes(location.pathname);
  const shouldRenderStudentBook = !excludePaths1.includes(location.pathname);

  // TEACHER일 때는 shouldRenderStudentBook의 조건에 따라 StudentBook 렌더링
  const shouldRenderStudentBookForTeacher =
    role === "TEACHER" && !excludePaths1.includes(location.pathname);

  // STUDENT일 때는 "GroupDetailClass/:groupId"에서만 StudentSelfEval 렌더링
  const shouldRenderStudentSelfEvalForStudent =
    role === "STUDENT" && isGroupDetailClassPath;

  return (
    <Container>
      <Nav />
      <Outlet />
      {shouldRenderFooter && <Footer />}
      {shouldRenderStudentBookForTeacher && <StudentBook />}
      {/* {shouldRenderStudentSelfEvalForStudent ? (
        <StudentSelfEval />
      ) : role === "STUDENT" ? null : (
        <StudentBook />
      )} */}
    </Container>
  );
}
