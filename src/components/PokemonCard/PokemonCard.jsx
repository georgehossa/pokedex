import React from 'react';
import PropTypes from 'prop-types';
import { Container, InfoWrapper, ImageContainer, Id, Name, Type } from './PokemonCard.styles';

const PokemonCard = ({id, name, type, image}) => (
  <Container>
    <ImageContainer>
      <img src={image} alt={name}></img>
    </ImageContainer>
    <InfoWrapper>
      <Name>{name}</Name>
      <Id>#{id}</Id>
      <Type>{type}</Type>
    </InfoWrapper>
  </Container>
);

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default PokemonCard;
