import { GET_ALL_POKEMONS, FETCH_POKEMON_PENDING, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_ERROR, SET_SUGGESTED_POKEMONS } from '../../types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  allPokemons: [],
  suggestedPokemons: [],
  searchedPokemon: {},
}

const searchPokemons = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.allPokemons
      };
    case SET_SUGGESTED_POKEMONS:
      return {
        ...state,
        suggestedPokemons: action.sugestedPokemons
      };
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedPokemon: action.searchPokemon
      };
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default: return state;
  }
}

export default searchPokemons;
