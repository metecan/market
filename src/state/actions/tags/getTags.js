import TYPES from '../../types';

export const getTags = (products) => async (dispatch) => {
  const tags = [];

  products.map((item) => {
    const filteredTags = item.tags.filter((tag) => !tags.includes(tag));
    return tags.push(...filteredTags);
  });

  if (tags.length > 0) {
    dispatch({
      payload: tags,
      type: TYPES.SET_TAGS,
    });
  }
};
