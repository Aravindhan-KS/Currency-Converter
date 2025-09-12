import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

// Styled-components SSR and production helper
const StyledComponentsProvider = ({ children }) => {
  // For production builds, always use StyleSheetManager
  const isProd = process.env.NODE_ENV === 'production';
  
  if (isProd) {
    return (
      <StyleSheetManager 
        shouldForwardProp={(prop, defaultValidatorFn) => {
          // Allow all props to be forwarded in production
          return defaultValidatorFn ? defaultValidatorFn(prop) : true;
        }}
        enableVendorPrefixes
      >
        {children}
      </StyleSheetManager>
    );
  }

  // Development or client-side rendering
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  // Server-side rendering configuration for development
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      {children}
    </StyleSheetManager>
  );
};

StyledComponentsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledComponentsProvider;