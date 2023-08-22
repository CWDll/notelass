import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import chevron_left from "../../assets/chevron_left.svg";
import file from "../../assets/file.svg";
import person from "../../assets/person.svg";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";


const Header = styled.header`
  display: flex;
`;

const Img = styled.img`
  margin-left: 363px;
  margin-top: 72px;
`;

const BoldTitle = styled.p`
 
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 24px;
    margin-top: 72px;
`;

const MainContainer = styled.div`
    margin-top: 48px;
    margin-left: 363px;
    width: 1194px;
    height: 800px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(38, 40, 43, 0.05);
`;

const Title = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 32px;
    margin-left: 32px;
`;



const NoticeContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    margin-left: 32px;
`;

const NoticeImg = styled.img`
    width: 24px;
    height: 24px;
`;

const NoticeTitle = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 16px;
    cursor: pointer;
`;

const Score = styled.p`

  margin-left: 24px;

  /*점수 글씨*/
  color: var(--primary-cobalt, #4849FF);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const XlsxButton = styled.button`
    display: flex;
    height: 40px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--primary-cobalt, #4849FF);
    margin-left: 1068px;
    margin-top: -24px;


    /*엑셀 출력 글씨*/
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const SudentNum = styled.p`
    color: var(--cool-grayscale-title, #26282B);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 16px;
`;


function GroupScoreDetail(){

    const navigate = useNavigate();
    const BackButton = () => {
        navigate("/GroupDetailClass");
    };

   

    const studentScores = [
        {
          title: "과제 1",
          assignments: [
            { SudentNum: "1", noticeTitle: "김민수", score: "10점" },
            { SudentNum: "2", noticeTitle: "김민수", score: "10점" },
            { SudentNum: "3", noticeTitle: "김민수", score: "10점" },
            { SudentNum: "4", noticeTitle: "김민수", score: "10점" },
          ],
        },
      ];

        const exportToCSV = () => {
            const csvData = studentScores.flatMap((student) => {
              return student.assignments.map((assignment) => ({
                과제목록: student.title,
                출석번호: assignment.SudentNum,
                이름: assignment.noticeTitle,
                점수: assignment.score,
              }));
            });

    
        const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        const fileExtension = ".xlsx";
        const fileName = "반별 학생 성적";
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);

    

      };


    return(
        <div>
        <Header>
                <Img src={chevron_left} alt="chevron_left" onClick={BackButton} />
                <BoldTitle>학생별 성적 열람</BoldTitle>
        </Header>
        <MainContainer>
            {studentScores.map((student, idx) => (
            <>
                <Title key={`student-${idx}`}>{student.title}</Title>
                
                <XlsxButton onClick={exportToCSV}>엑셀 출력</XlsxButton>
                {student.assignments.map((assignment, idx) => (
                <NoticeContent key={`assignment-${idx}`}>
                    <NoticeImg src={person} alt="person" />
                    <SudentNum>{assignment.SudentNum}</SudentNum>
                    <NoticeTitle > {assignment.noticeTitle}</NoticeTitle>
                    <Score>{assignment.score}</Score>

                </NoticeContent>


                ))}
            </>
            ))}
        </MainContainer>
        </div>  

    );
}

export default GroupScoreDetail;