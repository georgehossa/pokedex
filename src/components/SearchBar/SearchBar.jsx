import React, {useRef, useEffect} from 'react';
import { Container, Input, Label, Suggestions, SuggestionItem, InputWraper } from './SearchBar.styles';
import Logo from '../../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, suggestedPokemons, fetchPokemon } from '../../redux/actions/searchPokemon.actions';


const SearchBar = () => {
  const refInput = useRef(null);
  const refSugestions = useRef(null);
  const refSugestionItem = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllPokemons()),[]);
  const allPokemons = useSelector(state => state.searchPokemons.allPokemons);
  const pokemonsSuggested = useSelector(state => state.searchPokemons.suggestedPokemons);

  const handleInputChange = (e) => {
    if(e.target.value) {
      let value = e.target.value.toLowerCase();
      const pokemons = allPokemons.filter(pokemon => pokemon.name.includes(value));
      return dispatch(suggestedPokemons(pokemons));
    } else {
      dispatch(suggestedPokemons([]));
    }
  };

  const handleClick = (pokemon) => {
    refInput.current.value = pokemon.name;
    dispatch(fetchPokemon(pokemon.url));
    dispatch(suggestedPokemons([]));
  }


  return (
    <Container>
        <img src={Logo} alt="Logo"></img>
        <Label>What Pokémon are you looking for?</Label>
        <InputWraper>
          <Input placeholder="Search a Pokémon" type="text" ref={refInput} onChange={handleInputChange}></Input>
          <Suggestions ref={refSugestions}>
            {
              pokemonsSuggested.length > 0
                ? pokemonsSuggested.map(pokemon => <SuggestionItem ref={refSugestionItem} key={`pokemon-${pokemon.name}`} onClick={() => handleClick(pokemon)}>{pokemon.name}</SuggestionItem>)
                : null
            }
          </Suggestions>
        </InputWraper>
    </Container>
  );
}


export default SearchBar;
