import TYPES from '../../types';

export const getProducts = (itemType) => async (dispatch) => {
  const res = await fetch(`https://marketapp-api.herokuapp.com/items`);
  const data = await res.json();
  if (data) {
    dispatch({
      payload: data.filter((p) => p.itemType === itemType),
      type: TYPES.GET_PRODUCTS,
    });
  }
};
