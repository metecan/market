import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyleButtonWrapper = styled.div`
  width: 124px;
  height: 22px;
  background-color: #1ea4ce;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

const Button = ({ children, onClick }) => {
  return <StyleButtonWrapper onClick={onClick}>{children}</StyleButtonWrapper>;
};

Button.propsType = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
