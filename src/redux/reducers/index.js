import { SET_FAVORITE, REMOVE_FAVORITE } from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(item => item.id === action.payload.id).length === 0 ? [...state.myFavorites, action.payload] : [...state.myFavorites],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

export default reducer;