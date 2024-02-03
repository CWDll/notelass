import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 1194px;
  height: 117px;
  border-radius: 8px;
  background-color: gray;

  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  dislay: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.p`
  font-weight: bold;
  size: 20px;
`;

export const Content = styled.p`
  font-weight: 600;
  size: 16;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Views = styled.div`
  width: 74px;
  height: 33px;
  border-radius: 10px;
  color: #4849ff;
  background-color: #ededff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallText = styled(Content)`
  color: #9ea4aa;
`;
