import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  background-color: white;
  font-size: 16px;
  font-weight: 600;
  width: 684px;
  height: 48px;
  flex-shrink: 0;
`;

const List = ({content}) => {
    return (
      <StyledList>
        {content}
      </StyledList>
    );
  };




export default List;




