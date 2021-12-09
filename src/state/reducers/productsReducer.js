import TYPES from '../types';

const initialState = {
  products: [],
  filteredProducts: [],
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
      if (state.filteredProducts.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => a.price - b.price),
        };
      } else {
        return {
          ...state,
          products: state.products.sort((a, b) => a.price - b.price),
        };
      }

    case TYPES.SET_PRICE_HIGH_TO_LOW:
      if (state.filteredProducts.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => b.price - a.price),
        };
      } else {
        return {
          ...state,
          product: state.products.sort((a, b) => b.price - a.price),
        };
      }

    case TYPES.SET_NEW_TO_OLD:
      if (state.filteredProducts.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => b.added - a.added),
        };
      } else {
        return {
          ...state,
          product: state.products.sort((a, b) => b.added - a.added),
        };
      }

    case TYPES.SET_OLD_TO_NEW:
      if (state.filteredProducts.length > 0) {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => a.added - b.added),
        };
      } else {
        return {
          ...state,
          product: state.products.sort((a, b) => a.added - b.added),
        };
      }

    case TYPES.FILTER_BY_BRANDS:
      return {
        ...state,
        filteredProducts:
          action.payload !== 'all'
            ? state.products.filter((product) => {
                return action.payload.includes(product.manufacturer);
              })
            : [],
      };

    case TYPES.CLEAR_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [],
      };

    case TYPES.FILTER_BY_TAGS:
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          return product.tags.some((r) => action.payload.includes(r));
        }),
      };
    default:
      return state;
  }
};
