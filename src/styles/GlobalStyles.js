import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Critical CSS - Load fonts with better performance */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

  /* CSS Reset for better cross-browser consistency */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    /* Enhanced Color Palette */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-gradient-hover: linear-gradient(135deg, #5a6fd8 0%, #6b4190 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --success-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
    --warning-gradient: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    
    --primary-color: #667eea;
    --primary-dark: #5a6fd8;
    --primary-light: #818cf8;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --accent-secondary: #f5576c;
    
    /* Light Mode Colors */
    --white: #ffffff;
    --black: #000000;
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
    
    /* Dark Mode Colors */
    --dark-bg-primary: #0f172a;
    --dark-bg-secondary: #1e293b;
    --dark-bg-tertiary: #334155;
    --dark-text-primary: #f8fafc;
    --dark-text-secondary: #e2e8f0;
    --dark-text-muted: #94a3b8;
    
    /* Status Colors */
    --success-color: #10b981;
    --success-light: #d1fae5;
    --success-dark: #047857;
    --error-color: #ef4444;
    --error-light: #fee2e2;
    --error-dark: #dc2626;
    --warning-color: #f59e0b;
    --warning-light: #fef3c7;
    --warning-dark: #d97706;
    --info-color: #3b82f6;
    --info-light: #dbeafe;
    --info-dark: #2563eb;
    
    /* Enhanced Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    
    /* Colored Shadows */
    --shadow-primary: 0 10px 15px -3px rgba(102, 126, 234, 0.4), 0 4px 6px -2px rgba(102, 126, 234, 0.05);
    --shadow-secondary: 0 10px 15px -3px rgba(118, 75, 162, 0.4), 0 4px 6px -2px rgba(118, 75, 162, 0.05);
    --shadow-accent: 0 10px 15px -3px rgba(240, 147, 251, 0.4), 0 4px 6px -2px rgba(240, 147, 251, 0.05);
    
    /* Border Radius */
    --radius-xs: 2px;
    --radius-sm: 4px;
    --radius: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
    --radius-3xl: 48px;
    --radius-full: 9999px;
    
    /* Enhanced Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* Spacing Scale */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    
    /* Typography Scale */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    --text-6xl: 3.75rem;
    
    /* Line Heights */
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    
    /* Z-Index Scale */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;
  }

  /* Dark Theme Variables */
  .dark-theme {
    /* Override colors for dark mode */
    --primary-color: #818cf8;
    --primary-dark: #6366f1;
    --primary-light: #a5b4fc;
    --accent-color: #fbbf24;
    
    /* Dark backgrounds */
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-quaternary: #475569;
    
    /* Dark text colors */
    --text-primary: #f8fafc;
    --text-secondary: #e2e8f0;
    --text-muted: #94a3b8;
    --text-inverse: #0f172a;
    
    /* Override component backgrounds */
    --white: #1e293b;
    --gray-50: #334155;
    --gray-100: #475569;
    --gray-200: #64748b;
    --gray-300: #94a3b8;
    
    /* Dark shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.25);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }

  /* CSS Reset and Base Styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px; /* Base font size */
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
    font-weight: 400;
    line-height: var(--leading-normal);
    color: var(--gray-700);
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    
    /* Enhanced background with animated particles */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
      animation: float 20s ease-in-out infinite;
      z-index: -2;
    }
    
    @keyframes float {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(30px, -30px) rotate(1deg); }
      66% { transform: translate(-20px, 20px) rotate(-1deg); }
    }
  }

  /* Dark mode support */
  body.dark-mode {
    background: linear-gradient(135deg, var(--dark-bg-primary) 0%, var(--dark-bg-secondary) 100%);
    color: var(--dark-text-primary);
    
    &::before {
      background: 
        radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.2) 0%, transparent 50%);
    }
  }

  /* Enhanced element transitions */
  *, *::before, *::after {
    transition: color var(--transition), 
                background-color var(--transition),
                border-color var(--transition),
                box-shadow var(--transition),
                transform var(--transition-fast);
  }

  /* Enhanced button reset */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    background: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  /* Enhanced input reset */
  input, select, textarea {
    outline: none;
    font-family: inherit;
    border: none;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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

  /* Enhanced select styling */
  select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }

  /* Enhanced link styles */
  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: all var(--transition);
    
    &:hover {
      color: var(--primary-dark);
    }
    
    &:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
      border-radius: var(--radius-sm);
    }
  }

  /* Enhanced scrollbar styles */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-100);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: var(--radius-full);
    border: 2px solid var(--gray-100);
    
    &:hover {
      background: linear-gradient(135deg, var(--primary-dark), var(--secondary-color));
    }
  }

  ::-webkit-scrollbar-corner {
    background: var(--gray-100);
  }

  /* Enhanced focus styles with better accessibility */
  *:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }

  /* Selection styles */
  ::selection {
    background: rgba(102, 126, 234, 0.2);
    color: var(--gray-900);
  }

  ::-moz-selection {
    background: rgba(102, 126, 234, 0.2);
    color: var(--gray-900);
  }

  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-4);
    
    @media (max-width: 768px) {
      padding: 0 var(--space-2);
    }
  }

  /* Loading animation */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  /* Animation utility classes */
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-bounce {
    animation: bounce 1s infinite;
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    body {
      background: white !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    a[href]:after {
      content: " (" attr(href) ")";
    }
  }
`;

export default GlobalStyles;
