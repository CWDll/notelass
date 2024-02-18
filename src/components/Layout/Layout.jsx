import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import StudentBook from "../../pages/Student/StudentBook";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;

  position: relative;
`;

export default function Layout() {
  const location = useLocation();
  
  // 렌더링하지 않을 경로들을 배열로 관리
  const excludePaths1 = ["/NoteDetailSubject/pdf-viewer", "/introduce"];
  

  // 현재 경로가 excludePaths 배열에 있는지 확인하여 렌더링 여부 결정
  const shouldRenderFooter = !excludePaths1.includes(location.pathname);
  const shouldRenderStudentBook = !excludePaths1.includes(location.pathname);

  

  return (
    <Container>
      <Nav />
      <Outlet />
      {shouldRenderFooter && <Footer />}
      {shouldRenderStudentBook && <StudentBook />}
    </Container>
  );
}
