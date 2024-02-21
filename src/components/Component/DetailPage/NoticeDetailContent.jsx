import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import * as A from "../../../pages/Style/AssignmentStyle";
import instance from "../../../assets/api/axios";
import FileEarmarkZip from "../../../assets/FileEarmarkZip.svg";
import AssignInfo from "../Notice/AssignInfo";
import NoticeInfo from "../Notice/NoticeInfo";

function NoticeDetailContent(noticeId) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  console.log("sd", noticeId);

  useEffect(() => {
    const getStudentList = async () => {
      try {
        const res = await instance.get(
          `/api/notice/detail?noticeId=${noticeId.noticeId}`
        );

        if (res.status === 200) {
          console.log("hi");
          console.log("머지", res.data.result);
          const resultData = res.data.result;
          setTitle(resultData.title);
          setContent(resultData.content);
          setFiles(resultData.files);
        } else {
          console.log("테스트 실패");
        }
      } catch (error) {
        console.error("테스트 에러", error);
      }
    };
    getStudentList();
  }, [noticeId]);

  const renderFileList = () => (
    <S.FileList>
      {files.map((file, index) => (
        <S.FileItem key={index}>
          <S.FileIcon src={FileEarmarkZip} alt="file icon" />
          <S.FileName>{file.originalFileName}</S.FileName>
          <S.FileSize>({(file.size / 1024).toFixed(2)} KB)</S.FileSize>
        </S.FileItem>
      ))}
    </S.FileList>
  );

  return (
    <S.RowDiv>
      <S.AssigmentCreateForm>
        <S.Title>[공지] {title}</S.Title>
        <S.Line />
        <S.ContentBox>
          <S.Content>{content}</S.Content>
        </S.ContentBox>
        <S.Line />
        <S.Content>첨부파일</S.Content>
        <S.FileContainer>{renderFileList()}</S.FileContainer>
        <S.Button>수정하기</S.Button>
      </S.AssigmentCreateForm>

      <A.AssignmentSettingForm>
        <A.CreateTitle>
          {/* {selectedButton === "과제"
              ? "과제 설정"
              : selectedButton === "공지"
              ? "공지 설정"
              : "강의자료 설정"} */}
          공지 설정
        </A.CreateTitle>
        {/* {selectedButton === "과제" ? (
            <AssignInfo />
          ) : (
            <NoticeInfo matchedGroup={matchedGroup} />
          )} */}
        <NoticeInfo noticeId={noticeId} />
      </A.AssignmentSettingForm>
    </S.RowDiv>
  );
}

export default NoticeDetailContent;
