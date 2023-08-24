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


  
  const location = useLocation();
  const shouldRenderStudentBook = location.pathname !== '/NoteDetailSubject/pdf-viewer';


  return (
    
    <Container>
      <Nav />
      <Outlet />
      <Footer />
        {shouldRenderStudentBook && <StudentBook />}
    </Container>
    
        
   
  );
}
