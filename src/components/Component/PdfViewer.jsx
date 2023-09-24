import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import printer from "../../assets/printer.svg";
import searching from "../../assets/searching.svg";
import plus from "../../assets/plus.svg";
import dash from "../../assets/dash.svg";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.svg";

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

const Button = styled.button`
  background: var(--cool-grayscale-off-white, #FCFCFC);
  outline: none;
  border: none;
  &:hover,
  &:focus {
    outline: none;
  }

`;

const PdfBar = styled.div`
  width: 1920px;
  height: 64px;
  flex-shrink: 0;
  background: var(--cool-grayscale-off-white, #FCFCFC);
  display: flex;
`;

const PageNum = styled.p`
  margin-top: 20px;
  margin-left: 20px;
`;
  
const PrintImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  //margin-left: 32px;
  //margin-right: 48px;
`;

const Line = styled.div`
  width: 1.5px;
  height: 40px;
  background: rgba(201, 205, 210, 0.50);
  margin-top: 12px;

`;

const FindWord = styled.input`
  width: 150px;
  height: 42px;
  margin-top: 12px;
  margin-left: 708px;
  margin-right: 1px;
  border-radius: 5px;
  padding: 10px; 
  
  &:focus {
    outline-color: lightgray; 
    outline-style: solid; 
    outline-width: thin; 
  }

`;


async function extractTextFromPDF(pdfFile) {
  if (!pdfFile) {
    console.error("PDF 파일이 없습니다.");
    return [];
  }
  
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
  const [currentResultIndex, setCurrentResultIndex] = useState(0);

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
      setCurrentResultIndex(0); 
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
          
          <>
          <Button
            onClick={() => {
              setPageScale(pageScale === 3 ? 3 : pageScale + 0.1);
            }}
          >
            {" "}
            <img src={plus} alt="plus" />
          </Button>

          <Button
            onClick={() => {
              setPageScale(pageScale - 1 < 1 ? 1 : pageScale - 1);
            }}
          >
            {" "}
            <img src={dash} alt="dash" />
          </Button>
        </>
        <Line />

        
          
          <Button
            onClick={() => {
              setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1);
            }}
          >
            {" "}
            <img src={Vector1} alt="Vector1" />
          </Button>
          <PageNum>
          {file && `${pageNumber} 의 ${numPages}`}
          </PageNum> 
          <Button
            onClick={() => {
              if (searchResults.length > 0) { 
                const nextIndex = (currentResultIndex + 1) % searchResults.length;
                setPageNumber(searchResults[nextIndex]);
                setCurrentResultIndex(nextIndex);
              } else { 
                setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1);
              }
            }}
          >
            {" "}
            <img src={Vector2} alt="Vector2" />
          </Button>
          <Line />



          <FindWord
            type="text"
            placeholder=" 검색어 입력"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <Button onClick={handleSearch}>
            <img src={searching} alt="searching" />
          </Button>

          <Button>
            <PrintImg src={printer} alt="printer" onClick={handlePrint} />
          </Button>
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
          {searchResults.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
      </PdfContainer>
    </>
  );
};

export default PdfView;
