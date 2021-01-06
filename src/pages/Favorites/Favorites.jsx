import React from 'react';
import { connect } from 'react-redux'
import { Container } from './Favorites.styles';
import PokemonCard from '../../components/PokemonCard'
import PropTypes from 'prop-types';

const Favorites = ({ myFavorites }) => (
  <Container>
    { myFavorites.map(item => <PokemonCard key={item.id} {...item} isFavorite={true}/>)}
  </Container>
);

Favorites.propTypes = {
  myFavorites: PropTypes.array,
};


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
