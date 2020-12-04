import React from 'react';
import { Container, InfoWrapper } from './PokemonCard.styles';

const PokemonCard = ({id, name, type, image}) => (
  <Container className="PokemonCardWrapper">
    <InfoWrapper>
      <h2>{name}</h2>
      <span>#{id}</span>
      <span>{type}</span>
    </InfoWrapper>
    <img src={image} alt={name}></img>
  </Container>
);

export default PokemonCard;
