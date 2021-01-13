import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Container, CardContainer } from './Home.styles';
import { connect } from 'react-redux';
import checkFavorite from '../../utils/checkFavorite'
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';

const Home = ({ myFavorites }) => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [resultPokemon, setResultPokemon] = useState({});
  const [allPokemon, setAllPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon/';

  const handleChange = (e) => {
      setInputPokemon(e.target.value);
  }

  const handleClick = () => {
    axios.get(`${URL}${inputPokemon.toLowerCase()}`)
      .then(res => {
        const data = res.data;
        setResultPokemon({
          ...resultPokemon,
          id: data.id,
          name: data.name,
          type: data.types[0].type.name,
          image: data.sprites.other.dream_world.front_default,
        });
        console.clear();
    }).catch (error => {
      error.response.status === 404 ? console.log('intenta de nuevo') : console.log('Error:', error.message)
    })
  }

  useEffect(() => {
    axios.get(`${URL}?limit=2000`).then(res => setAllPokemon(res.data.results.map(pokemon => pokemon.name)));
    return () => {
      null
    }
  }, [allPokemon])

  return (
      <Container>
        <SearchBar onChange={handleChange} onClick={handleClick} suggestionData={allPokemon} />
        <CardContainer>
          {
            Object.keys(resultPokemon).length !== 0 ? <PokemonCard id={resultPokemon.id} name={resultPokemon.name} type={resultPokemon.type} image={resultPokemon.image} isFavorite={checkFavorite(myFavorites, resultPokemon.id)}/> : null
          }
        </CardContainer>
      </Container>
  );
};


Home.propTypes = {
  myFavorites: PropTypes.array,
};

const mapStateToProps = (reducers) => {
  return reducers.favoritesReducer;
}

export default connect(mapStateToProps, null)(Home);
