import React from 'react';
// import PropTypes from 'prop-types';
import { Container, FavLink, FavIcon } from './Header.styles';
import Logo from '../../assets/logo.png';

const Header = () => (
  <Container>
    <img src={Logo} alt="Pokedex"></img>
    <FavLink to='/favorites'>
      Favorites <FavIcon/>
    </FavLink>
  </Container>
);

// Header.propTypes = {
//   // props: PropTypes.any,
// };

// Header.defaultProps = {
//   // bla: 'test',
// };

export default Header;
