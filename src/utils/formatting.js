/**
 * Formats a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (e.g., USD, EUR)
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Formats a date in a readable format
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Validates if the input is a valid number
 * @param {string} value - The value to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidNumber = (value) => {
  return /^\d*\.?\d*$/.test(value) && !isNaN(parseFloat(value));
};

/**
 * Limits decimal places for a number
 * @param {number} value - The number to format
 * @param {number} decimalPlaces - Number of decimal places
 * @returns {number} - Formatted number
 */
export const limitDecimalPlaces = (value, decimalPlaces = 2) => {
  return parseFloat(parseFloat(value).toFixed(decimalPlaces));
};

/**
 * Debounce function to limit how often a function is called
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
