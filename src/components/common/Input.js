import React from 'react';
import styled from 'styled-components';

// Styled input container
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

// Styled label
const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #495057;
  font-weight: 500;
`;

// Styled input element
const StyledInput = styled.input`
  padding: 10px 15px;
  border: 2px solid ${props => props.error ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#dc3545' : '#2c3e50'};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(44, 62, 80, 0.25)'};
  }
  
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

// Error message styling
const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
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
