import React, { useState } from 'react';
import { Container, Header, SearchBar, Label, Input, Button, CardContainer } from './App.styles';
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
      <Header>
        <img src={Logo} alt="Pokedex"></img>
      </Header>
      <SearchBar>
        <Label>Search a Pokemon</Label>
        <Input type="text" onChange={(e) => setInputPokemon(e.target.value)}></Input>
        <Button type="button" onClick={handleSubmit}>Search</Button>
      </SearchBar>
      <CardContainer>
        {
          Object.keys(resultPokemon).length !== 0 ? <PokemonCard id={resultPokemon.id} name={resultPokemon.name} type={resultPokemon.type} image={resultPokemon.image}/> : 'Catch them all'
        }
      </CardContainer>
    </Container>
  );
}

export default App;
