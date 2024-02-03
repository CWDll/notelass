import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 1194px;
  height: 179px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  dislay: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 6px;
`;

export const Content = styled.p`
  font-weight: 600;
  font-size: 16;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 10px;
`;

export const SmallText = styled(Content)`
  color: #9ea4aa;
`;
