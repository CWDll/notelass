import React from 'react';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 8px;
  width: 25ch;
  position: relative;
  display: flex;
  align-items: center;
  
`;

const OutlinedInput = styled.input`
  font-size: 50px;
  border: 1px solid #EDEDFF;
  border-radius: 4px;
  width: 56px;
  background: #EDEDFF;
  height: 28px;
  padding: 2px 31px 2px 8px; 
  display: block;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    border: 1px solid #EDEDFF;
  }

  // Remove the increment and decrement buttons
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield; // Firefox
  }
`;


const InputAdornment = styled.span`
  position: absolute;
  right: 10px; 
  pointer-events: none;
  background: transparent; 
`;

const InputBox = ({ adornment, type, value, onChange }) => (
  <FormControl>
    <OutlinedInput
      type={type}
      value={value} 
      onChange={onChange}
      aria-label="input" 
    />
    <InputAdornment>{adornment}</InputAdornment>
  </FormControl>
);

export default InputBox;
