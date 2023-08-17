import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import plus_lg from "../../assets/plus_lg.svg";


const NoteContainer = styled.div`
    width: 1194px;
    height: 728px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
    margin-left: 370px;
    margin-top: 144px;
`;



function NoteDetail() {

   return (
    <NoteContainer>
        노트
    </NoteContainer>



  );
}

export default NoteDetail; 