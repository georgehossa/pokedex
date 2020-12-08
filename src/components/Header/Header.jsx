import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from './Header.styles';
import Logo from '../../assets/logo.png';

const Header = () => (
  <Container>
    <img src={Logo} alt="Pokedex"></img>
  </Container>
);

// Header.propTypes = {
//   // props: PropTypes.any,
// };

// Header.defaultProps = {
//   // bla: 'test',
// };

export default Header;
