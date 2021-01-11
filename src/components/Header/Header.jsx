import React from 'react';
import { Route, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  Container,
  FavLink,
  FavIcon,
  BackIcon } from './Header.styles';

const BackButton = () => (
  <FavLink to="/" name="back"><BackIcon/>Back</FavLink>
);
const FavButton = () => (
  <FavLink name="fav" to="/favorites">Favorites <FavIcon/></FavLink>
);

const Header = () => {
  const location = useLocation();
  return(
    <Container location={location.pathname}>
      <Route exact path="/favorites" component={BackButton}/>
      <Route exact path="/" component={FavButton}/>
    </Container>
  );
}

// Header.propTypes = {
//   // props: PropTypes.any,
// };

// Header.defaultProps = {
//   // bla: 'test',
// };

export default Header;
