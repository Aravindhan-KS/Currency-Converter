import React, { createContext, useContext, useState, useEffect } from 'react';
import currencyAPI from '../services/api';

// Create currency context
const CurrencyContext = createContext();

// Currency provider component
export const CurrencyProvider = ({ children }) => {
  // State
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rates, setRates] = useState({});

  // Fetch supported currencies on mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        setIsLoading(true);
        const data = await currencyAPI.getSupportedCurrencies();
        
        if (data?.supported_codes) {
          // Format currencies for dropdown
          const formattedCurrencies = data.supported_codes.map(([code, name]) => ({
            value: code,
            label: `${code} - ${name}`,
          }));
          setCurrencies(formattedCurrencies);
        }
      } catch (err) {
        setError('Failed to load currencies. Please try again later.');
        console.error('Error fetching currencies:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  // Fetch exchange rates when base currency changes
  useEffect(() => {
    const fetchRates = async () => {
      if (!baseCurrency) return;
      
      try {
        setIsLoading(true);
        const data = await currencyAPI.getLatestRates(baseCurrency);
        if (data?.rates) {
          setRates(data.rates);
        }
      } catch (err) {
        setError('Failed to load exchange rates. Please try again later.');
        console.error('Error fetching rates:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  // Convert currency whenever amount, base, or target currency changes
  useEffect(() => {
    if (rates && rates[targetCurrency] && amount > 0) {
      const result = amount * rates[targetCurrency];
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, baseCurrency, targetCurrency, rates]);

  // Manual conversion function
  const convertCurrency = async () => {
    if (!amount || !baseCurrency || !targetCurrency) return;
    
    try {
      setIsLoading(true);
      const data = await currencyAPI.convertCurrency(baseCurrency, targetCurrency, amount);
      
      if (data?.conversion_result) {
        setConvertedAmount(data.conversion_result.toFixed(2));
      }
    } catch (err) {
      setError('Currency conversion failed. Please try again.');
      console.error('Error converting currency:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Swap currencies
  const swapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  // Reset errors
  const clearError = () => setError(null);

  // Context value
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
    clearError,
    convertCurrency,
    swapCurrencies,
    rates,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook for using currency context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export default CurrencyContext;
