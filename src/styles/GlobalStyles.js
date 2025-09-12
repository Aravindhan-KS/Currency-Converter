import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

  :root {
    /* Modern Color Palette */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --primary-dark: #5a6fd8;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    
    /* Neutral Colors */
    --white: #ffffff;
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;
    
    /* Status Colors */
    --success-color: #10b981;
    --success-light: #d1fae5;
    --error-color: #ef4444;
    --error-light: #fee2e2;
    --warning-color: #f59e0b;
    --warning-light: #fef3c7;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--gray-700);
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Smooth animations for all elements */
  *, *::before, *::after {
    transition: var(--transition);
  }

  /* Button reset */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    background: none;
  }

  /* Input reset */
  input, select, textarea {
    outline: none;
    font-family: inherit;
    border: none;
  }

  /* Remove input number arrows */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Link styles */
  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-dark);
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-400);
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;

export default GlobalStyles;
