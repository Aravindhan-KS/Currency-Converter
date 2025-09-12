import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Enhanced currency data with symbols and full names
const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: '₣' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' }
];

// Main container with modern glass morphism card
const ConverterCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
  box-shadow: var(--shadow-2xl);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  /* Animated background decoration */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    animation: rotate 20s linear infinite;
    z-index: -1;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 0.5rem;
  }
`;

// Header section with title and description
const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  color: var(--gray-600);
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.8;
`;

// Currency input section styling
const InputSection = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

// Enhanced input field styling
const AmountInput = styled.input`
  flex: 1;
  padding: 1.125rem 1.25rem;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: 1.125rem;
  font-weight: 500;
  background: var(--white);
  color: var(--gray-700);
  transition: all var(--transition);
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: var(--gray-300);
  }
  
  &::placeholder {
    color: var(--gray-400);
    font-weight: 400;
  }
  
  &:read-only {
    background: var(--gray-50);
    cursor: not-allowed;
    font-weight: 600;
    color: var(--primary-color);
  }
`;

// Enhanced select dropdown styling
const CurrencySelect = styled.select`
  padding: 1.125rem 1.25rem;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 500;
  background: var(--white);
  color: var(--gray-700);
  cursor: pointer;
  min-width: 140px;
  transition: all var(--transition);
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: var(--gray-300);
  }
  
  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

// Enhanced swap button container with decorative elements
const SwapButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  position: relative;
  
  /* Add decorative line through the button */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gray-300), transparent);
    z-index: 0;
  }
`;

const SwapButton = styled.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-full);
  width: 64px;
  height: 64px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 1;
  
  /* Ensure minimum content visibility */
  min-width: 64px;
  min-height: 64px;
  
  /* Icon styling */
  .swap-icon {
    font-size: 1.25rem;
    font-weight: 900;
    display: block;
    line-height: 1;
  }
  
  /* Fallback arrow using CSS */
  .fallback-arrow {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    display: block;
  }
  
  &:hover {
    transform: translateY(-3px) rotate(180deg);
    box-shadow: var(--shadow-xl);
    background: var(--primary-gradient-hover);
  }
  
  &:active {
    transform: translateY(-1px) rotate(180deg) scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3), var(--shadow-xl);
  }
  
  /* Enhanced ripple effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease;
  }
  
  &:active::after {
    width: 120px;
    height: 120px;
  }
`;

// Convert button with enhanced styling
const ConvertButton = styled.button`
  width: 100%;
  padding: 1.25rem 2rem;
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-md);
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: all var(--transition);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.025em;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
  
  /* Loading state */
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

// Result display section
const ResultSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--gray-50) 0%, rgba(102, 126, 234, 0.05) 100%);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid var(--gray-100);
`;

const ResultText = styled.div`
  font-size: 0.875rem;
  color: var(--gray-600);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ResultValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0.5rem 0;
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ExchangeRate = styled.div`
  font-size: 0.875rem;
  color: var(--gray-500);
  font-weight: 500;
`;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isConverted, setIsConverted] = useState(false);

  // Mock exchange rates for demonstration
  const mockRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110, INR: 74, CAD: 1.25, AUD: 1.35, CHF: 0.92, CNY: 6.45, SEK: 8.7 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129, INR: 87, CAD: 1.47, AUD: 1.59, CHF: 1.08, CNY: 7.6, SEK: 10.2 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150, INR: 101, CAD: 1.71, AUD: 1.85, CHF: 1.26, CNY: 8.8, SEK: 11.9 },
    // Add more rates as needed...
  };

  const handleConvert = async () => {
    if (!amount || amount <= 0) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const rate = mockRates[fromCurrency]?.[toCurrency] || 1;
    const convertedAmount = parseFloat(amount) * rate;
    
    setResult(convertedAmount);
    setExchangeRate(rate);
    setIsConverted(true);
    setIsLoading(false);
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    
    // If we have a previous conversion, swap the amounts
    if (isConverted && result) {
      setAmount(result.toFixed(2));
      setResult(parseFloat(amount));
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setIsConverted(false); // Reset conversion state when amount changes
  };

  const getCurrencySymbol = (code) => {
    return currencies.find(c => c.code === code)?.symbol || code;
  };

  const formatCurrency = (value, currency) => {
    const symbol = getCurrencySymbol(currency);
    return `${symbol}${parseFloat(value).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  // Auto-convert when currencies change (if amount exists)
  useEffect(() => {
    if (amount && parseFloat(amount) > 0) {
      const timer = setTimeout(() => {
        handleConvert();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fromCurrency, toCurrency]);

  return (
    <ConverterCard>
      <HeaderSection>
        <Title>Currency Converter</Title>
        <Subtitle>Convert currencies with real-time exchange rates</Subtitle>
      </HeaderSection>

      {/* From Currency Section */}
      <InputSection>
        <Label htmlFor="amount-input">From</Label>
        <InputRow>
          <AmountInput
            id="amount-input"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            min="0"
            step="0.01"
          />
          <CurrencySelect
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            aria-label="From currency"
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </CurrencySelect>
        </InputRow>
      </InputSection>

      {/* Swap Button */}
      <SwapButtonContainer>
        <SwapButton
          onClick={handleSwap}
          aria-label="Swap currencies"
          title="Swap currencies"
        >
          <i className="fas fa-exchange-alt swap-icon" aria-hidden="true" />
          {/* Fallback content if FontAwesome doesn't load */}
          <span className="fallback-arrow">⇅</span>
        </SwapButton>
      </SwapButtonContainer>

      {/* To Currency Section */}
      <InputSection>
        <Label htmlFor="result-input">To</Label>
        <InputRow>
          <AmountInput
            id="result-input"
            type="number"
            value={result ? result.toFixed(2) : ''}
            readOnly
            placeholder="Converted amount"
          />
          <CurrencySelect
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            aria-label="To currency"
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </CurrencySelect>
        </InputRow>
      </InputSection>

      {/* Convert Button */}
      <ConvertButton
        onClick={handleConvert}
        disabled={isLoading || !amount || parseFloat(amount) <= 0}
      >
        {isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }} />{' '}
            Converting...
          </>
        ) : (
          <>
            <i className="fas fa-calculator" style={{ marginRight: '0.5rem' }} />{' '}
            Convert Currency
          </>
        )}
      </ConvertButton>

      {/* Result Display */}
      {isConverted && result && (
        <ResultSection>
          <ResultText>Conversion Result</ResultText>
          <ResultValue>
            {formatCurrency(amount, fromCurrency)} = {formatCurrency(result, toCurrency)}
          </ResultValue>
          {exchangeRate && (
            <ExchangeRate>
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </ExchangeRate>
          )}
        </ResultSection>
      )}
    </ConverterCard>
  );
};

export default CurrencyConverter;
