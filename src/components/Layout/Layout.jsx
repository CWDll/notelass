import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import StudentBook from "../Component/StudentBook";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;

  position:relative;
`;




export default function Layout() {


  //pdf-viewer에서는 학생수첩이 안보이게 하기 위한 코드
  const location = useLocation();
  const shouldRenderStudentBook = location.pathname !== '/NoteDetailSubject/pdf-viewer';
  const shouldRenderFooter = location.pathname !== '/NoteDetailSubject/pdf-viewer';


  return (
    
    <Container>
      <Nav />
      <Outlet />
      {shouldRenderFooter && <Footer />}
      {shouldRenderStudentBook && <StudentBook />}
    </Container>
    
        
   
  );
}
