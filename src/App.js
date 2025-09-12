import React from 'react';
import styled from 'styled-components';
import { CurrencyProvider } from './context/CurrencyContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CurrencyConverter from './components/converter/CurrencyConverter';
import GlobalStyles from './styles/GlobalStyles';

// Main app container with modern layout
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

// Background decoration
const BackgroundDecoration = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E");
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
`;

// Main content container with centering
const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  min-height: calc(100vh - 140px); /* Account for header and footer */
  position: relative;
  z-index: 1;
`;

// Content wrapper for max-width control
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <CurrencyProvider>
        <AppContainer>
          <BackgroundDecoration />
          <Header />
          <MainContent>
            <ContentWrapper>
              <CurrencyConverter />
            </ContentWrapper>
          </MainContent>
          <Footer />
        </AppContainer>
      </CurrencyProvider>
    </>
  );
}

export default App;
