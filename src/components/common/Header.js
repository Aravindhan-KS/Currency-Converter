import React from 'react';
import styled from 'styled-components';

// Styled header container
const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  margin-bottom: 40px;
`;

// Container for content
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo styling
const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Currency Converter</Logo>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
