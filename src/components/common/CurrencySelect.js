import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

// Styled select container
const SelectContainer = styled.div`
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

// Custom styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? '#2c3e50' : '#ced4da',
    borderWidth: '2px',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(44, 62, 80, 0.25)' : 'none',
    '&:hover': {
      borderColor: '#2c3e50',
    },
    borderRadius: '4px',
    padding: '2px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected 
      ? '#2c3e50' 
      : state.isFocused 
        ? '#e9ecef' 
        : 'white',
    color: state.isSelected ? 'white' : '#333',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 2,
  }),
};

// CurrencySelect component
const CurrencySelect = ({
  id,
  label,
  options,
  value,
  onChange,
  isDisabled,
  placeholder = 'Select currency',
  ...props
}) => {
  return (
    <SelectContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Select
        inputId={id}
        options={options}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        placeholder={placeholder}
        styles={customStyles}
        {...props}
      />
    </SelectContainer>
  );
};

export default CurrencySelect;
