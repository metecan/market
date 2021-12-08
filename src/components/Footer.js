import React from 'react';
import styled from 'styled-components';

const StyledFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 136px 0px 40px 0px;
  color: #1ea4ce;

  span {
    margin: 0px 16px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #1ea4ce;
`;

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledLink target="_blank" href="https://metecan.dev">
        &copy;2019 Market
      </StyledLink>
      <span>•</span>
      <StyledLink target="_blank" href="https://getir.com">
        Privacy Policy
      </StyledLink>
    </StyledFooterWrapper>
  );
};

export default Footer;
