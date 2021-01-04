import { SET_FAVORITE, REMOVE_FAVORITE } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;