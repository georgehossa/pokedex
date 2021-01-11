import { SET_FAVORITE, REMOVE_FAVORITE } from '../../types';

export const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload,
});

export const removeFavorite = payload => ({
  type: REMOVE_FAVORITE,
  payload,
});