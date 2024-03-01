import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 1194px;
  height: 154px;
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

// NoticeDetailContent style
export const AssigmentCreateForm = styled.div`
  width: 684px;
  max-height: 800px;
  background-color: white;
  dislay: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  margin-right: 30px;
`;

export const Line = styled.hr`
  background: #ededff;
  height: 2px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ContentBox = styled.div`
min-height: 100px;
height; auto; `;

export const FileList = styled.div`
  margin-left: -330px;
`;

export const FileItem = styled.div`
  width: 590px;
  height: 40px;
  background: #f5f5fc;
  border: 1px solid #e6e8ee;
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-left: 330px;
`;

export const FileName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--Cool-Grayscale-Placeholder, #9ea4aa);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FileSize = styled.span`
  color: var(--Cool-Grayscale-Placeholder, #9ea4aa);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 파일 아이콘을 표시하기 위한 스타일 컴포넌트
export const FileIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const FileContainer = styled.div`
  display: flex;
  height: 110px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #e6e8ee;
  border-radius: 8px;
  padding: 10px;
  width: 620px;

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

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  position: relative;
  left: 434px;
  bottom: -300px;
  background-color: #4849ff;
  color: white;
`;

export const GrayButton = styled(Button)`
  background-color: #e6e8ee;
  color: #9ea4aa;
  margin-right: 20px;
`;
