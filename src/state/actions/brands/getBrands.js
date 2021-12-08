import TYPES from '../../types';

export const getBrands = () => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/companies`);
  const data = await res.json();
  if (data) {
    dispatch({
      payload: data.companies,
      type: TYPES.GET_BRANDS,
    });
  }
};
