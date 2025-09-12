import React from 'react';
import styled from 'styled-components';

// Modern footer container with glass morphism
const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
  position: relative;
  z-index: 10;
`;

// Container for content
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Footer content wrapper
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

// API credit with icon
const ApiCredit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  
  i {
    color: var(--accent-color);
    font-size: 1rem;
  }
`;

// Copyright text with elegant styling
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin: 0;
  letter-spacing: 0.025em;
`;

// Powered by text with subtle animation
const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  
  .api-link {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    
    &:hover {
      color: var(--white);
      text-shadow: 0 0 10px rgba(240, 147, 251, 0.5);
    }
  }
`;

// Decorative dots
const DecorativeDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
  
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: twinkle 3s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
  
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;

// Modern footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <ApiCredit>
            <i className="fas fa-chart-line"></i>
            <span>Powered by ExchangeRate-API</span>
          </ApiCredit>
          
          <DecorativeDots>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </DecorativeDots>
          
          <PoweredBy>
            Real-time data from{' '}
            <a 
              href="https://exchangerate-api.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="api-link"
            >
              ExchangeRate-API
            </a>
          </PoweredBy>
          
          <Copyright>
            &copy; {currentYear} Currency Converter. Built with ❤️ for seamless currency conversion.
          </Copyright>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
