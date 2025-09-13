import React from 'react';
import { useCurrency } from '../../context/SimpleCurrencyContext';
import './SimpleCurrencyConverter.css';

const SimpleCurrencyConverter = () => {
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
    handleConvert,
  } = useCurrency();

  return (
    <div className="converter-card">
      <div className="converter-header">
        <h1 className="converter-title">💱 Currency Converter</h1>
        <p className="converter-subtitle">Real-time exchange rates at your fingertips</p>
      </div>

      <div className="converter-content">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="input-group">
          <label className="input-label">From</label>
          <div className="input-row">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              placeholder="Enter amount"
              className="amount-input"
              min="0"
              step="0.01"
            />
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              className="currency-select"
            >
              {currencies.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="swap-container">
          <button
            onClick={() => {
              const temp = baseCurrency;
              setBaseCurrency(targetCurrency);
              setTargetCurrency(temp);
            }}
            className="swap-button"
            aria-label="Swap currencies"
          >
            ⇅
          </button>
        </div>

        <div className="input-group">
          <label className="input-label">To</label>
          <div className="input-row">
            <div className="converted-amount">
              {isLoading ? '...' : convertedAmount || '0.00'}
            </div>
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              className="currency-select"
            >
              {currencies.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          disabled={isLoading || amount <= 0}
          className={`convert-button ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Converting...' : 'Convert'}
        </button>

        <div className="conversion-info">
          <p className="conversion-rate">
            1 {baseCurrency} = {convertedAmount / amount || 0} {targetCurrency}
          </p>
          <p className="disclaimer">
            * Using mock exchange rates for demo purposes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCurrencyConverter;