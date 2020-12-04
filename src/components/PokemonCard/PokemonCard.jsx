import React from 'react';
import { Container, InfoWrapper, ImageContainer, Id, Name, Type } from './PokemonCard.styles';

const PokemonCard = ({id, name, type, image}) => (
  <Container className="PokemonCardWrapper">
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

export default PokemonCard;
