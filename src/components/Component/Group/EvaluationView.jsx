import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import exit from '../../../assets/exit.svg';
import * as S from 'src/components/Component/Group/Style/SelfEvaluationStyle';
import instance from "src/assets/api/axios";

const SelfEvaluation = ({setIsEditing }) => {
    const [group, setGroup] = useState('');
    const [groups, setGroups] = useState([]);
    const [questions, setQuestions] = useState(['']); 
    const [isVisible, setIsVisible] = useState(true);
    const [question, setQuestion] = useState('');
    // const [isEditing, setIsEditing] = useState(false);

  
    //창 닫기
    const handleClose = () => {
        setIsVisible(false);
    };


   


    if (!isVisible) return null;
  
    return (
      <S.SmallContainer>
       

        <S.ExitButton style ={{margin: "24px"}} src={exit} alt="exit" onClick={handleClose} />

        
      </S.SmallContainer>
    );
  };
  
  export default SelfEvaluation;