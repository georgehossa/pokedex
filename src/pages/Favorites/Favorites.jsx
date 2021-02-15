import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './Favorites.styles';
import PokemonCard from '../../components/PokemonCard';

const Favorites = () => {
  const myFavorites = useSelector(state => state.favoritePokemons.myFavorites);

  return (
    <Container>
      { myFavorites.map(item => <PokemonCard key={item.id} pokemon={item}/>)}
    </Container>
  )
};

export default Favorites;
