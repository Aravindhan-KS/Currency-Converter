import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

// Enhanced input container with better positioning
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: ${props => props.spacing || '0'};
`;

// Enhanced floating label design
const Label = styled.label`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--gray-600);
  margin-bottom: var(--space-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition);
  
  ${props => props.required && css`
    &::after {
      content: '*';
      color: var(--error-color);
      margin-left: var(--space-1);
    }
  `}
  
  ${props => props.floating && css`
    position: absolute;
    top: ${props => props.isFocused || props.hasValue ? '0' : '50%'};
    left: var(--space-3);
    transform: translateY(${props => props.isFocused || props.hasValue ? '-100%' : '-50%'});
    font-size: ${props => props.isFocused || props.hasValue ? 'var(--text-xs)' : 'var(--text-base)'};
    color: ${props => props.isFocused ? 'var(--primary-color)' : 'var(--gray-500)'};
    background: var(--white);
    padding: 0 var(--space-1);
    z-index: 1;
    pointer-events: none;
  `}
`;

// Enhanced input field with better states
const StyledInput = styled.input`
  padding: var(--space-3) var(--space-4);
  border: 2px solid ${props => {
    if (props.error) return 'var(--error-color)';
    if (props.success) return 'var(--success-color)';
    if (props.isFocused) return 'var(--primary-color)';
    return 'var(--gray-200)';
  }};
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: 500;
  background: var(--white);
  color: var(--gray-800);
  transition: all var(--transition);
  width: 100%;
  min-height: 56px;
  box-shadow: var(--shadow-sm);
  position: relative;
  
  /* Placeholder styling */
  &::placeholder {
    color: var(--gray-400);
    font-weight: 400;
    opacity: ${props => props.floating ? 0 : 1};
  }
  
  /* Focus state */
  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'var(--error-color)' : 'var(--primary-color)'};
    box-shadow: 0 0 0 3px ${props => 
      props.error 
        ? 'rgba(239, 68, 68, 0.1)' 
        : 'rgba(102, 126, 234, 0.1)'
    }, var(--shadow-md);
    transform: translateY(-1px);
  }
  
  /* Hover state */
  &:hover:not(:focus):not(:disabled) {
    border-color: ${props => props.error ? 'var(--error-color)' : 'var(--gray-300)'};
    box-shadow: var(--shadow);
  }
  
  /* Disabled state */
  &:disabled {
    background-color: var(--gray-50);
    border-color: var(--gray-200);
    color: var(--gray-400);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  /* Success state */
  ${props => props.success && css`
    border-color: var(--success-color);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1), var(--shadow-md);
    }
  `}
  
  /* Number input styling */
  &[type="number"] {
    font-family: 'Inter', 'SF Mono', Monaco, 'Cascadia Code', monospace;
    text-align: right;
    font-size: var(--text-lg);
    font-weight: 600;
    
    @media (max-width: 768px) {
      text-align: left;
      font-size: var(--text-base);
    }
  }
  
  /* Special styling for currency inputs */
  ${props => props.isCurrency && css`
    font-weight: 700;
    font-size: var(--text-xl);
    color: var(--primary-color);
    
    @media (max-width: 768px) {
      font-size: var(--text-lg);
    }
  `}
`;

// Input wrapper for additional elements
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Left and right addon containers
const InputAddon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'left' ? 'left: var(--space-3);' : 'right: var(--space-3);'}
  display: flex;
  align-items: center;
  color: var(--gray-500);
  font-size: var(--text-sm);
  font-weight: 500;
  z-index: 2;
  pointer-events: none;
  
  ${props => props.clickable && css`
    pointer-events: auto;
    cursor: pointer;
    
    &:hover {
      color: var(--primary-color);
    }
  `}
`;

// Enhanced message components
const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  margin-top: var(--space-2);
`;

const Message = styled.span`
  font-size: var(--text-xs);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: var(--space-1);
  line-height: var(--leading-tight);
  
  ${props => props.type === 'error' && css`
    color: var(--error-color);
    
    &::before {
      content: '⚠';
      font-size: var(--text-sm);
    }
  `}
  
  ${props => props.type === 'success' && css`
    color: var(--success-color);
    
    &::before {
      content: '✓';
      font-size: var(--text-sm);
    }
  `}
  
  ${props => props.type === 'info' && css`
    color: var(--info-color);
    
    &::before {
      content: 'ℹ';
      font-size: var(--text-sm);
    }
  `}
  
  ${props => props.type === 'warning' && css`
    color: var(--warning-color);
    
    &::before {
      content: '⚡';
      font-size: var(--text-sm);
    }
  `}
`;

// Character count component
const CharacterCount = styled.span`
  font-size: var(--text-xs);
  color: var(--gray-400);
  margin-left: auto;
`;

// Enhanced Input component with forwarded ref
const Input = forwardRef(({
  id,
  label,
  type = 'text',
  value = '',
  onChange,
  onFocus,
  onBlur,
  placeholder,
  error,
  success,
  info,
  warning,
  disabled = false,
  required = false,
  floating = false,
  isCurrency = false,
  leftAddon = null,
  rightAddon = null,
  maxLength,
  showCharacterCount = false,
  spacing,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;
  
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };
  
  const inputStyle = {
    paddingLeft: leftAddon ? 'var(--space-10)' : 'var(--space-4)',
    paddingRight: rightAddon ? 'var(--space-10)' : 'var(--space-4)',
  };
  
  // Determine message to display (priority: error > success > warning > info)
  const message = error || success || warning || info;
  const messageType = error ? 'error' : success ? 'success' : warning ? 'warning' : info ? 'info' : null;
  
  return (
    <InputContainer spacing={spacing} className={className}>
      <Label
        htmlFor={id}
        required={required}
        floating={floating}
        isFocused={isFocused}
        hasValue={hasValue}
      >
        {label}
      </Label>
      
      <InputWrapper>
        {leftAddon && (
          <InputAddon position="left" clickable={typeof leftAddon === 'function'}>
            {typeof leftAddon === 'function' ? leftAddon() : leftAddon}
          </InputAddon>
        )}
        
        <StyledInput
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          error={!!error}
          success={!!success}
          isFocused={isFocused}
          disabled={disabled}
          required={required}
          isCurrency={isCurrency}
          maxLength={maxLength}
          style={inputStyle}
          {...props}
        />
        
        {rightAddon && (
          <InputAddon position="right" clickable={typeof rightAddon === 'function'}>
            {typeof rightAddon === 'function' ? rightAddon() : rightAddon}
          </InputAddon>
        )}
      </InputWrapper>
      
      {(message || (showCharacterCount && maxLength)) && (
        <MessageContainer>
          {message && <Message type={messageType}>{message}</Message>}
          {showCharacterCount && maxLength && (
            <CharacterCount>
              {value?.toString().length || 0}/{maxLength}
            </CharacterCount>
          )}
        </MessageContainer>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;
