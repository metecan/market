import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import basket from '../assets/basket.svg';
import { useSelector } from 'react-redux';

const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 76.64px;
  background-color: #1ea4ce;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

const StyledLogo = styled.img`
  width: 141.25px;
  height: 40.32px;
`;

const StyledBasketTotalPriceWrapper = styled.div`
  width: 129px;
  height: 76.64px;
  background-color: #147594;
  position: absolute;
  right: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    right: 10px;
  }
`;

const StyledBasketIcon = styled.img`
  width: 24px;
  height: 24.53px;
`;

const StyledTotalPriceText = styled.span`
  width: 49px;
  height: 18.39px;
  font-weight: 600;
  white-space: nowrap;
  margin: 0px 8px;
  line-height: 18px;
  letter-spacing: 0.16px;
  text-align: left;
  color: white;
`;

const Header = () => {
  const { total } = useSelector((state) => state.basketList);

  return (
    <StyledHeaderWrapper>
      <StyledContainer>
        <StyledLogo src={logo} alt="logo" />
        <StyledBasketTotalPriceWrapper>
          <StyledBasketIcon src={basket} alt="Basket icon" />
          <StyledTotalPriceText>₺ {total.toFixed(2)}</StyledTotalPriceText>
        </StyledBasketTotalPriceWrapper>
      </StyledContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
