import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";

// pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfContainer = styled.div`
  width: 1910px;
  height: 1080px;
  overflow: scroll;
  color: black;
`;

const PdfBody = styled.div`
  width: 100%;
  background-color: green;
`;

const PageNavigateBtn = styled.button`
  color: white;
`;

// PDF 텍스트 추출 함수
async function extractTextFromPDF(pdfFile) {
  if (!pdfFile) {
    console.error("PDF 파일이 없습니다.");
    return [];
  }
  console.log("PDF파일은 존재한다.");

  try {
    const pdfData = await pdfjs.getDocument(pdfFile).promise;
    const numPages = pdfData.numPages;
    const textContent = [];

    for (let i = 1; i <= numPages; i++) {
      const page = await pdfData.getPage(i);
      const pageText = await page.getTextContent();
      const pageString = pageText.items.map((item) => item.str).join(" ");
      textContent.push(pageString);
    }

    return textContent;
  } catch (error) {
    console.error("PDF 파일을 처리하는 동안 오류가 발생했습니다.", error);
    return [];
  }
}

const PdfView = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);
  const [file, setFile] = useState(null); // 업로드한 파일을 저장하는 상태
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [searchResults, setSearchResults] = useState([]); // 검색 결과

  function onDocumentLoadSuccess({ numPages }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  // 파일 업로드 핸들러
  function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  // PDF 텍스트 검색 함수
  async function handleSearch() {
    if (!file) return; // 파일이 없으면 검색 불가
    console.log("작동확인");

    const textContent = await extractTextFromPDF(file);
    console.log(textContent);
    const results = textContent.filter((text) => text.includes(searchTerm));
    setSearchResults(results);
  }

  return (
    <>
      <PdfContainer>
        {/* 파일 업로드 input */}
        <input type="file" accept=".pdf" onChange={handleFileUpload} />
        <input
          type="text"
          placeholder="검색어 입력"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        <p>페이지 이동 버튼</p>
        <PageNavigateBtn
          onClick={() => {
            setPageNumber(
              numPages === pageNumber ? pageNumber : pageNumber + 1
            );
          }}
        >
          {" "}
          +
        </PageNavigateBtn>
        <PageNavigateBtn
          onClick={() => {
            setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
          }}
        >
          {" "}
          -
        </PageNavigateBtn>

        {/* pdf 크기가 1280 * 720이 넘는 경우, overflow 처리 */}
        <PdfBody>
          {file && (
            <Document
              file={file} // 선택한 파일을 사용
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                width={1280}
                height={720}
                scale={pageScale}
                pageNumber={pageNumber}
              />
            </Document>
          )}
        </PdfBody>
        <div>
          <p>
            Page {pageNumber} of {numPages}
          </p>

          <p>페이지 스케일</p>
          <button
            onClick={() => {
              setPageScale(pageScale === 3 ? 3 : pageScale + 0.1);
            }}
          >
            {" "}
            +
          </button>
          <button
            onClick={() => {
              setPageScale(pageScale - 1 < 1 ? 1 : pageScale - 1);
            }}
          >
            {" "}
            -
          </button>
        </div>

        {/* 검색 결과 표시 */}
        <div>
          <h2>검색 결과</h2>
          {searchResults.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
      </PdfContainer>
    </>
  );
};

export default PdfView;
