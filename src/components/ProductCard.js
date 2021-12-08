import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TYPES from '../state/types';

const StyledProductCardWrapper = styled.div`
  width: 124px;
  height: 230px;
  flex: 24px;
  padding: 20px;
`;

const StyledProductImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 12px;
  border: 1.18px solid #f3f0fe;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
`;

const StyledProductImage = styled.img`
  width: 92px;
  height: 92px;
  object-fit: cover;
`;

const StyledProductPrice = styled.div`
  width: 124px;
  margin: 8px 0px;
  color: #1ea4ce;
  font-size: 14px;
  line-height: 20px;

  span {
    font-weight: 600;
  }
`;

const StyledProductName = styled.div`
  width: 124px;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ProductCard = ({ name, price, slug, image }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basketList);

  const addToBasket = () => {
    if (basket.find((item) => item.id === slug)) {
      dispatch({
        type: TYPES.INCREASE_ITEM_COUNT,
        payload: { id: slug },
      });
    } else {
      dispatch({
        type: TYPES.ADD_TO_BASKET,
        payload: {
          id: slug,
          item: {
            name,
            price,
          },
          count: 1,
        },
      });
    }
    dispatch({ type: TYPES.SET_TOTAL_PRICE });
  };

  return (
    <StyledProductCardWrapper>
      <StyledProductImageWrapper>
        <StyledProductImage src={image} alt="Product Image" />
      </StyledProductImageWrapper>
      <div>
        <StyledProductPrice>
          ₺ <span>{price}</span>
        </StyledProductPrice>
        <StyledProductName>{name}</StyledProductName>
      </div>
      <Button onClick={() => addToBasket()}>Add</Button>
    </StyledProductCardWrapper>
  );
};

ProductCard.propsTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  slug: PropTypes.string,
  image: PropTypes.string,
};

export default ProductCard;
