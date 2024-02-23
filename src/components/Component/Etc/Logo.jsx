import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/logo.svg';


const Notelass = styled.h2`
  color: #4849ff;
  display: flex;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  use-select: none;
`;

const Header = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 0px 20px;
  gap: 10px; /* Add this line to create a gap between the components */
`;


const Imgbox = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--primary-cobalt, #4849ff);
  margin-left: 48px;
`;

const LogoImg = styled.img`
  margin-left: 5px;
  margin-top: 5px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;

const Logo = () => {


  
  const navigate = useNavigate();

  const navigateToIntroduce = () => {
    navigate("/introduce");
  };

  
    return (
        <Header onClick= {navigateToIntroduce}>
            <Imgbox>
        <LogoImg src={logo} alt="logo"  />
      </Imgbox>
      <Notelass> Note-lass</Notelass>
        </Header>
    );
};

export default Logo;
