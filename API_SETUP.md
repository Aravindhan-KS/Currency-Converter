# ExchangeRate-API Setup Instructions

## Getting Your Free API Key

1. **Sign Up**: Go to [ExchangeRate-API](https://app.exchangerate-api.com/sign-up)
2. **Create Account**: Sign up with your email address
3. **Verify Email**: Check your email and verify your account
4. **Get API Key**: Once logged in, you'll see your API key on the dashboard

## Free Tier Benefits
- 1,500 requests per month
- No credit card required
- Access to all currency pairs
- Real-time exchange rates

## Setup Steps

1. Copy your API key from the ExchangeRate-API dashboard
2. Open the `.env` file in the root directory
3. Replace `your_api_key_here` with your actual API key:
   ```
   REACT_APP_EXCHANGE_RATE_API_KEY=your_actual_api_key_here
   ```
4. Save the file
5. Restart the development server: `npm start`

## Example .env file
```
REACT_APP_EXCHANGE_RATE_API_KEY=abcd1234567890efghijklmnop
REACT_APP_API_BASE_URL=https://v6.exchangerate-api.com/v6
```

## Testing
Once you've added your API key, the currency converter should work with:
- Real-time exchange rates
- 168+ supported currencies
- Currency conversion functionality

## Troubleshooting
- Make sure the API key starts with your project identifier
- Ensure there are no spaces around the API key
- Restart the development server after changing the .env file
- Check the browser console for any error messages
