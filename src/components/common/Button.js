import React from 'react';
import styled from 'styled-components';

// Modern button component with multiple variants
const StyledButton = styled.button`
  padding: ${props => props.size === 'large' ? '1rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  background: ${props => {
    if (props.variant === 'gradient') return 'var(--primary-gradient)';
    if (props.primary) return 'var(--primary-color)';
    if (props.variant === 'ghost') return 'transparent';
    return 'var(--white)';
  }};
  color: ${props => {
    if (props.variant === 'gradient' || props.primary) return 'var(--white)';
    if (props.variant === 'ghost') return 'var(--primary-color)';
    return 'var(--gray-700)';
  }};
  border: ${props => {
    if (props.variant === 'gradient' || props.variant === 'ghost') return '2px solid transparent';
    if (props.primary) return '2px solid var(--primary-color)';
    return '2px solid var(--gray-300)';
  }};
  border-radius: ${props => props.rounded ? 'var(--radius-full)' : 'var(--radius)'};
  font-size: ${props => props.size === 'large' ? '1.125rem' : props.size === 'small' ? '0.875rem' : '1rem'};
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin: ${props => props.margin || '0'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  min-width: ${props => props.size === 'large' ? '200px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: ${props => props.primary || props.variant === 'gradient' ? 'var(--shadow-md)' : 'var(--shadow-sm)'};
  position: relative;
  overflow: hidden;
  
  /* Shimmer effect for gradient buttons */
  ${props => props.variant === 'gradient' && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: var(--transition-slow);
    }
    
    &:hover::before {
      left: 100%;
    }
  `}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary || props.variant === 'gradient' ? 'var(--shadow-xl)' : 'var(--shadow-lg)'};
    
    ${props => {
      if (props.variant === 'gradient') return '';
      if (props.primary) return 'background: var(--primary-dark);';
      if (props.variant === 'ghost') return 'background: rgba(102, 126, 234, 0.1); border-color: var(--primary-color);';
      return 'background: var(--gray-50); border-color: var(--gray-400);';
    }}
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: ${props => props.primary || props.variant === 'gradient' ? 'var(--shadow-lg)' : 'var(--shadow)'};
  }
  
  &:disabled {
    background: var(--gray-200);
    color: var(--gray-400);
    border-color: var(--gray-200);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &::before {
      display: none;
    }
  }
  
  /* Loading state */
  &.loading {
    cursor: wait;
    
    .loading-spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255,255,255,0.3);
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Icon styling */
  i {
    font-size: ${props => props.iconOnly ? '1.25rem' : '1rem'};
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
