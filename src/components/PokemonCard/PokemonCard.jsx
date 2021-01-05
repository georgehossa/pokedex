import React from 'react';
import PropTypes from 'prop-types';
import { Container, InfoWrapper, ImageContainer, Id, Name, Type, LikeIcon, LikeIconActive } from './PokemonCard.styles';
import {setFavorite} from '../../redux/actions';
import { connect } from 'react-redux';

const PokemonCard = (props) => {
  const {id, name, type, image, isFavorite} = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, name, type, image,
    })
  }
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt={name}></img>
      </ImageContainer>
      <InfoWrapper>
        <Name>{name}</Name>
        <Id>#{id}</Id>
        <Type>{type}</Type>
        {
          isFavorite ? <LikeIconActive/> : <LikeIcon onClick={handleSetFavorite}/>
        }
        <LikeIcon onClick={handleSetFavorite}/>
      </InfoWrapper>
    </Container>
  );
}

PokemonCard.propTypes = {
  setFavorite: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  isFavorite: PropTypes.bool,
};

const mapDispatchToProps = {
  setFavorite,
}

export default connect(null, mapDispatchToProps)(PokemonCard);
