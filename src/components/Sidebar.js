import React from 'react';
import Radio from './Radio';
import styled from 'styled-components';
import Input from './Input';
import Checkbox from './Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../state/actions/brands/getBrands';

const StyledSideBarWrapper = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const StyledFilterWrapper = styled.div``;

const StyledFilterItemsWrapper = styled.div`
  width: 296px;
  height: ${(props) => (props.big ? '244px' : '184px')};
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 6px 24px 0px #5d3ebc0a;
  padding: 24px;
`;

const StyledFilterTitle = styled.div`
  color: #697488;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledItemWrapper = styled.div`
  width: 100%;
  height: 134px;
  overflow: auto;
  margin-top: 17px;
  padding: 1px 2px;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const SortingRadioItems = ['Price low to high', 'Price high to low', 'New to old', 'Old to now'];

const Sidebar = () => {
  const { brands } = useSelector((state) => state.brands);

  const [brandSearch, setBrandSearch] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const handleBrandSearch = () => {
    if (brandSearch.length > 0) {
      return brands
        .filter((brand) => brand.name.toLowerCase().includes(brandSearch.toLowerCase()))
        .map((brand) => {
          return <Checkbox key={brand.slug} label={brand.name} slug={brand.slug} count={9} name="brands" />;
        });
    }
    return brands.map((brand) => {
      return <Checkbox key={brand.slug} label={brand.name} slug={brand.slug} count={9} name="brands" />;
    });
  };

  return (
    <StyledSideBarWrapper>
      <StyledFilterWrapper>
        <StyledFilterTitle>Sorting</StyledFilterTitle>
        <StyledFilterItemsWrapper>
          {SortingRadioItems.map((item, index) => {
            return <Radio key={item} label={item} name="sorting" index={index} />;
          })}
        </StyledFilterItemsWrapper>
      </StyledFilterWrapper>
      <StyledFilterWrapper>
        <StyledFilterTitle>Brands</StyledFilterTitle>
        <StyledFilterItemsWrapper big>
          <StyledInputWrapper>
            <Input placeholder="Search brand" onChange={setBrandSearch} />
          </StyledInputWrapper>
          <StyledItemWrapper>
            {brandSearch === '' && <Checkbox label="All" count={18} name="brands" slug="all" />}
            {handleBrandSearch()}
          </StyledItemWrapper>
        </StyledFilterItemsWrapper>
      </StyledFilterWrapper>
      <StyledFilterWrapper>
        <StyledFilterTitle>Tags</StyledFilterTitle>
        <StyledFilterItemsWrapper big>
          <StyledInputWrapper>
            <Input placeholder="Search tag" />
          </StyledInputWrapper>
          <StyledItemWrapper>
            <Checkbox label="All" count={18} name="tags" />
            <Checkbox label="Beach" count={9} name="tags" />
            <Checkbox label="Beach" count={9} name="tags" />
            <Checkbox label="Beach" count={9} name="tags" />
            <Checkbox label="Beach" count={9} name="tags" />
          </StyledItemWrapper>
        </StyledFilterItemsWrapper>
      </StyledFilterWrapper>
    </StyledSideBarWrapper>
  );
};

export default Sidebar;
