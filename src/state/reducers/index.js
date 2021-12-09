import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { basketListReducer } from './basketListReducer';
import { sortingReducer } from './sortingReducer';
import { brandsReducer } from './brandsReducer';
import { tagsReducer } from './tagsReducer';
import { paginationReducer } from './paginationReducer';

export default combineReducers({
  products: productsReducer,
  basketList: basketListReducer,
  sorting: sortingReducer,
  brands: brandsReducer,
  tags: tagsReducer,
  pagination: paginationReducer,
});
