import TYPES from '../types';

const initialState = {
  products: [],
  itemType: 'mug',
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case TYPES.CHANGE_ITEM_TYPE:
      return {
        ...state,
        itemType: action.payload.type,
      };

    case TYPES.SET_PRICE_LOW_TO_HIGH:
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
      };

    case TYPES.SET_PRICE_HIGH_TO_LOW:
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
      };

    case TYPES.SET_NEW_TO_OLD:
      return {
        ...state,
        products: state.products.sort((a, b) => b.added - a.added),
      };

    case TYPES.SET_OLD_TO_NEW:
      return {
        ...state,
        products: state.products.sort((a, b) => a.added - b.added),
      };

    case TYPES.FILTER_BY_BRANDS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
