import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Increase } from '../assets/increase.svg';
import { ReactComponent as Decrease } from '../assets/decrease.svg';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import TYPES from '../state/types';

const StyledCounterButtonWrapper = styled.div`
  display: flex;
  width: 74px;
  height: 32.7px;
`;

const StyledCounterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

const StyledItemCount = styled.div`
  width: 32px;
  height: 32.7px;
  background-color: #1ea4ce;
  margin: 0px 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const CounterButton = ({ itemCount, id, price }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({
      type: TYPES.INCREASE_ITEM_COUNT,
      payload: {
        id,
      },
    });
    dispatch({
      type: TYPES.SET_TOTAL_PRICE,
    });
  };

  const handleDecrease = () => {
    if (itemCount === 1) {
      dispatch({ type: TYPES.REMOVE_FROM_BASKET, payload: { id: id } });
    } else {
      dispatch({ type: TYPES.DECREASE_ITEM_COUNT, payload: { id: id } });
    }
    dispatch({
      type: TYPES.SET_TOTAL_PRICE,
    });
  };

  return (
    <StyledCounterButtonWrapper>
      <StyledCounterButton onClick={handleDecrease}>
        <Decrease />
      </StyledCounterButton>
      <StyledItemCount>{itemCount}</StyledItemCount>
      <StyledCounterButton onClick={() => handleIncrease()}>
        <Increase />
      </StyledCounterButton>
    </StyledCounterButtonWrapper>
  );
};

CounterButton.propsTypes = {
  id: PropTypes.string.isRequired,
  itemCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CounterButton;
