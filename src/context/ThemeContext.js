import React, { createContext, useContext, useState, useEffect } from 'react';

// Create theme context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSystemPreference, setIsSystemPreference] = useState(true);

  // Check system preference and saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsSystemPreference(false);
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark-theme');
      document.body.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-theme');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    if (!isSystemPreference) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemPreference]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setIsSystemPreference(false);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const resetToSystem = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
    setIsSystemPreference(true);
    localStorage.removeItem('theme');
  };

  const setTheme = (theme) => {
    if (theme === 'system') {
      resetToSystem();
    } else {
      setIsDarkMode(theme === 'dark');
      setIsSystemPreference(false);
      localStorage.setItem('theme', theme);
    }
  };

  const value = {
    isDarkMode,
    isSystemPreference,
    toggleTheme,
    resetToSystem,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
