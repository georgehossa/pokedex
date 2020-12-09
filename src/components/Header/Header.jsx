import React from 'react';
// import PropTypes from 'prop-types';
import { Container, FavLink, FavIcon } from './Header.styles';

const Header = () => (
  <Container>
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
