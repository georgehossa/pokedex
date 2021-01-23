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
  const [suggestedPokemon, setSuggestedPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon/';

  const handleChange = (e) => {
      if(e.target.value) {
        setSuggestedPokemon(allPokemon.filter(pokemon => pokemon.toLowerCase().includes(e.target.value)));
        console.log(suggestedPokemon);
      } else {
        setSuggestedPokemon([]);
      }
      setInputPokemon(e.target.value);
  }

  const setValue = (e, ref) => {
    let pokemon = e.target.innerText;
    ref.current.value = pokemon;
    setInputPokemon(ref.current.value);
    setSuggestedPokemon([]);
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
          imageB: data.sprites.front_default,
        });
        console.clear();
    }).catch (error => {
      error.response.status === 404 ? console.log('intenta de nuevo') : console.log('Error:', error.message)
    })
  }

  useEffect(() => {
    axios.get(`${URL}?limit=2000`)
      .then(res => {
        const allPokemonCount = res.data.count;
        axios.get(`${URL}?limit=${allPokemonCount}`)
          .then(response => setAllPokemon(response.data.results.map(pokemon => pokemon.name)));
      });
    return () => {
      null
    }
  }, [allPokemon])

  return (
      <Container>
        <SearchBar onChange={handleChange} onClick={handleClick} setValue={setValue} suggestedPokemon={suggestedPokemon} />
        <CardContainer>
          {
            Object.keys(resultPokemon).length !== 0 ? <PokemonCard id={resultPokemon.id} name={resultPokemon.name} type={resultPokemon.type} image={resultPokemon.image} imageB={resultPokemon.imageB} isFavorite={checkFavorite(myFavorites, resultPokemon.id)}/> : null
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
