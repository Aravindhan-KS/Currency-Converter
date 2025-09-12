import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CurrencyProvider } from './context/CurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CurrencyConverter from './components/converter/CurrencyConverter';
import GlobalStyles from './styles/GlobalStyles';
import StyledComponentsProvider from './components/StyledComponentsProvider';

// Enhanced main app container
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  
  /* Smooth theme transitions */
  transition: all var(--transition-slow);
`;

// Enhanced background with multiple layers
const BackgroundDecoration = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: var(--primary-gradient);
  
  /* Primary animated background layer */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E");
    animation: float 25s ease-in-out infinite;
  }
  
  /* Secondary decorative layer */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(240, 147, 251, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    animation: pulse 15s ease-in-out infinite alternate;
  }

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg) scale(1); 
    }
    25% { 
      transform: translateY(-15px) rotate(0.5deg) scale(1.02); 
    }
    50% { 
      transform: translateY(-25px) rotate(1deg) scale(1.05); 
    }
    75% { 
      transform: translateY(-15px) rotate(0.5deg) scale(1.02); 
    }
  }
  
  @keyframes pulse {
    0% { opacity: 0.5; }
    100% { opacity: 0.8; }
  }
`;

// Enhanced main content area
const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-4);
  min-height: calc(100vh - 200px); /* Account for header and footer */
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: var(--space-6) var(--space-2);
    min-height: calc(100vh - 180px);
  }
  
  @media (max-width: 480px) {
    padding: var(--space-4) var(--space-2);
    min-height: calc(100vh - 160px);
  }
`;

// Enhanced content wrapper with better responsive behavior
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  
  /* Add subtle entrance animation */
  animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Loading overlay component
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all var(--transition-slow);
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid var(--white);
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  color: var(--white);
  font-size: var(--text-lg);
  font-weight: 600;
  margin-top: var(--space-4);
  text-align: center;
`;

// Performance optimization component
const LazyComponent = ({ children, delay = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return isLoaded ? children : null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize app
  useEffect(() => {
    // Simulate initial loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      
      {/* Loading overlay */}
      <LoadingOverlay isVisible={isLoading}>
        <div>
          <LoadingSpinner />
          <LoadingText>
            Initializing ExchangeHub
            <br />
            <small style={{ opacity: 0.7, fontSize: '0.875rem' }}>
              Loading real-time exchange rates...
            </small>
          </LoadingText>
        </div>
      </LoadingOverlay>
      
      <StyledComponentsProvider>
        <ThemeProvider>
          <CurrencyProvider>
            <AppContainer>
              <BackgroundDecoration />
              
              {/* Lazy load components for better performance */}
              <LazyComponent delay={100}>
                <Header />
              </LazyComponent>
              
              <MainContent>
                <ContentWrapper>
                  <LazyComponent delay={200}>
                    <CurrencyConverter />
                  </LazyComponent>
                </ContentWrapper>
              </MainContent>
              
              <LazyComponent delay={300}>
                <Footer />
              </LazyComponent>
            </AppContainer>
          </CurrencyProvider>
        </ThemeProvider>
      </StyledComponentsProvider>
    </>
  );
}

export default App;
