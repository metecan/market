import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { basketListReducer } from './basketListReducer';
import { sortingReducer } from './sortingReducer';
import { brandsReducer } from './brandsReducer';

export default combineReducers({
  products: productsReducer,
  basketList: basketListReducer,
  sorting: sortingReducer,
  brands: brandsReducer,
});
