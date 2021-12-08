import TYPES from '../types';

const initialState = {
  basket: [],
  total: 0,
};

export const basketListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case TYPES.SET_TOTAL_PRICE:
      return {
        ...state,
        total: state.basket.reduce((acc, item) => {
          return acc + item.item.price * item.count;
        }, 0),
      };

    case TYPES.DECREASE_ITEM_COUNT:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: (item.count -= 1),
            };
          }
          return item;
        }),
      };

    case TYPES.INCREASE_ITEM_COUNT:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: (item.count += 1),
            };
          }
          return item;
        }),
      };

    case TYPES.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
