import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TYPES from '../state/types';

const StyledGroupButtonWrapper = styled.div`
  display: flex;
  div:not(:last-child) {
    margin-right: 8px;
  }
`;

const StyledGroupButton = styled.div`
  width: 60px;
  height: 30px;
  padding: 6px 16px;
  background-color: ${(props) => (props.active ? '#1EA4CE' : '#F2F0FD')};
  color: ${(props) => (props.active ? '#F2F0FD' : '#1EA4CE')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

const GroupButton = ({ buttons }) => {
  const dispatch = useDispatch();
  const { itemType } = useSelector((state) => state.products);

  const changeItemType = (button) => {
    dispatch({ type: TYPES.CHANGE_ITEM_TYPE, payload: { type: button } });
    dispatch({ type: TYPES.FILTER_ITEM_TYPE_PRODUCTS, payload: itemType });
    dispatch({ type: TYPES.SET_SELECTED_SORTING, payload: null });
  };

  return (
    <StyledGroupButtonWrapper>
      {buttons.map((buttonName, index) => {
        return (
          <StyledGroupButton onClick={() => changeItemType(buttonName)} key={index} active={itemType === buttonName}>
            {buttonName}
          </StyledGroupButton>
        );
      })}
    </StyledGroupButtonWrapper>
  );
};

GroupButton.propTypes = {
  buttons: PropTypes.array,
};

export default GroupButton;
