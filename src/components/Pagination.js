import React from 'react';
import ReactPaginate from 'react-paginate';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Prev } from '../assets/prev.svg';
import { ReactComponent as Next } from '../assets/next.svg';
import { useDispatch } from 'react-redux';
import TYPES from '../state/types';

const StyledPaginateContainer = styled.div`
  .pagination {
    width: 500px;
    color: #697488;
    fill: #697488;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-top: 32px;

    & > li:not(:last-child) {
      margin-right: 24px;
    }
  }

  li {
    cursor: pointer;

    &:hover {
      color: #1ea4ce;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .break-me {
    cursor: default;
  }
  .active {
    padding: 12px;

    border-color: transparent;
    background-color: #1ea4ce;
    color: white;
    border-radius: 2px;
    &:hover {
      color: white;
    }
  }
  .prev {
    padding-right: 57px;
    &:hover {
      fill: #1ea4ce;
    }
  }
  .next {
    margin-left: 56px;
    &:hover {
      fill: #1ea4ce;
    }
  }
`;

const Pagination = ({ itemsPerPage, items }) => {
  const pageCount = 1740 / 2 / 16;

  const dispatch = useDispatch();

  const handleOnChange = (selectedPage) => {
    const page = selectedPage.selected;
    if (page === 0) {
      dispatch({ type: TYPES.SET_START_PAGE, payload: 0 });
      dispatch({ type: TYPES.SET_END_PAGE, payload: 16 });
    } else {
      dispatch({ type: TYPES.SET_START_PAGE, payload: page * 16 });
      dispatch({ type: TYPES.SET_END_PAGE, payload: (page + 1) * 16 });
    }
  };

  return (
    <StyledPaginateContainer>
      <ReactPaginate
        onPageChange={handleOnChange}
        breakLabel="..."
        nextLabel={<Next />}
        pageCount={pageCount}
        previousLabel={<Prev />}
        renderOnZeroPageCount="no data"
        marginPagesDisplayed={3}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="prev"
        nextClassName="next"
      />
    </StyledPaginateContainer>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default Pagination;
