import React from 'react';
import PropTypes from 'prop-types';
import { Container, InfoWrapper, Id, Name, LikeIcon, Type, ImageContainer, LikeIconActive } from './PokemonCard.styles';
import { setFavorite, removeFavorite } from '../../redux/actions/favoritePokemons.actions';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';

const PokemonCard = ({ pokemon }) => {
  const { id, name} = pokemon;
  const type = pokemon.types[0].type.name;
  const image = pokemon.sprites.other["official-artwork"].front_default;
  const imageB = pokemon.sprites.front_default;

  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.favoritePokemons.myFavorites);
  const loading = useSelector(state => state.searchPokemons.loading);

  return (
      <Container>
        {
          loading ?
          <ScaleLoader color="#FFF" loading={loading} size={150} /> :
            <>
              <ImageContainer>
                {
                  image ? <img src={image} alt={name}></img> : <img src={imageB} alt={name}></img>
                }
              </ImageContainer>
              <InfoWrapper>
                <Name>{name}</Name>
                <Id>#{id}</Id>
                <Type>{type}</Type>
                {
                  myFavorites.filter(favoriteItem => favoriteItem.id === id).length === 0 ?
                    <LikeIcon onClick={() => dispatch(setFavorite(pokemon))}/> : <LikeIconActive onClick={() => dispatch(removeFavorite(id))}/>
                }
              </InfoWrapper>
            </>
        }
      </Container>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.any,
};

export default PokemonCard;
