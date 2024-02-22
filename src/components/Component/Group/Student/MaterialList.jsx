import React, { useState, useEffect,useContext   } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import plus_lg from "src/assets/plus_lg.svg";
import paper from "src/assets/paper.svg";
import chevron_down from "src/assets/chevron_down.svg";
import buttonstyle from "src/assets/icon/Group/buttonstyle.svg";

// api
import instance from "src/assets/api/axios";
import { saveAs } from 'file-saver';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';



const ManagementContainer = styled.div`
  width: 480px;
  height: 756px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 30px;
  margin-top: 33px;
  position: relative;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Title = styled.p`
  color: var(--cool-grayscale-title, #26282b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 32px;
  padding-left: 32px;
`;

const DetailText = styled.button`
display:flex;
align-items: center;
height: 21px;
margin-top: -24px;

margin-left:579px;
border-radius: 16px
gap: 8px;
z-index: 1;
background: #F5F5FC;
padding:  6px, 8px;
text-align: center;

font-family: Pretendard;
font-size: 12px;
font-weight: 600;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #9EA4AA;


`;

const ShowAllText = styled(DetailText)`
  top: 35px;
  margin-right: 105px;
  margin-left: auto;
`;

const MainContainer = styled.div`
  display: flex;
  width: 684px;
  height: 48px;
  flex-shrink: 0;
  /*background-color: yellow;*/
  flex-direction: column;
  margin-top: 24px;
`;


const SubjectBody = styled.div`
  display: flex;
  width: 1194px;
  height: 72px;
  margin-top: 16px;
`;

const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 16px;
`;

const SubjectBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;


const NavDropdownBox = styled.div`
  width: 150px;
  background-color: white;

  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 285px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.1);
`;

const NavDropdownOptionUp = styled.div`
  &:hover {
    background-color: #f5f5fc;
  }
  width: 100%;
  border-radius: 10px 10px 0 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const NavDropdownOptionDown = styled(NavDropdownOptionUp)`
  border-radius: 0 0 10px 10px;
`;


const PaperImg = styled.img`
  width: 48px;
  height: 64px;
  margin-left: 32px;
  margin-top: 4px;
`;

const ChevronDownImg = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 440px;
  align-self: center;
  position: absolute;
`;

const BoldText = styled.p`
  color: #26282b;
  font-size: 16px;
  font-weight: 600;
`;

const GrayText = styled.p`
  color: #9ea4aa;
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
`;




const MaterialList = ({ paramsGroupId, paramsUserId,id }) => {
    const location = useLocation();
    const info = location.state;
    const [uploadStatus, setUploadStatus] = useState(""); // 업로드 상태를 저장할 상태
    const [clickedIndices, setClickedIndices] = useState(new Set());
    const [showSmallContainer, setShowSmallContainer] = useState(false);
    const [showSelfEvaluation, setShowSelfEvaluation] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [materials, setMaterials] = useState([]); // 강의자료 목록을 저장할 상태
    const [dropdownVisible, setDropdownVisible] = useState({});
    const dropdownRef = React.useRef(null);

    console.log("학습자료 반 정보: ", paramsGroupId, paramsUserId,id);

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
    setDropdownVisible((prev) => ({
      ...prev,
      [materialId]: !prev[materialId],
    }));
  };

  //강의자료(노트) 목록 GET API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await instance.get(`/api/material/${id}`);
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

    fetchMaterials();
  }, [id]);

  // 노트탭에 불러오기 함수 추가
async function handleLoadToNoteTab(materialId) {
    try {
        const response = await instance.post(`/api/material?fileId=${materialId}`);
        if (response.data.code === 201) {
            alert('노트 탭에 성공적으로 업로드했습니다.');
            console.log('노트 탭에 업로드 성공 ', response.data.message);
            setDropdownVisible((prev) => ({
                ...prev,
                [materialId]: false,
              }));
        } else {
            alert('노트 탭에 업로드에 실패했습니다.');
        }
    } catch (error) {
        console.error(error);
        alert('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
}
    


   
  
    const navigate = useNavigate();
    const toWritePage = () => {
      navigate(`/GroupDetailClass/${id}/MakeAssignment`);
    };
    const toAllPage = () => {
      navigate(`/NoticeDetailList/${id}`);
    };
  
    const GroupDetailWrite = (
      paramsGruopId,
      paramsUserId,
      school,
      grade,
      classNum,
      subject
    ) => {
      navigate(`/GroupDetailWrite/${paramsGruopId}/${paramsUserId}`, {
        state: { school, grade, classNum, subject },
      });
    };
  
    const BackButton = () => {
      navigate("/GroupDetail");
    };
    const StudentScoreDetail = () => {
      navigate("/StudentScoreDetail");
    };
    const TaskClick = () => {
      navigate("/GroupScoreDetail");
    };
    


    return (
        <div>
            <ManagementContainer>
            <Title>학습 자료</Title>
            <MainContainer>
            {materials.map((material) => (
              <SubjectBody key={material.id} >
                
                <PaperImg src={paper} alt="paper" />
                <SubjectContainer onClick={handleTitleClick}>
                  <BoldText>
                    {material.files
                      .map((file) => file.originalFileName)
                      .join(", ")}
                  </BoldText>
                  <GrayText>{formatDate(material.createdDate)}</GrayText>
                </SubjectContainer>

                <ChevronDownImg
                  src={buttonstyle}
                  alt="buttonstyle"
                  onClick={() => toggleDropdown(material.id)}
                />
                {dropdownVisible[material.id] && (
                  <NavDropdownBox className="dropdown-menu">
                    <NavDropdownOptionUp className="dropdown-item" >
                    PDF로 내보내기
                    </NavDropdownOptionUp>
                    <hr />
                    <NavDropdownOptionDown
                      className="dropdown-item"
                      onClick={() => handleLoadToNoteTab(material.id)}
                    >
                      노트탭에 불러오기
                    </NavDropdownOptionDown>
                    {/* <hr />
                    <NavDropdownOptionDown
                      className="dropdown-item"
                      onClick={() => handleDelete(material.id)}
                    >
                      자료 보기
                    </NavDropdownOptionDown> */}
                  </NavDropdownBox>
                )}

              </SubjectBody>
            ))}
            </MainContainer>
          </ManagementContainer>
           
        </div>
    );
};

export default MaterialList;
