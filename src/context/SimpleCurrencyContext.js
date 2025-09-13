import React, { createContext, useContext, useState } from 'react';

// Create currency context
const CurrencyContext = createContext();

// Simple currency provider without API calls for testing
export const SimpleCurrencyProvider = ({ children }) => {
  console.log('SimpleCurrencyProvider: Initializing...');
  
  // State
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1.0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Static currency list
  const currencies = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    { value: 'GBP', label: 'GBP - British Pound' },
    { value: 'JPY', label: 'JPY - Japanese Yen' },
    { value: 'INR', label: 'INR - Indian Rupee' },
    { value: 'CAD', label: 'CAD - Canadian Dollar' },
    { value: 'AUD', label: 'AUD - Australian Dollar' },
  ];

  // Simple mock conversion (for testing)
  const handleConvert = () => {
    console.log('SimpleCurrencyProvider: Mock conversion');
    setIsLoading(true);
    setTimeout(() => {
      // Mock conversion rate
      const mockRate = Math.random() * 2 + 0.5; // Random rate between 0.5 and 2.5
      setConvertedAmount((amount * mockRate).toFixed(2));
      setIsLoading(false);
    }, 500);
  };

  const value = {
    currencies,
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
    amount,
    setAmount,
    convertedAmount,
    isLoading,
    error,
    handleConvert,
  };

  console.log('SimpleCurrencyProvider: Rendering with value:', value);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use currency context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export default SimpleCurrencyProvider;