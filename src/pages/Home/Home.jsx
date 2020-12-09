import React, { useState} from 'react';
//import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import { GlobalStyles } from '../../assets/styles/globalStyles';
import { Container, CardContainer } from './Home.styles';
import axios from 'axios';

import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [resultPokemon, setResultPokemon] = useState({});
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <Header/>
        <SearchBar onChange={handleChange} onClick={handleClick} />
        <CardContainer>
          {
            Object.keys(resultPokemon).length !== 0 ? <PokemonCard id={resultPokemon.id} name={resultPokemon.name} type={resultPokemon.type} image={resultPokemon.image}/> : 'Catch them all'
          }
        </CardContainer>
      </Container>
    </ThemeProvider>
  );
};


// Home.propTypes = {
//   // bla: PropTypes.string,
// };

// Home.defaultProps = {
//   // bla: 'test',
// };

export default Home;
