import React from 'react';
import GroupButton from './GroupButton';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import productImage from '../assets/product.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../state/actions/products/getProducts';
import TYPES from '../state/types';
import Pagination from './Pagination';

const StyledContentWrapper = styled.div`
  @media (max-width: 720px) {
    transform: scale(0.6);
  }
`;

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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px opx;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const StyledPaginationWrapper = styled.div`
  width: 608px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentHeader = styled.div`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const buttons = ['mug', 'shirt'];

const Content = () => {
  const { products, filteredProducts, itemType } = useSelector((state) => state.products);
  const { selectedBrands } = useSelector((state) => state.brands);
  const { selectedTags } = useSelector((state) => state.tags);
  const { startPage, endPage } = useSelector((state) => state.pagination);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts(itemType));
  }, [dispatch, itemType]);

  React.useEffect(() => {
    if (selectedBrands.length > 0) {
      dispatch({ type: TYPES.FILTER_BY_BRANDS, payload: selectedBrands });
    } else {
      dispatch({ type: TYPES.CLEAR_FILTERED_PRODUCTS });
    }
  }, [dispatch, itemType, selectedBrands]);

  React.useEffect(() => {
    if (selectedTags.length > 0) {
      dispatch({ type: TYPES.FILTER_BY_TAGS, payload: selectedTags });
    } else {
      dispatch({ type: TYPES.CLEAR_FILTERED_PRODUCTS });
    }
  }, [dispatch, selectedTags]);

  const renderDatas = () => {
    if (filteredProducts.length === 0 && products) {
      return products.slice(startPage, endPage).map((product) => {
        return (
          <ProductCard
            key={product.added}
            name={product.name}
            price={product.price}
            slug={product.slug}
            image={productImage}
          />
        );
      });
    } else if (filteredProducts.length > 0) {
      return filteredProducts.slice(startPage, endPage).map((product) => {
        return (
          <ProductCard
            key={product.added}
            name={product.name}
            price={product.price}
            slug={product.slug}
            image={productImage}
          />
        );
      });
    } else {
      return 'no products';
    }
  };

  return (
    <StyledContentWrapper>
      <StyledContentHeader>
        <StyledContentTitle>Products</StyledContentTitle>
        <GroupButton buttons={buttons} />
      </StyledContentHeader>
      <StyledProductList>{renderDatas()}</StyledProductList>
      <StyledPaginationWrapper>
        <Pagination />
      </StyledPaginationWrapper>
    </StyledContentWrapper>
  );
};

export default Content;
