import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation,useParams } from "react-router-dom";
import * as S from "./style";
import * as A from "../../../pages/Style/AssignmentStyle";
import instance from "../../../assets/api/axios";
import { deleteMaterial } from "../../../assets/api/apis/note/ApiMaterial";

import FileEarmarkZip from "../../../assets/FileEarmarkZip.svg";
import AssignInfo from "../Notice/AssignInfo";
import NoticeInfo from "../Notice/NoticeInfo";
import buttonstyle from "src/assets/icon/Group/buttonstyle.svg";

import RoleContext from "../../../RoleContext";

function NoteDetailContent(materialId ) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [teacher, setTeacher] = useState("");
  const [creDate, setCreDate] = useState("");
  const [group, setGroup] = useState("");
  // const [noticeId, setNoticeId] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  console.log("sd", materialId);

  const { groupId} = useParams();
  console.log("groupid", groupId);


  const { role } = useContext(RoleContext);

  useEffect(() => {
    const getmaterial = async () => {
      try {
        const res = await instance.get(
          `/api/material/detail?materialId=${materialId.materialId}`
        );

        if (res.status === 200) {
          console.log("머지", res.data.result);
          setGroup(res.data.result.groupId);
          setTitle(res.data.result.title);
          setContent(res.data.result.content);
          setFiles(res.data.result.files);
          setTeacher(res.data.result.teacher);
          setCreDate(res.data.result.createdDate);
        } else {
          console.log("테스트 실패");
        }
      } catch (error) {
        console.error("테스트 에러", error);
      }
    };
    getmaterial();
  }, [materialId]);

  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const info = location.state;
  console.log("ND의 info in materialId:", info);

  const navigate = useNavigate();
  function toReWrite() {
    console.log("마마", teacher);
    navigate(`/GroupDetailClass/${groupId}/MakeAssignment`, {
      state: {
        materialId: materialId.materialId,
        info: info,
        creDate: creDate,
        teacher: teacher,
        intent: "material",
      },
    });
  }

  
  // 파일 다운로드 함수
  const downloadFile = async (fileId, originalFileName) => {
    try {
      const response = await instance.get(`/api/file/${fileId}`, {
        responseType: "blob", // 서버로부터 받은 데이터를 Blob으로 처리
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", originalFileName); // 다운로드 파일명 설정
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // 다운로드 후 링크 요소 제거
      console.log("파일 다운로드 성공:", response);
    } catch (error) {
      console.error("파일 다운로드 중 오류 발생:", error);
      alert("파일을 다운로드하는 중 문제가 발생했습니다.");
    }
  };

  const renderFileList = () => (
    <S.FileList>
      {files.map((file, index) => (
        <>
        <S.FileItem key={index} onClick={() => downloadFile(file.id, file.originalFileName)}>
          <S.FileIcon src={FileEarmarkZip} alt="file icon" />
          <S.FileName>{file.originalFileName}</S.FileName>
          <S.FileSize>({(file.size / 1024).toFixed(2)} KB)</S.FileSize>
          <S.Img 
                src={buttonstyle}
                alt="buttonstyle"
                //onClick={() => toggleDropdown(file.id)}
              />
        </S.FileItem>
        </>
      ))}
    </S.FileList>
  );

   // 드롭다운 토글 함수
   const toggleDropdown = (materialId) => {
    setActiveDropdown((prev) => (prev === materialId ? null : materialId));
  };


  return (
    <S.RowDiv>
      <S.AssigmentCreateForm>
        <S.Title>[학습자료] {title}</S.Title>
        <S.Line />
        <S.ContentBox>
          <S.Content>{content}</S.Content>
        </S.ContentBox>
        <S.Line />
        <S.Content>첨부파일</S.Content>
        <S.FileContainer>{renderFileList()}</S.FileContainer>
        {role === "TEACHER" ? (
          <>
            <S.GrayButton
              onClick={() => {
                deleteMaterial(groupId, materialId.materialId, () => navigate(-1));
              }}
            >
              삭제
            </S.GrayButton>
            <S.Button onClick={toReWrite}>수정하기</S.Button>
          </>
        ) : (
          <></>
        )}
       
      </S.AssigmentCreateForm>

      <A.AssignmentSettingForm>
        <A.CreateTitle>
          {/* {selectedButton === "과제"
              ? "과제 설정"
              : selectedButton === "공지"
              ? "공지 설정"
              : "강의자료 설정"} */}
          학습자료 설정
        </A.CreateTitle>
        {/* {selectedButton === "과제" ? (
            <AssignInfo />
          ) : (
            <NoticeInfo matchedGroup={matchedGroup} />
          )} */}
         <NoticeInfo
          materialId={materialId}
          teacher={teacher}
          info={info}
          creDate={creDate}
        /> 
      </A.AssignmentSettingForm>
    </S.RowDiv>
    
  );
}

export default NoteDetailContent;
