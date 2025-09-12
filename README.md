# 💱 Currency Converter

A modern, responsive currency converter built with React that provides real-time exchange rates for multiple currencies.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- **Real-time Exchange Rates**: Live currency conversion using ExchangeRate-API
- **10+ Popular Currencies**: Support for USD, EUR, GBP, JPY, INR, CAD, AUD, CHF, CNY, SEK
- **Modern UI**: Clean, responsive design with glass morphism effects
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Swap Functionality**: Quickly swap source and target currencies
- **Input Validation**: Smart handling of user input with proper formatting
- **Mobile Responsive**: Optimized for all device sizes
- **Context Management**: Efficient state management using React Context

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Free API key from [ExchangeRate-API](https://app.exchangerate-api.com/sign-up)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aravindhan-KS/Currency-Converter.git
   cd Currency-Converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API key**
   - Follow the instructions in [API_SETUP.md](./API_SETUP.md) to get your free API key
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     REACT_APP_EXCHANGE_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

1. **Select Source Currency**: Choose the currency you want to convert from
2. **Enter Amount**: Type the amount you wish to convert
3. **Select Target Currency**: Choose the currency to convert to
4. **View Results**: The converted amount appears instantly
5. **Swap Currencies**: Use the swap button to quickly reverse the conversion
6. **Toggle Theme**: Switch between light and dark modes

## 🛠️ Available Scripts

### Development
```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Build for production
```

### Production Build
```bash
npm run build      # Creates optimized production build
npm run preview    # Preview production build locally
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.js
│   │   ├── CurrencySelect.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Input.js
│   └── converter/
│       └── CurrencyConverter.js  # Main converter component
├── context/
│   ├── CurrencyContext.js        # Currency state management
│   └── ThemeContext.js           # Theme state management
├── services/
│   └── api.js                    # API service layer
├── styles/
│   └── GlobalStyles.js           # Global styled-components
├── utils/
│   └── formatting.js             # Utility functions
├── App.js                        # Main App component
└── index.js                      # Entry point
```

## 🔧 Technologies Used

- **Frontend Framework**: React 18+
- **Styling**: Styled Components
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Routing**: React Router DOM
- **UI Components**: React Select
- **Testing**: React Testing Library
- **Build Tool**: Create React App

## 🌐 API Integration

This project uses the [ExchangeRate-API](https://exchangerate-api.com/) for real-time currency conversion:

- **Free Tier**: 1,500 requests/month
- **Real-time Data**: Live exchange rates
- **Multiple Currencies**: 160+ currencies supported
- **Reliable Service**: 99.9% uptime

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Tablet Support**: Optimized for tablet viewing
- **Desktop Enhanced**: Full desktop experience
- **Cross-browser**: Compatible with all modern browsers

## 🎨 Theme Support

- **Light Theme**: Clean, bright interface
- **Dark Theme**: Easy on the eyes for low-light usage
- **Smooth Transitions**: Animated theme switching
- **System Preference**: Respects user's OS theme preference

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import project from GitHub
2. Configure build settings automatically detected
3. Add environment variables in project settings

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aravindhan KS**
- GitHub: [@Aravindhan-KS](https://github.com/Aravindhan-KS)

## 🙏 Acknowledgments

- [ExchangeRate-API](https://exchangerate-api.com/) for providing free currency data
- [React](https://reactjs.org/) team for the amazing framework
- [Styled Components](https://styled-components.com/) for the styling solution
- All contributors and users of this project

---

⭐ **Star this repository if you find it helpful!**
