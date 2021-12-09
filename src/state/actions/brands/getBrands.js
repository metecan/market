import TYPES from '../../types';

export const getBrands = () => async (dispatch) => {
  const res = await fetch(`https://marketapp-api.herokuapp.com/companies`);
  const data = await res.json();
  if (data) {
    dispatch({
      payload: data,
      type: TYPES.GET_BRANDS,
    });
  }
};
