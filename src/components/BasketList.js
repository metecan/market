import React from 'react';
import BasketListItem from './BasketListItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledBasketListWrapper = styled.div`
  width: 296px;
  height: 338.25px;
  background-color: #1ea4ce;
  padding: 8.18px 8px;
  border-radius: 2px;
`;

const StyledListContent = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  padding: 16.35px 16px;
  position: relative;
`;

const StyledItemList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 220px;
`;

const StyledTotalPrice = styled.span`
  padding: 17.37px 24px;
  color: #1ea4ce;
  border: 2px solid #1ea4ce;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`;

const StyledTotalPriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16.35px 0px;
  position: absolute;
  bottom: 0;
  right: 20px;
`;

const BasketList = () => {
  const { basket } = useSelector((state) => state.basketList);
  const { total } = useSelector((state) => state.basketList);

  return (
    <StyledBasketListWrapper>
      <StyledListContent>
        <StyledItemList>
          {basket[0] ? (
            basket.map((listItem) => {
              return (
                <BasketListItem
                  key={listItem.id}
                  name={listItem.item.name}
                  price={listItem.item.price}
                  itemCount={listItem.count}
                  id={listItem.id}
                />
              );
            })
          ) : (
            <div>Basket is empty</div>
          )}
        </StyledItemList>
        <StyledTotalPriceWrapper>
          <StyledTotalPrice>₺{total.toFixed(2)}</StyledTotalPrice>
        </StyledTotalPriceWrapper>
      </StyledListContent>
    </StyledBasketListWrapper>
  );
};

export default BasketList;
