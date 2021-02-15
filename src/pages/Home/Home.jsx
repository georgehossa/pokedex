import React from 'react';
import { Container, CardContainer } from './Home.styles';
import { useSelector } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const currentPokemon = useSelector( state => state.searchPokemons.searchedPokemon);

  return (
      <Container>
        <SearchBar />
        <CardContainer>
          {
            Object.keys(currentPokemon).length !== 0 ?
            <PokemonCard pokemon={currentPokemon} /> : null
          }
        </CardContainer>
      </Container>
  );
};

export default Home;
