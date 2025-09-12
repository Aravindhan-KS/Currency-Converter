import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

// Modern select container
const SelectContainer = styled.div`
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

// Enhanced visibility styles for react-select
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? '#667eea' : '#cbd5e1',
    borderWidth: '2px',
    borderRadius: '8px',
    minHeight: '52px',
    minWidth: '200px',
    width: '100%',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(102, 126, 234, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      borderColor: '#667eea',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    background: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontSize: '0.9rem',
    fontWeight: '500',
  }),
  
  valueContainer: (provided) => ({
    ...provided,
    padding: '8px 12px',
    minHeight: '36px',
    flexWrap: 'wrap',
  }),
  
  singleValue: (provided) => ({
    ...provided,
    color: '#1e293b',
    fontWeight: '600',
    fontSize: '0.9rem',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    lineHeight: '1.2',
  }),
  
  placeholder: (provided) => ({
    ...provided,
    color: '#64748b',
    fontWeight: '500',
    fontSize: '1rem',
  }),
  
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected 
      ? '#667eea' 
      : state.isFocused 
        ? '#e0e7ff' 
        : '#ffffff',
    color: state.isSelected ? '#ffffff' : '#1e293b',
    cursor: 'pointer',
    padding: '12px 16px',
    fontSize: '0.9rem',
    fontWeight: state.isSelected ? '600' : '500',
    borderRadius: '0',
    margin: '0',
    borderBottom: '1px solid #f1f5f9',
    lineHeight: '1.4',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      backgroundColor: state.isSelected ? '#667eea' : '#e0e7ff',
      fontWeight: '600',
    },
    '&:active': {
      backgroundColor: state.isSelected ? '#5a67d8' : '#c7d2fe',
    },
  }),
  
  menu: (provided) => ({
    ...provided,
    zIndex: 1000,
    borderRadius: '8px',
    border: '2px solid #e2e8f0',
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    marginTop: '4px',
    background: '#ffffff',
  }),
  
  menuList: (provided) => ({
    ...provided,
    padding: '0',
    maxHeight: '240px',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f5f9',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#cbd5e1',
      borderRadius: '3px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#94a3b8',
    },
  }),
  
  indicatorSeparator: () => ({
    display: 'none',
  }),
  
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#667eea' : '#64748b',
    padding: '0 12px',
    fontSize: '18px',
    '&:hover': {
      color: '#667eea',
    },
    transition: 'all 0.2s ease-in-out',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  
  loadingIndicator: (provided) => ({
    ...provided,
    color: '#667eea',
  }),
  
  noOptionsMessage: (provided) => ({
    ...provided,
    color: '#64748b',
    fontSize: '0.9rem',
    padding: '12px 16px',
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
