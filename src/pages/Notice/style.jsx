import styled from "styled-components";
import chevron_left from "../../assets/chevron_left.svg";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;

  width: 180px;
  background-color: red;
`;

export const Img = styled.img.attrs({
  src: chevron_left,
})``;

export const BoldText = styled.p`
  font-weight: bold;
  size: 20px;
`;

export const TopBar = styled.div`
  /* width: 1120px; */
  width: 1120px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 363px;
  background-color: yellow;
`;

// 드롭다운 메뉴를 위한 스타일 컴포넌트
export const DropdownContainer = styled.div`
  position: relative;

  /* width: 400px; */
`;

export const DropdownButton = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 14px;
  cursor: pointer;
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

export const Input = styled.input``;

export const SearchButton = styled.button``;

export const ItemsContainer = styled.div`
  width: 1120px;
  height: 300px;
  background-color: black;
`;
