import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

// Styled-components SSR and production helper
const StyledComponentsProvider = ({ children }) => {
  // For production builds, don't use StyleSheetManager as it causes issues
  const isProd = process.env.NODE_ENV === 'production';
  
  if (isProd) {
    // In production, just return children without StyleSheetManager
    return <>{children}</>;
  }

  // Development - check if we're in browser environment
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  // Server-side rendering configuration for development only
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