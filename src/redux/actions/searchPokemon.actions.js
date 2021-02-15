import {
  GET_ALL_POKEMONS,
  SET_SUGGESTED_POKEMONS,
  FETCH_POKEMON_PENDING,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR } from '../../types';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getAllPokemons = () => async (dispatch) => {
  const fetchCount = await fetch(`${URL}`);
  const getCount = await fetchCount.json();
  const totalCount = await getCount?.count;
  const fetchAllPokemons = await fetch(`${URL}?limit=${totalCount}`);
  const getAllPokemons = await fetchAllPokemons.json();
  const allPokemons = await getAllPokemons.results
  dispatch({
      type: GET_ALL_POKEMONS,
      allPokemons: allPokemons,
  })
};

export const fetchPokemon = (pokemonUrl) => async (dispatch) => {
  try {
    dispatch(fetchPokemonPending())
    const response = await fetch(pokemonUrl);
    const data = await response.json();
    dispatch(fetchPokemonSuccess(data))
  } catch (err) {
    dispatch(fetchPokemonError(err))
  }
}

export const suggestedPokemons = sugestedPokemons => ({
  type: SET_SUGGESTED_POKEMONS,
  sugestedPokemons: sugestedPokemons,
});

export const fetchPokemonPending = () => ({
    type: FETCH_POKEMON_PENDING,
});

export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    searchPokemon: pokemon,
});

export const fetchPokemonError = (error) => ({
    type: FETCH_POKEMON_ERROR,
    error: error,
});