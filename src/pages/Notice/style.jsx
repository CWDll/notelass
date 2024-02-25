import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";
import chevron_down from "../../assets/chevron_down.svg";
import searchIcon from "../../assets/icon/search.svg";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;

  width: 1194px;
  margin: 60px 0px;
`;

export const Img = styled.img.attrs({
  src: chevron_left,
})`
  margin-right: 10px;
`;

export const DownIcon = styled.img.attrs({
  src: chevron_down,
})`
  width: 15px;
  height: 15px;
  margin-left: auto;
  margin-right: 4px;
`;

export const BoldText = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ColoredBoldText = styled(BoldText)`
  color: #4849ff;
  margin-left: 8px;
`;

export const TopBar = styled.div`
  /* width: 1120px; */
  width: 1194px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  /* background-color: blue; */
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 400px;
  /* background-color: yellow; */
`;

// 드롭다운 메뉴를 위한 스타일 컴포넌트
export const DropdownContainer = styled.div`
  position: relative;
  /* padding-right: 10px; */
`;

export const DropdownButton = styled.div`
  width: 104px;
  height: 34px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 14px;
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 14px;
  &:hover {
    background-color: #ddd;
  }
`;

export const Input = styled.input.attrs({
  placeholder: "검색어를 입력해주세요.",
})`
  width: 262px;
  height: 36px;
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
`;

export const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%; // 동그란 모양을 만듭니다
  border: none; // 기본 테두리 제거
  background-image: url(${searchIcon}); // SVG 아이콘을 배경 이미지로 설정
  background-color: transparent; // 배경색을 투명하게 설정
  background-repeat: no-repeat; // 배경 이미지 반복 없앰
  background-position: center;
  margin-left: 10px;
`;

export const ItemsContainer = styled.div`
  /* width: 1194px; */
  height: 80vh;
  background-color: #f5f5fc;
  overflow-y: scroll;

  /* 스크롤바 전체 스타일 */
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤 바의 너비 */
  }

  /* 스크롤바 핸들 스타일 */
  &::-webkit-scrollbar-thumb {
    background: gray; /* 스크롤 바 핸들의 색상 */
    border-radius: 5px; /* 스크롤 바 핸들의 둥근 모서리 */
  }

  /* 스크롤바 핸들 호버시 스타일 */
  &::-webkit-scrollbar-thumb:hover {
    background: darkgray; /* 호버 시 스크롤 바 핸들의 색상 */
  }

  /* 스크롤바 트랙(경로) 스타일 */
  &::-webkit-scrollbar-track {
    background: lightgray; /* 스크롤 바 트랙의 색상 */
    border-radius: 5px; /* 스크롤 바 트랙의 둥근 모서리 */
    box-shadow: inset 0 0 5px grey; /* 트랙 내부에 그림자 효과 */
  }
`;
