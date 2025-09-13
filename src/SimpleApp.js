import React, { useState, useEffect } from 'react';
import { SimpleCurrencyProvider } from './context/SimpleCurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import SimpleCurrencyConverter from './components/converter/SimpleCurrencyConverter';
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
              Loading real-time exchange rates...
            </small>
          </div>
        </div>
      </div>
      
      <ThemeProvider>
        <SimpleCurrencyProvider>
          <div className="app-container">
            <div className="background-decoration"></div>
            
            <main className="main-content">
              <div className="content-wrapper">
                <LazyComponent delay={200}>
                  <SimpleCurrencyConverter />
                </LazyComponent>
              </div>
            </main>
          </div>
        </SimpleCurrencyProvider>
      </ThemeProvider>
    </>
  );
}

export default App;