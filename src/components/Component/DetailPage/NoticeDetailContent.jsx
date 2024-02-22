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
  const [teacher, setTeacher] = useState("");
  const [creDate, setCreDate] = useState("");
  console.log("sd", noticeId);

  useEffect(() => {
    const getStudentList = async () => {
      try {
        const res = await instance.get(
          `/api/notice/detail?noticeId=${noticeId.noticeId}`
        );

        if (res.status === 200) {
          console.log("머지", res.data.result);

          // setResultData(res.data.result);
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
    getStudentList();
  }, [noticeId]);

  const location = useLocation();
  // 학교, 학년, 반, 과목 들어있는 데이터
  const info = location.state;
  console.log("ND의 info in NDC:", info);

  function callConsole() {
    alert("작동");
    console.log("타이틀", title);
    console.log("콘텐트", content);
    console.log("파일들", files);
    console.log(teacher);
  }

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
        <S.Button onClick={callConsole}>수정하기</S.Button>
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
        <NoticeInfo
          noticeId={noticeId}
          teacher={teacher}
          info={info}
          creDate={creDate}
        />
      </A.AssignmentSettingForm>
    </S.RowDiv>
  );
}

export default NoticeDetailContent;
