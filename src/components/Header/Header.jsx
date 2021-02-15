import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import {
  Container,
  FavLink,
  FavIcon,
  BackIcon,
  Counter } from './Header.styles';
import {useSelector} from 'react-redux';

const TotalFav = () => {
  const totalFavs = useSelector(state => state.favoritePokemons.myFavorites).length;
  return (
    <Counter>{totalFavs}</Counter>
  )
}

const BackButton = () => (
  <FavLink to="/" name="back">
    <BackIcon/>Back
  </FavLink>
);
const FavButton = () => {
  const totalFavs = useSelector(state => state.favoritePokemons.myFavorites).length;
  return (
    <FavLink name="fav" to="/favorites">
      Favorites { totalFavs > 0 && <TotalFav/>} <FavIcon/>
    </FavLink>
  )
};

const Header = () => {
  const location = useLocation();
  return(
    <Container location={location.pathname}>
      <Route exact path="/favorites" component={BackButton}/>
      <Route exact path="/" component={FavButton}/>
    </Container>
  );
}

export default Header;
