import React from 'react';
import styled from 'styled-components';

// Styled button component
const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.primary ? '#2c3e50' : '#ffffff'};
  color: ${props => props.primary ? '#ffffff' : '#2c3e50'};
  border: 2px solid #2c3e50;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${props => props.margin || '0'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${props => props.primary ? '#1a2533' : '#f8f9fa'};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    border-color: #ced4da;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    margin-right: ${props => props.iconOnly ? '0' : '8px'};
  }
`;

// Button component with props
const Button = ({ 
  children, 
  primary, 
  disabled, 
  onClick, 
  type = 'button',
  fullWidth,
  margin,
  iconOnly,
  ...props 
}) => {
  return (
    <StyledButton
      type={type}
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      margin={margin}
      iconOnly={iconOnly}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
