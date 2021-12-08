import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 248px;
  height: 48px;
  padding: 12px 0px 12px 16px;
  border-radius: 2px;
  font-size: 14px;
  border: 2px solid #e0e0e0;
  outline: none;
  color: #525252;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
`;

const Input = ({ placeholder, onChange }) => {
  return <StyledInput onChange={(e) => onChange(e.target.value)} type="text" placeholder={placeholder} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
