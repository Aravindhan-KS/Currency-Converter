import React from 'react';
import styled from 'styled-components';
import { CurrencyProvider } from './context/CurrencyContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CurrencyConverter from './components/converter/CurrencyConverter';
import GlobalStyles from './styles/GlobalStyles';

// Main app container
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Main content container
const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <CurrencyProvider>
        <AppContainer>
          <Header />
          <MainContent>
            <CurrencyConverter />
          </MainContent>
          <Footer />
        </AppContainer>
      </CurrencyProvider>
    </>
  );
}

export default App;
