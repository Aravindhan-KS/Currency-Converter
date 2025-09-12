import React from 'react';
import styled from 'styled-components';

// Enhanced footer container with sophisticated glass morphism
const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem 0 2rem 0;
  position: relative;
  z-index: 10;
  margin-top: auto;
  
  /* Subtle gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    z-index: -1;
  }
`;

// Container for content with better spacing
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Main footer content wrapper
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

// Top section with main branding
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Enhanced API credit with better styling
const ApiCredit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  
  i {
    color: var(--accent-color);
    font-size: 1.125rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

// Links section
const LinksSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

// Individual footer link
const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  transition: all var(--transition);
  
  &:hover {
    color: var(--white);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

// Enhanced decorative separator
const DecorativeSeparator = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  position: relative;
  
  &::after {
    content: '⦿';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.1);
    color: var(--accent-color);
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-full);
  }
`;

// Bottom section with copyright and additional info
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

// Enhanced powered by section
const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
  
  .api-link {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
    
    &:hover {
      color: var(--white);
      background: rgba(240, 147, 251, 0.2);
      text-shadow: 0 0 10px rgba(240, 147, 251, 0.5);
      transform: scale(1.05);
    }
  }
`;

// Enhanced copyright text
const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  letter-spacing: 0.025em;
  
  .year {
    color: var(--accent-color);
    font-weight: 600;
  }
  
  .tagline {
    font-style: italic;
    opacity: 0.8;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

// Social links section (optional)
const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: var(--radius-full);
  transition: all var(--transition);
  
  &:hover {
    color: var(--white);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px) scale(1.1);
  }
`;

// Professional footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <TopSection>
            <ApiCredit>
              <i className="fas fa-rocket"></i>
              <span>Powered by Real-Time Exchange Data</span>
            </ApiCredit>
            

          </TopSection>
          
          <DecorativeSeparator />
          
          <BottomSection>
            <PoweredBy>
              <i className="fas fa-chart-line"></i>
              <span>Exchange rates provided by</span>
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
              <div>
                &copy; <span className="year">{currentYear}</span> ExchangeHub - Professional Currency Converter
              </div>
            </Copyright>
          </BottomSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
