import React from 'react';
import styled from 'styled-components';

// Modern header container with glass morphism effect
const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-lg);
`;

// Container for content
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Currency icon with animation
const CurrencyIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

// Modern logo styling with gradient text
const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, var(--white) 0%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.025em;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

// Subtitle with elegant styling
const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  margin: 0.5rem 0 0 0;
  letter-spacing: 0.025em;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

// Header content wrapper
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

// Header component with modern design
const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <CurrencyIcon>
          <i className="fas fa-coins"></i>
        </CurrencyIcon>
        <HeaderContent>
          <Logo>Currency Converter</Logo>
          <Subtitle>Real-time exchange rates at your fingertips</Subtitle>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
