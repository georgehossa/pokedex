import { combineReducers } from 'redux';
import favoritePokemons from './favorites.reducer';
import searchPokemons from './searchPokemons.reducer';


export default combineReducers({
  favoritePokemons,
  searchPokemons,
});