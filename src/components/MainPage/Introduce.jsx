import styled from "styled-components";
import React from "react";

const NotelassImage = styled.img`
  width: 1920px;
  height: 1080px;
`;

function Introduce() {
  return (
    <div>
      <NotelassImage src="img/notelassimg.png" alt="Not a lass" />
    </div>
  );
}

export default Introduce;
