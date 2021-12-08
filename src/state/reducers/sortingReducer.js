import TYPES from '../types';

const initialState = {
  selected: null,
};

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SELECTED_SORTING:
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};
