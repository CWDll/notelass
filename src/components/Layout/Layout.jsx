import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import StudentBook from "../Component/StudentBook";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;1
`;


export default function Layout() {
  return (
    
    <Container>
      <Nav />
      <Outlet />
      <Footer />
      <StudentBook />
    </Container>
    
        
   
  );
}
