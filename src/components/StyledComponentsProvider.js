import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

// Styled-components SSR helper
const StyledComponentsProvider = ({ children }) => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  // Server-side rendering configuration
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