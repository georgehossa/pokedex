import React from 'react';
import PropTypes from 'prop-types';
import { Container, InfoWrapper, ImageContainer, Id, Name, Type, LikeIcon, LikeIconActive } from './PokemonCard.styles';
import {setFavorite, removeFavorite} from '../../redux/actions';
import { connect } from 'react-redux';

const PokemonCard = ({id, name, type, image, imageB, isFavorite, setFavorite, removeFavorite}) => {
  const handleSetFavorite = () => {
    setFavorite({
      id, name, type, image, isFavorite
    })
  }

  const handleRemoveFavorite = (itemId) => {
    removeFavorite(itemId)
  }

  return (
    <Container>
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
          isFavorite ? <LikeIconActive onClick={() => handleRemoveFavorite(id)}/> : <LikeIcon onClick={handleSetFavorite}/>
        }
      </InfoWrapper>
    </Container>
  );
}

PokemonCard.propTypes = {
  setFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  imageB: PropTypes.string,
  isFavorite: PropTypes.bool,
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
}

export default connect(null, mapDispatchToProps)(PokemonCard);
