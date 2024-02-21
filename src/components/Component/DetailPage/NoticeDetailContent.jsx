import React, { useState } from "react";
import * as S from "./style";
import instance from "../../../assets/api/axios";

function NoticeDetailContent(noticeId) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  console.log(noticeId);
  // 그룹 내에 이미 속해있는 명단 가져오기
  const getStudentList = async () => {
    try {
      const res = await instance.get(
        `/api/notice/detail?noticeId=${noticeId.noticeId}`
      );

      if (res.status === 200) {
        console.log("hi");
        console.log(res.data.result);
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

  const renderFileList = () => (
    <S.FileList>
      {files.map((file, index) => (
        <S.FileItem key={index}>
          <S.FileIcon src={FileEarmarkZip} alt="file icon" />
          <S.FileName>{file.name}</S.FileName>
          <S.FileSize>({(file.size / 1024).toFixed(2)} KB)</S.FileSize>
        </S.FileItem>
      ))}
    </S.FileList>
  );

  return (
    <S.AssigmentCreateForm>
      <S.Title
        onClick={() => {
          getStudentList();
        }}
      >
        [공지] {title}
      </S.Title>
      <S.Line />
      <S.ContentBox>
        <S.Content>{content}</S.Content>
      </S.ContentBox>
      <S.Line />
      <S.Content>첨부파일</S.Content>
      <S.FileContainer>{renderFileList()}</S.FileContainer>
    </S.AssigmentCreateForm>
  );
}

export default NoticeDetailContent;
