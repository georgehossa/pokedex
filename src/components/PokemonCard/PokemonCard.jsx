import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './PokemonCard.styles';

const PokemonCard = ({id, name, type, image}) => (
  <div className="PokemonCardWrapper">
    <h2>{name}</h2>
    <span>#{id}</span>
    <span>{type}</span>
    <img src={image} alt={name}></img>
  </div>
);

PokemonCard.propTypes = {
  // bla: PropTypes.string,
};

PokemonCard.defaultProps = {
  // bla: 'test',
};

export default PokemonCard;
