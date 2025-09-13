import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';

// Debug logging
console.log('React index.js loading...');
console.log('Environment:', process.env.NODE_ENV);
console.log('API Key exists:', !!process.env.REACT_APP_EXCHANGE_RATE_API_KEY);

// Add error handling for root creation
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found!');
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log('Rendering React app...');
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log('React app rendered successfully!');
  } catch (error) {
    console.error('Error rendering React app:', error);
    // Fallback rendering
    rootElement.innerHTML = `
      <div style="
        padding: 2rem; 
        text-align: center; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        color: white; 
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-direction: column;
        font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
      ">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">💱 Currency Converter</h1>
        <p>Loading failed. Please refresh the page.</p>
        <button onclick="window.location.reload()" style="
          margin-top: 1rem; 
          padding: 0.75rem 1.5rem; 
          background: rgba(255,255,255,0.2); 
          border: 1px solid rgba(255,255,255,0.3); 
          border-radius: 8px; 
          color: white; 
          cursor: pointer;
          font-size: 1rem;
        ">Reload</button>
      </div>
    `;
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
