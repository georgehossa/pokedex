import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Container, BackButton } from './Favorites.styles';
//import PropTypes from 'prop-types';

const Favorites = () => (
  <Container>
    <BackButton to="/"> <MdKeyboardBackspace/> Back</BackButton>
  </Container>
);

// Favorites.propTypes = {
//   // bla: PropTypes.string,
// };

// Favorites.defaultProps = {
//   // bla: 'test',
// };

export default Favorites;
