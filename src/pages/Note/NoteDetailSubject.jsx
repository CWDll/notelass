import React, { useState ,useEffect,useRef} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import chevron_left from "../../assets/chevron_left.svg";
import plus_lg from "../../assets/plus_lg.svg";
import paper from "../../assets/paper.svg";
import chevron_down from "../../assets/chevron_down.svg";
import star from "../../assets/star.svg";
import FilledStar from "../../assets/FilledStar.svg";
import * as S from 'src/components/Component/Note/Style/NoteDetailSubjectStyle';

//노트 목록
const starItems = [
  { key: "item1", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
  { key: "item2", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
  { key: "item3", title: "문학퀴즈", date: "2023.04.27 오후 9:00" },
];

function NoteDetailSubject() {
  const navigate = useNavigate();
  const [starredItems, setStarredItems] = useState({});
  //const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 표시 상태 추가
  const [dropdownVisible, setDropdownVisible] = useState({});

  //노트별 즐겨 찾기 기능
  function handleStarClick(itemKey) {
    setStarredItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  }



  function handleTitleClick() {
    // Title 클릭 시 PDF 뷰어 페이지로 이동
    navigate("/NoteDetailSubject/pdf-viewer"); // 이동할 경로를 설정합니다.
  }

 // 외부 클릭 감지 함수
 const handleClickOutside = (event, itemKey) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setDropdownVisible((prev) => ({
      ...prev,
      [itemKey]: false,
    }));
  }
};


useEffect(() => {
  // 외부 클릭 이벤트 리스너 추가
  document.addEventListener("mousedown", handleClickOutside);

  // 클린업 함수에서 리스너 제거
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  
  // 드롭다운 토글 함수
  const toggleDropdown = (itemKey) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  return (
    <div>
      <S.Header>
        <S.Img src={chevron_left} alt="chevron_left" />
        <S.BoldTitle>과제별 성적 열람</S.BoldTitle>
      </S.Header>
      <S.NoteContainer>
        <S.MakeNoteBody>
          <S.AddNote>
            <S.PlusImg src={plus_lg} alt="plus_lg" />
          </S.AddNote>
          <S.Title onClick={handleTitleClick}>신규 노트 만들기</S.Title>
        </S.MakeNoteBody>

        
        <S.SubjectBodyWrapper>
          {starItems.map((item) => (
            <S.SubjectBody key={item.key}>
              <S.PaperImg src={paper} alt="paper" />
              <S.SubjectContainer>
                <S.BoldText>{item.title}</S.BoldText>
                <S.GrayText>{item.date}</S.GrayText>
              </S.SubjectContainer>
              
              <S.ChevronDownImg src={chevron_down} alt="chevron_down" onClick={() => toggleDropdown(item.key)}  />
              {dropdownVisible[item.key] && ( 
            <S.NavDropdownBox   className="dropdown-menu">
              <S.NavDropdownOptionUp
                className="dropdown-item"
              >
                다운로드
              </S.NavDropdownOptionUp>
              <hr />
              <S.NavDropdownOptionDown
                className="dropdown-item"
              >
                복제하기
              </S.NavDropdownOptionDown>
              <hr />
              <S.NavDropdownOptionDown
                className="dropdown-item"
              >
                휴지통으로 이동
              </S.NavDropdownOptionDown>
            </S.NavDropdownBox>
          )}
        




              <StarImg
                onClick={() => handleStarClick(item.key)}
                src={starredItems[item.key] ? FilledStar : star}
                alt="star"
              />
            </S.SubjectBody>
          ))}
        </S.SubjectBodyWrapper>


      </S.NoteContainer>
    </div>
  );
}

export default NoteDetailSubject;
