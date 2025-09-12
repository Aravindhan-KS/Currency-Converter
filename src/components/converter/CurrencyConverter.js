import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('85.50');

  const handleConvert = () => {
    // Simple mock conversion for now
    const rate = fromCurrency === 'USD' && toCurrency === 'EUR' ? 0.855 : 1.17;
    setResult((parseFloat(amount) * rate).toFixed(2));
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      maxWidth: '500px',
      margin: '2rem auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#333', margin: 0, fontSize: '2rem' }}>Currency Converter</h1>
        <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Convert currencies instantly</p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
          From
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              flex: 1,
              padding: '1rem',
              border: '2px solid #e1e1e1',
              borderRadius: '10px',
              fontSize: '1.1rem',
              outline: 'none'
            }}
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            style={{
              padding: '1rem',
              border: '2px solid #e1e1e1',
              borderRadius: '10px',
              fontSize: '1rem',
              outline: 'none',
              minWidth: '120px'
            }}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        <button
          onClick={handleSwap}
          style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ⇅
        </button>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
          To
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="number"
            value={result}
            readOnly
            style={{
              flex: 1,
              padding: '1rem',
              border: '2px solid #e1e1e1',
              borderRadius: '10px',
              fontSize: '1.1rem',
              background: '#f8f9fa'
            }}
          />
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            style={{
              padding: '1rem',
              border: '2px solid #e1e1e1',
              borderRadius: '10px',
              fontSize: '1rem',
              outline: 'none',
              minWidth: '120px'
            }}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        style={{
          width: '100%',
          padding: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Convert
      </button>
    </div>
  );
};

export default CurrencyConverter;
