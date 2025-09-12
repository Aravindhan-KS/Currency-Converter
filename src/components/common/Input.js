import React from 'react';
import styled from 'styled-components';

// Modern input container
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

// Modern label
const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-600);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Enhanced visibility input
const StyledInput = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.error ? 'var(--error-color)' : 'var(--gray-300)'};
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
  background: var(--white);
  color: var(--gray-800);
  transition: var(--transition);
  width: 100%;
  min-height: 52px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: var(--gray-500);
    font-weight: 500;
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? 'var(--error-color)' : 'var(--primary-color)'};
    box-shadow: 0 0 0 3px ${props => 
      props.error 
        ? 'rgba(239, 68, 68, 0.15)' 
        : 'rgba(102, 126, 234, 0.15)'
    }, 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover:not(:focus) {
    border-color: var(--primary-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: var(--gray-100);
    border-color: var(--gray-200);
    color: var(--gray-400);
    cursor: not-allowed;
  }
  
  /* Number input styling */
  &[type="number"] {
    font-family: 'Inter', monospace;
    text-align: right;
    font-size: 1.1rem;
    font-weight: 700;
    
    @media (max-width: 480px) {
      text-align: left;
    }
  }
`;

// Modern error message
const ErrorMessage = styled.span`
  color: var(--error-color);
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '⚠';
    font-size: 0.875rem;
  }
`;

// Input component
const Input = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  disabled,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        disabled={disabled}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
