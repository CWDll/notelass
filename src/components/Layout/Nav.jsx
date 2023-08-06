import React, { useEffect, useState } from "react";
// import { Container, LogoImg, UserImg } from "./Styled.jsx";

export default function Nav() {
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       //50 이상 내려가면
  //       if (window.scrollY > 50) {
  //         setShow(true);
  //       } else {
  //         setShow(false);
  //       }
  //     });

  //     return () => {
  //       window.removeEventListener("scroll", () => {});
  //     };
  //   }, []);

  return <div>Nav</div>;
}
