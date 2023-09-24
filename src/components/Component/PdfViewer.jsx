import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import printer from "../../assets/printer.svg";
import searching from "../../assets/searching.svg";

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
  font-color: black;
`;

const PdfBar = styled.div`
  width: 1920px;
  height: 64px;
  flex-shrink: 0;
  background: var(--cool-grayscale-off-white, #FCFCFC);
  display: flex;
`;

const PrintButton = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin-left: 32px;
  margin-top: 8px;
`;

async function extractTextFromPDF(pdfFile) {
  if (!pdfFile) {
    console.error("PDF 파일이 없습니다.");
    return [];
  }
  
  // File 객체를 ArrayBuffer로 변환
  const fileReader = new FileReader();
  const readFileAsArrayBuffer = new Promise((resolve, reject) => {
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsArrayBuffer(pdfFile);
  });
  
  let arrayBuffer;
  
  try {
    arrayBuffer = await readFileAsArrayBuffer;
    
    const pdfData = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;

   const numPages = pdfData.numPages;
   const textContent = [];

   for (let i = 1; i <= numPages; i++) {
      const page = await pdfData.getPage(i);
      const pageText = await page.getTextContent();
      const pageString = pageText.items.map((item) => item.str).join(" ");

      console.log(`Page ${i}:`, pageString);

      textContent.push({ text: pageString, page: i });
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
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  async function handleSearch() {
    if (!file) return;
  
    const textContent = await extractTextFromPDF(file);
    console.log(textContent);
  
    const results = textContent.filter((content) =>
      content.text.includes(searchTerm)
    );
  
    if (results.length > 0) {
      const firstResult = results[0]; 
      setPageNumber(firstResult.page);
      setSearchResults(results.map((result) => result.page));
    } else {
      console.log("검색 결과가 없습니다.");
      console.log(`검색어: ${searchTerm}`);
      console.log(`PDF 내용:`, textContent);
  
      setPageNumber(1);
      setSearchResults([]);
    }
  }

  async function handlePrint() {
    if (!file) return;

    const printWindow = window.open();
    const objectUrl = URL.createObjectURL(file);

    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<embed width="100%" height="100%" src="' + objectUrl + '" type="application/pdf" />');
    printWindow.document.write('</body></html>');

    printWindow.onload = () => {
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);

      URL.revokeObjectURL(objectUrl);
    };
  }

  return (
    <>
      <PdfContainer>
        <PdfBar>
          <input type="file" accept=".pdf" onChange={handleFileUpload} />
          <input
            type="text"
            placeholder="검색어 입력"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img src={searching} alt="searching" />
          </button>
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

          <PrintButton>
            <img src={printer} alt="printer" onClick={handlePrint} />
          </PrintButton>
        </PdfBar>
        <PdfBody>
          {file && (
            <Document
              file={file}
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
