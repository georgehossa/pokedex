import React, { useState } from 'react';
import { Container } from './App.styles';
import axios from 'axios';
import Logo from './assets/logo.png';

import PokemonCard from './components/PokemonCard';

const App = () => {
  const [inputPokemon, setInputPokemon] = useState('');
  const [resultPokemon, setResultPokemon] = useState({});
  const URL = 'https://pokeapi.co/api/v2/pokemon/';
  const handleSubmit = () => {
    axios.get(`${URL}${inputPokemon}`)
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
    <Container>
      <img src={Logo} alt="Pokedex"></img>
      <label>Search pokemon</label>
      <input type="text" onChange={(e) => setInputPokemon(e.target.value)}></input>
      <button type="button" onClick={handleSubmit}>Search</button>
      {
        Object.keys(resultPokemon).length !== 0 ? <PokemonCard id={resultPokemon.id} name={resultPokemon.name} type={resultPokemon.type} image={resultPokemon.image}/> : 'Catch them all'
      }
    </Container>
  );
}

export default App;
