import React from 'react';
import GroupButton from './GroupButton';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import productImage from '../assets/product.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../state/actions/products/getProducts';

const StyledContentWrapper = styled.div``;

const StyledContentTitle = styled.span`
  display: block;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  margin-bottom: 16px;
  color: #6f6f6f;
`;

const StyledProductList = styled.div`
  background-color: white;
  padding: 0px 20px 20px 0px;
  margin-top: 16px;
  width: 608px;
  height: 1008px;
  display: flex;
  flex-flow: row wrap;
`;

const buttons = ['mug', 'shirt'];

const Content = () => {
  const { products, itemType } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch(getProducts(itemType)), [dispatch, itemType]);

  return (
    <StyledContentWrapper>
      <StyledContentTitle>Products</StyledContentTitle>
      <GroupButton buttons={buttons} />
      <StyledProductList>
        {products
          ? products.slice(0, 16).map((product) => {
              return (
                <ProductCard
                  key={product.added}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                  image={productImage}
                />
              );
            })
          : 'no products'}
      </StyledProductList>
    </StyledContentWrapper>
  );
};

export default Content;
