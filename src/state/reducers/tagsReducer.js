import TYPES from '../types';

const initialState = {
  tags: [],
  selectedTags: [],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    case TYPES.SET_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: [...state.selectedTags, action.payload],
      };

    case TYPES.REMOVE_FROM_TAGS:
      return {
        ...state,
        selectedTags: state.selectedTags.filter((tag) => tag !== action.payload),
      };
    default:
      return state;
  }
};
