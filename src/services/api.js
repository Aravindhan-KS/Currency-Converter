import axios from 'axios';

// Using ExchangeRate-API v6 with API key
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://v6.exchangerate-api.com/v6';
const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Error handling middleware
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common API errors
    const errorMessage = 
      error.response?.data?.['error-type'] || 
      error.response?.data?.error || 
      'An error occurred while fetching data';
    console.error('API Error:', errorMessage);
    return Promise.reject(error);
  }
);

// API methods
export const currencyAPI = {
  // Get latest rates with base currency
  getLatestRates: async (baseCurrency = 'USD') => {
    try {
      if (!API_KEY) {
        throw new Error('API key is required. Please add REACT_APP_EXCHANGE_RATE_API_KEY to your .env file');
      }
      const response = await apiClient.get(`/${API_KEY}/latest/${baseCurrency}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching latest rates:', error);
      throw error;
    }
  },

  // Get all available currencies
  getSupportedCurrencies: async () => {
    try {
      if (!API_KEY) {
        throw new Error('API key is required. Please add REACT_APP_EXCHANGE_RATE_API_KEY to your .env file');
      }
      const response = await apiClient.get(`/${API_KEY}/codes`);
      const data = response.data;
      
      if (data?.supported_codes) {
        return data;
      }
      throw new Error('No currency data found');
    } catch (error) {
      console.error('Error fetching supported currencies:', error);
      throw error;
    }
  },

  // Convert specific amount from one currency to another
  convertCurrency: async (fromCurrency, toCurrency, amount) => {
    try {
      if (!API_KEY) {
        throw new Error('API key is required. Please add REACT_APP_EXCHANGE_RATE_API_KEY to your .env file');
      }
      const response = await apiClient.get(`/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`);
      const data = response.data;
      
      if (data?.conversion_result) {
        return {
          conversion_result: data.conversion_result,
          conversion_rate: data.conversion_rate,
        };
      }
      throw new Error('Conversion data not found');
    } catch (error) {
      console.error('Error converting currency:', error);
      throw error;
    }
  },
};

// Helper function to get currency names
const getCurrencyName = (code) => {
  const currencyNames = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'JPY': 'Japanese Yen',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'SEK': 'Swedish Krona',
    'NZD': 'New Zealand Dollar',
    'MXN': 'Mexican Peso',
    'SGD': 'Singapore Dollar',
    'HKD': 'Hong Kong Dollar',
    'NOK': 'Norwegian Krone',
    'ZAR': 'South African Rand',
    'TRY': 'Turkish Lira',
    'BRL': 'Brazilian Real',
    'INR': 'Indian Rupee',
    'KRW': 'South Korean Won',
    'RUB': 'Russian Ruble',
    'PLN': 'Polish Zloty',
    'THB': 'Thai Baht',
    'IDR': 'Indonesian Rupiah',
    'HUF': 'Hungarian Forint',
    'CZK': 'Czech Koruna',
    'ILS': 'Israeli Shekel',
    'CLP': 'Chilean Peso',
    'PHP': 'Philippine Peso',
    'AED': 'UAE Dirham',
    'COP': 'Colombian Peso',
    'SAR': 'Saudi Riyal',
    'MYR': 'Malaysian Ringgit',
    'RON': 'Romanian Leu',
    'BGN': 'Bulgarian Lev',
    'HRK': 'Croatian Kuna',
    'ISK': 'Icelandic Krona',
    'DKK': 'Danish Krone',
    // Add more as needed
  };
  
  return currencyNames[code] || code;
};

export default currencyAPI;
