import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Checked } from '../assets/checked.svg';
import PropTypes from 'prop-types';
import TYPES from '../state/types';
import { useDispatch } from 'react-redux';

const StyledCheckedIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  border-radius: 2x;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 7px 0px #5d38c066;

  img {
    visibility: hidden;
  }
`;

const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const StyledCheckboxLabelWrapper = styled.label`
  color: black;
  display: flex;
  align-items: center;
  height: 24px;
  position: relative;
  padding-left: 30px;
  font-size: 14px;
  cursor: pointer;

  &:hover input ~ ${StyledCheckedIconWrapper} {
    opacity: 0.8;
  }

  input:checked ~ ${StyledCheckedIconWrapper} {
    background-color: #1ea4ce;
    img {
      visibility: visible;
    }
  }
`;

const StyledItemCount = styled.span`
  color: #a8a8a8;
  margin-left: 4px;
`;

const StyledLabel = styled.div`
  width: 200px;
  line-height: 18px;
  letter-spacing: 0.16px;
  text-align: left;
  display: flex;
`;

const StyledLabelText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Checkbox = ({ label, slug, name, count }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (name === 'brands') {
      if (!isChecked) {
        setIsChecked(!isChecked);
        dispatch({ type: TYPES.SET_SELECTED_BRANDS, payload: slug });
      } else {
        setIsChecked(!isChecked);
        dispatch({ type: TYPES.REMOVE_FROM_BRANDS, payload: slug });
      }
    } else {
      if (!isChecked) {
        setIsChecked(!isChecked);
        dispatch({ type: TYPES.SET_SELECTED_TAGS, payload: label });
      } else {
        setIsChecked(!isChecked);
        dispatch({ type: TYPES.REMOVE_FROM_TAGS, payload: label });
      }
    }
  };

  return (
    <StyledCheckboxLabelWrapper>
      <StyledLabel title={`${label} (${count ? count : 0})`}>
        <StyledLabelText>{label}</StyledLabelText>
        <StyledItemCount>({count ? count : 0})</StyledItemCount>
      </StyledLabel>
      <StyledCheckboxInput onChange={() => handleChange()} type="checkbox" checked={isChecked} name={name} />
      <StyledCheckedIconWrapper>
        <Checked stroke="#FFF" />
      </StyledCheckedIconWrapper>
    </StyledCheckboxLabelWrapper>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  slug: PropTypes.string,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Checkbox;
