import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import plus_lg from "../../assets/plus_lg.svg";
import paper from "../../assets/paper.svg";
import chevron_down from "../../assets/chevron_down.svg";
import star from "../../assets/star.svg";
import FilledStar from "../../assets/FilledStar.svg";
import instance from "src/assets/api/axios";
import * as S from "./Style/NoteDetailSubjectStyle";


function NoteDetailSubject() {
  const navigate = useNavigate();
  const [starredItems, setStarredItems] = useState({});
  //const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 표시 상태 추가
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [files, setFiles] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  // console.log("location: ", location);
  const info = location.state;
  // console.log("info:", info);

  // 노트별 즐겨 찾기 기능
  function handleStarClick(materialId) {
    setStarredItems((prev) => ({
      ...prev,
      [materialId]: !prev[materialId],
    }));
  }

  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", options)
      .format(date)
      .replace(" ", "")
      .replace(". ", ".")
      .replace(". ", ".");
  };
  // 노트 복제 함수
  function handleClone(materialId) {
    setMaterials((prev) => {
      const materialToClone = prev.find(
        (material) => material.id === materialId
      );
      if (!materialToClone) return prev;
      const clonedMaterial = { ...materialToClone, id: Date.now() }; // 새로운 id를 생성
      return [...prev, clonedMaterial];
    });
  }

  // 노트 삭제 함수
  function handleDelete(materialId) {
    setMaterials((prev) =>
      prev.filter((material) => material.id !== materialId)
    );
  }

  //뒤로가기
  function goBack() {
    navigate(-1);
  }

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
  const toggleDropdown = (materialId) => {
    setActiveDropdown((prev) => (prev === materialId ? null : materialId));
  };



// 강의자료(노트) 목록 GET API
useEffect(() => {
  const fetchNotes = async () => {
    try {
      const response = await instance.get(`/api/note`);
      if (response.data.code === 200) {
        setMaterials(response.data.result); // 상태 업데이트
        console.log("강의자료 목록 조회 결과:", response.data.result);
      } else {
        console.error("강의자료 목록을 불러오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("강의자료 목록 조회 중 오류 발생:", error);
    }
  };

  fetchNotes();
}, []);

  return (
    <S.Wrap>
      <S.Main>
        <S.Header >
          <S.Img onClick={goBack} src={chevron_left} alt="chevron_left" />
          <S.BoldTitle>노트</S.BoldTitle>
        </S.Header>
        <S.NoteContainer>
          <S.MakeNoteBody>
            <S.AddNote>
              <S.PlusImg src={plus_lg} alt="plus_lg" />
            </S.AddNote>
            <S.Title onClick={handleTitleClick}>신규 노트 만들기</S.Title>
          </S.MakeNoteBody>

          <S.SubjectBodyWrapper>
            {materials.map((material) => (
              <S.SubjectBody key={material.id}>
                <S.PaperImg src={paper} alt="paper" />
                <S.SubjectContainer>
                  <S.BoldText>
                    {material.title} 
                  </S.BoldText>
                  <S.ChevronDownImg
                  src={chevron_down}
                  alt="chevron_down"
                  onClick={() => toggleDropdown(material.id)}
                />
                <S.StarImg
                  onClick={() => handleStarClick(material.id)}
                  src={starredItems[material.id] ? FilledStar : star}
                  alt="star"
                />
                  {/* <S.GrayText>{formatDate(material.createdDate)}</S.GrayText> */}
                </S.SubjectContainer>

                
                {activeDropdown === material.id && (
                  <S.NavDropdownBox className="dropdown-menu">
                    <S.NavDropdownOptionUp className="dropdown-item">
                      다운로드
                    </S.NavDropdownOptionUp>
                    <hr />
                    <S.NavDropdownOptionDown
                      className="dropdown-item"
                      onClick={() => handleClone(material.id)}
                    >
                      복제하기
                    </S.NavDropdownOptionDown>
                    <hr />
                    <S.NavDropdownOptionDown
                      className="dropdown-item"
                      onClick={() => handleDelete(material.id)}
                    >
                      휴지통으로 이동
                    </S.NavDropdownOptionDown>
                  </S.NavDropdownBox>
                )}

                
              </S.SubjectBody>
            ))}
          </S.SubjectBodyWrapper>
        </S.NoteContainer>
      </S.Main>
    </S.Wrap>
  );
}

export default NoteDetailSubject;
