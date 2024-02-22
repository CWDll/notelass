import React, { useState, useEffect,useContext   } from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import chevron_left from "src/assets/chevron_left.svg";
import person from "src/assets/person.svg";
import file from "src/assets/file.svg";
import envelope from "src/assets/envelope.svg";
import envelopeOpen from "src/assets/envelopeOpen.svg";
import fileDownload from "src/assets/fileDownload.svg";

// api
import instance from "src/assets/api/axios";


const Wrap = styled.div`
  margin-left: auto; /* 중앙 정렬을 위해 자동 마진 사용 */
  margin-right: auto;
`;

const Main = styled.div`
  margin-left: -363px;
`;

const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
  color: #26282b;
  font-size: 20px;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 72px;
`;

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
`;

const NoticeContainer = styled.div`
  width: 684px;
  height: 360px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 33px;
  position: relative;
  align-items: center;
`;

const GroupContainer = styled.div`
  width: 684px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
  margin-left: 363px;
  margin-top: 30px;
  position: relative;
`;

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

const SubjectContainer = styled.div`
  display: flex;
  width: 684px;
  height: 48px;
  flex-shrink: 0;
  /*background-color: yellow;*/
  flex-direction: column;
  margin-top: 24px;
`;

const StyledNoticeItem = styled.li`
  list-style: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ isClicked }) => (isClicked ? "#9EA4AA" : "inherit")};
`;

const NoticeContent = styled.div`
  display: flex;
`;

const NoticeImg = styled.img`
  margin-top: 13px;
  margin-left: 32px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

//디자인 위치 다시 수정해야함. 임시로 배치
const NoticeTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 10px;
  z-index: 1;
`;

const SudentNum = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 15px;
`;

const NoticeDate = styled.div`
  width: 132px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--primary-light-cobalt, #ededff);
  margin-left: 16px;
  margin-top: 14px;

  color: var(--primary-cobalt, #4849ff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const Button = styled.button`
  height: 54px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #4849ff;
  margin-left: 16px;
  margin-top: 57px;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FileDownload = styled.img`
  position: relative;
  top: 24px;
  left: 3px;
  width: 24px;
  cursor: pointer;
`;




const MaterialList = ({ paramsGroupId, paramsUserId,id }) => {
    const location = useLocation();
    const info = location.state;
    const [uploadStatus, setUploadStatus] = useState(""); // 업로드 상태를 저장할 상태
    const [clickedIndices, setClickedIndices] = useState(new Set());
    const [showSmallContainer, setShowSmallContainer] = useState(false);
    const [showSelfEvaluation, setShowSelfEvaluation] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    console.log("학습자료 반 정보: ", paramsGroupId, paramsUserId,id);

    
  
   
  
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
            <SubjectContainer>
              
            </SubjectContainer>
          </ManagementContainer>
           
        </div>
    );
};

export default MaterialList;
