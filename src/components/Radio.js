import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Checked } from '../assets/checked.svg';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import TYPES from '../state/types';

const StyledCheckedIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  border-radius: 17.5px;
  border: 2px solid #dfdee2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledChecked = styled(Checked)`
  visibility: hidden;
`;

const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledRadioLabelWrapper = styled.label`
  color: black;
  display: block;
  position: relative;
  padding-left: 34px;
  margin-bottom: 12px;
  font-size: 14px;
  height: 24px;
  cursor: pointer;

  p {
    height: 18px;
    line-height: 18px;
    letter-spacing: 0.16px;
    text-align: left;
  }

  &:hover input ~ ${StyledCheckedIconWrapper} {
    opacity: 0.8;
  }

  input:checked ~ ${StyledCheckedIconWrapper} {
    border-color: #1ea4ce;
    ${StyledChecked} {
      visibility: visible;
    }
  }
`;

const Radio = ({ label, name, index }) => {
  const { selected } = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: TYPES.SET_SELECTED_SORTING, payload: index });
    if (selected === 0) {
      dispatch({ type: TYPES.SET_PRICE_LOW_TO_HIGH });
    }
    if (selected === 1) {
      dispatch({ type: TYPES.SET_PRICE_HIGH_TO_LOW });
    }
    if (selected === 2) {
      dispatch({ type: TYPES.SET_NEW_TO_OLD });
    }
    if (selected === 3) {
      dispatch({ type: TYPES.SET_OLD_TO_NEW });
    }
  };

  return (
    <StyledRadioLabelWrapper onClick={() => handleChange()}>
      <span>{label}</span>
      <StyledRadioInput type="radio" checked={index === selected} name={name} />
      <StyledCheckedIconWrapper>
        <StyledChecked stroke="#1EA4CE" />
      </StyledCheckedIconWrapper>
    </StyledRadioLabelWrapper>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default Radio;
