import TYPES from '../types';

const initialState = {
  selected: 1,
  startPage: 0,
  endPage: 16,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SELECTED_PAGE:
      return {
        ...state,
        selected: action.payload,
      };
    case TYPES.SET_START_PAGE:
      return {
        ...state,
        startPage: action.payload,
      };
    case TYPES.SET_END_PAGE:
      return {
        ...state,
        endPage: action.payload,
      };

    default:
      return state;
  }
};
