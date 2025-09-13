import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';
import './RealCurrencyConverter.css';

const RealCurrencyConverter = () => {
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
    convertCurrency,
    swapCurrencies,
  } = useCurrency();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleConvert = () => {
    if (amount && baseCurrency && targetCurrency) {
      convertCurrency();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConvert();
    }
  };

  return (
    <div className="currency-converter">
      {/* Header */}
      <div className="converter-header">
        <h2 className="converter-title">Currency Converter</h2>
        <p className="converter-subtitle">
          Get real-time exchange rates from around the world
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          {error}
          <button onClick={clearError}>×</button>
        </div>
      )}

      {/* From Currency Section */}
      <div className="input-section">
        <label className="input-label">From</label>
        <div className="input-row">
          <input
            type="text"
            className="amount-input"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            onKeyPress={handleKeyPress}
          />
          <select
            className="currency-select"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="swap-section">
        <button 
          className="swap-button"
          onClick={swapCurrencies}
          title="Swap currencies"
        >
          ⇅
        </button>
      </div>

      {/* To Currency Section */}
      <div className="input-section">
        <label className="input-label">To</label>
        <div className="input-row">
          <div className="result-section">
            <div className="result-label">Converted Amount</div>
            <div className="result-amount">
              {isLoading ? (
                <span>
                  <span className="loading-spinner"></span>
                  Converting...
                </span>
              ) : (
                convertedAmount || '0.00'
              )}
            </div>
          </div>
          <select
            className="currency-select"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <button
        className="convert-button"
        onClick={handleConvert}
        disabled={isLoading || !amount || !baseCurrency || !targetCurrency}
      >
        {isLoading ? (
          <>
            <span className="loading-spinner"></span>
            Converting...
          </>
        ) : (
          'Convert Currency'
        )}
      </button>
    </div>
  );
};

export default RealCurrencyConverter;