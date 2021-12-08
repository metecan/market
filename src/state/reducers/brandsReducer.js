import TYPES from '../types';

const initialState = {
  brands: [],
  selectedBrands: [],
};

export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    case TYPES.SET_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: [...state.selectedBrands, action.payload],
      };

    case TYPES.REMOVE_FROM_BRANDS:
      return {
        ...state,
        selectedBrands: state.selectedBrands.filter((brand) => brand !== action.payload),
      };
    default:
      return state;
  }
};
