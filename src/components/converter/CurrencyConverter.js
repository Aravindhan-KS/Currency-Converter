import React from 'react';
import styled from 'styled-components';
import { useCurrency } from '../../context/CurrencyContext';
import Input from '../common/Input';
import Button from '../common/Button';
import CurrencySelect from '../common/CurrencySelect';

// Main container
const ConverterContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 20px;
    max-width: 500px;
  }
`;

// Converter title
const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
`;

// Container for side-by-side layout
const SideBySideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  gap: 20px;
  align-items: start;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

// Convert button container
const ConvertButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
  button {
    min-width: 120px;
    font-size: 16px;
    font-weight: 600;
  }
`;

// Input section (left side)
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Output section (right side)  
const OutputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Swap button container (center)
const SwapButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 15px;
    order: 2;
  }
  
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

// Output display
const OutputDisplay = styled.div`
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  background-color: #f8f9fa;
  font-size: 16px;
  min-height: 52px;
  display: flex;
  align-items: center;
  color: #2c3e50;
  font-weight: 500;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: #ced4da;
  }
`;

// Output container wrapper
const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

// Output label
const OutputLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #495057;
  font-weight: 500;
`;

// Result section
const ResultSection = styled.div`
  margin-top: 30px;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
`;

// Result text
const ResultText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 5px;
`;

// Exchange rate text
const RateText = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

// Error message
const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  margin-top: 15px;
  padding: 10px;
  background-color: #f8d7da;
  border-radius: 5px;
  border: 1px solid #f5c6cb;
`;

// Loading spinner
const Spinner = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid #2c3e50;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Currency Converter component
const CurrencyConverter = () => {
  const {
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
    swapCurrencies,
    rates,
    convertCurrency,
  } = useCurrency();

  // Find the selected currency objects
  const findCurrencyOption = (value) => {
    return currencies.find(currency => currency.value === value) || null;
  };

  // Handle amount change
  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow positive numbers and empty string
    if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setAmount(value);
    }
  };

  // Handle convert button click
  const handleConvert = () => {
    if (amount && parseFloat(amount) > 0 && baseCurrency && targetCurrency) {
      convertCurrency();
    }
  };

  // Handle base currency change
  const handleBaseCurrencyChange = (option) => {
    setBaseCurrency(option.value);
    clearError();
  };

  // Handle target currency change
  const handleTargetCurrencyChange = (option) => {
    setTargetCurrency(option.value);
    clearError();
  };

  // Get current exchange rate
  const getCurrentRate = () => {
    return rates?.[targetCurrency] || null;
  };

  // Format currency for display
  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Get display value for converted amount
  const getDisplayValue = () => {
    if (isLoading) return <Spinner />;
    if (convertedAmount) return formatCurrency(convertedAmount, targetCurrency);
    return 'Enter amount';
  };

  return (
    <ConverterContainer>
      <Title>Currency Converter</Title>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <SideBySideContainer>
        {/* Input Section (Left) */}
        <InputSection>
          <Input
            id="amount"
            label="Amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0"
            step="0.01"
          />
          <CurrencySelect
            id="base-currency"
            label="From Currency"
            options={currencies}
            value={findCurrencyOption(baseCurrency)}
            onChange={handleBaseCurrencyChange}
            isDisabled={isLoading || currencies.length === 0}
          />
        </InputSection>
        
        {/* Swap Button (Center) */}
        <SwapButtonContainer>
          <Button onClick={swapCurrencies} disabled={isLoading} primary>
            ⇄
          </Button>
        </SwapButtonContainer>
        
        {/* Output Section (Right) */}
        <OutputSection>
          <OutputContainer>
            <OutputLabel>Converted Amount</OutputLabel>
            <OutputDisplay>
              {getDisplayValue()}
            </OutputDisplay>
          </OutputContainer>
          <CurrencySelect
            id="target-currency"
            label="To Currency"
            options={currencies}
            value={findCurrencyOption(targetCurrency)}
            onChange={handleTargetCurrencyChange}
            isDisabled={isLoading || currencies.length === 0}
          />
        </OutputSection>
      </SideBySideContainer>
      
      {/* Convert Button */}
      <ConvertButtonContainer>
        <Button 
          onClick={handleConvert} 
          disabled={isLoading || !amount || parseFloat(amount) <= 0 || !baseCurrency || !targetCurrency}
          primary
        >
          {isLoading ? 'Converting...' : 'Convert'}
        </Button>
      </ConvertButtonContainer>
      
      {/* Exchange Rate Information */}
      {convertedAmount && !isLoading && (
        <ResultSection>
          <ResultText>
            {formatCurrency(amount, baseCurrency)} = {formatCurrency(convertedAmount, targetCurrency)}
          </ResultText>
          {getCurrentRate() && (
            <RateText>
              1 {baseCurrency} = {getCurrentRate().toFixed(4)} {targetCurrency}
            </RateText>
          )}
        </ResultSection>
      )}
    </ConverterContainer>
  );
};

export default CurrencyConverter;