import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

// Modern header container with enhanced glass morphism effect
const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--white);
  padding: 1.25rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all var(--transition);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Container for content with better spacing
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Left section with logo and icon
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Currency icon with enhanced animation
const CurrencyIcon = styled.div`
  font-size: 2.25rem;
  color: var(--accent-color);
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
  transition: all var(--transition);
  
  &:hover {
    transform: scale(1.1) rotate(10deg);
    color: var(--white);
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Modern logo styling with enhanced gradient
const Logo = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, var(--white) 0%, var(--accent-color) 50%, var(--white) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  cursor: pointer;
  transition: all var(--transition);
  
  &:hover {
    transform: scale(1.02);
    letter-spacing: 0.01em;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Right section for controls
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Dark mode toggle button
const DarkModeToggle = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: var(--white);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.125rem;
  transition: all var(--transition);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

// Status indicator for real-time data
const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(16, 185, 129, 0.2);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(16, 185, 129, 0.3);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

// Subtitle with better responsiveness
const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 0.25rem;
  letter-spacing: 0.025em;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Header content wrapper
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Header component with enhanced features
const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Container>
        <LeftSection>
          <CurrencyIcon title="Currency Exchange">
            <i className="fas fa-coins"></i>
          </CurrencyIcon>
          <HeaderContent>
            <Logo>ExchangeHub</Logo>
            <Subtitle>Professional Currency Converter</Subtitle>
          </HeaderContent>
        </LeftSection>
        
        <RightSection>
          <StatusIndicator>
            <StatusDot />
            Live Rates
          </StatusIndicator>
        </RightSection>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
