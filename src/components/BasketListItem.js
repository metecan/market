import React from 'react';
import styled from 'styled-components';
import CounterButton from './CounterButton';
import { PropTypes } from 'prop-types';

const StyledBasketListContentWrapper = styled.div`
  display: flex;
  padding: 0px 8px;
  justify-content: space-between;
  margin: 16.35px 0px;
`;

const StyledItemName = styled.div`
  margin-bottom: 4.09px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #191919;
`;

const StyledItemPrice = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  font-weight: 600;
  color: #1ea4ce;
`;

const StyledLine = styled.div`
  width: 248px;
  height: 1.02px;
  background-color: #f4f4f4;
`;

const StyledItemInfoWrapper = styled.div`
  width: 100px;
`;

const BasketListItem = ({ name, price, itemCount, id }) => {
  return (
    <div>
      <StyledBasketListContentWrapper>
        <StyledItemInfoWrapper>
          <StyledItemName>{name}</StyledItemName>
          <StyledItemPrice>₺{(price * itemCount).toFixed(2)}</StyledItemPrice>
        </StyledItemInfoWrapper>
        <CounterButton itemCount={itemCount} id={id} price={price} />
      </StyledBasketListContentWrapper>
      <StyledLine />
    </div>
  );
};

BasketListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default BasketListItem;
