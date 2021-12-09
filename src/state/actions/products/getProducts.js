import TYPES from '../../types';

export const getProducts = (itemType) => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/items`);
  const data = await res.json();
  if (data) {
    dispatch({
      payload: data.filter((p) => p.itemType === itemType),
      type: TYPES.GET_PRODUCTS,
    });
  }
};
