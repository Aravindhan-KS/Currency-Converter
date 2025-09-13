import React, { useState, useEffect } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import RealCurrencyConverter from './components/converter/RealCurrencyConverter';
import './App.css';

// Simple app without styled-components

// Performance optimization component
const LazyComponent = ({ children, delay = 0, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) return null;
  
  return <div className={`lazy-component ${className}`}>{children}</div>;
};

function App() {
  console.log('App component rendering...');
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize app
  useEffect(() => {
    console.log('App useEffect: Starting initialization...');
    // Very short loading time for debugging
    const timer = setTimeout(() => {
      console.log('App useEffect: Initialization complete, hiding loading...');
      setIsLoading(false);
    }, 100); // Reduced to 100ms for debugging
    
    return () => {
      console.log('App useEffect: Cleanup');
      clearTimeout(timer);
    };
  }, []);

  console.log('App render: isLoading =', isLoading);

  return (
    <>
      {/* Loading overlay */}
      <div className={`loading-overlay ${isLoading ? 'visible' : 'hidden'}`}>
        <div>
          <div className="loading-spinner"></div>
          <div className="loading-text">
            Initializing Currency Converter
            <br />
            <small style={{ opacity: 0.7, fontSize: '0.875rem' }}>
              Connecting to real-time exchange rates API...
            </small>
          </div>
        </div>
      </div>
      
      <ThemeProvider>
        <CurrencyProvider>
          <div className="app-container">
            <div className="background-decoration"></div>
            
            <main className="main-content">
              <div className="content-wrapper">
                <LazyComponent delay={200}>
                  <RealCurrencyConverter />
                </LazyComponent>
              </div>
            </main>
          </div>
        </CurrencyProvider>
      </ThemeProvider>
    </>
  );
}

export default App;