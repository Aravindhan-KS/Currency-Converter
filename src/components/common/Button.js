import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

// Enhanced button variants
const buttonVariants = {
  primary: css`
    background: var(--primary-gradient);
    color: var(--white);
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: var(--primary-gradient-hover);
      transform: translateY(-2px);
      box-shadow: var(--shadow-primary);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `,
  
  secondary: css`
    background: var(--gray-100);
    color: var(--gray-700);
    border: 2px solid var(--gray-200);
    
    &:hover:not(:disabled) {
      background: var(--gray-200);
      border-color: var(--gray-300);
      transform: translateY(-1px);
    }
  `,
  
  outline: css`
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-1px);
      box-shadow: var(--shadow-primary);
    }
  `,
  
  ghost: css`
    background: transparent;
    color: var(--gray-600);
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: var(--gray-100);
      color: var(--gray-700);
    }
  `,
  
  success: css`
    background: var(--success-gradient);
    color: var(--white);
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--success-dark) 0%, var(--success-color) 100%);
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4);
    }
  `,
  
  danger: css`
    background: linear-gradient(135deg, var(--error-color) 0%, var(--error-dark) 100%);
    color: var(--white);
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--error-dark) 0%, var(--error-color) 100%);
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.4);
    }
  `,
};

// Button size variants
const buttonSizes = {
  xs: css`
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
    border-radius: var(--radius-sm);
  `,
  
  sm: css`
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    border-radius: var(--radius);
  `,
  
  md: css`
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
    border-radius: var(--radius-md);
  `,
  
  lg: css`
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-lg);
    border-radius: var(--radius-lg);
  `,
  
  xl: css`
    padding: var(--space-5) var(--space-10);
    font-size: var(--text-xl);
    border-radius: var(--radius-xl);
  `,
};

// Enhanced button component with styled-components
const StyledButton = styled.button`
  /* Base button styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.025em;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
  
  /* Apply variant styles */
  ${props => buttonVariants[props.variant]}
  
  /* Apply size styles */
  ${props => buttonSizes[props.size]}
  
  /* Full width option */
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  /* Loading state */
  ${props => props.isLoading && css`
    cursor: wait;
    opacity: 0.8;
    
    &:hover {
      transform: none;
    }
  `}
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transform: none !important;
    box-shadow: none !important;
  }
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  
  /* Ripple effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
  }
  
  &:active:not(:disabled)::after {
    width: 200px;
    height: 200px;
  }
  
  /* Icon spacing */
  .icon {
    display: flex;
    align-items: center;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    ${props => props.responsive && css`
      padding: var(--space-2) var(--space-4);
      font-size: var(--text-sm);
    `}
  }
`;

// Loading spinner component
const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Enhanced Button component with forwarded ref
const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  disabled = false,
  fullWidth = false,
  responsive = false,
  leftIcon = null,
  rightIcon = null,
  onClick,
  type = 'button',
  className = '',
  ...props 
}, ref) => {
  const handleClick = (event) => {
    if (isLoading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      responsive={responsive}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={handleClick}
      type={type}
      className={className}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon && <span className="icon">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="icon">{rightIcon}</span>}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
