import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input, Label, Suggestions, SuggestionItem, InputWraper } from './SearchBar.styles';
import Logo from '../../assets/logo.png';


const SearchBar = ({onChange, onClick, setValue, suggestedPokemon}) => {
  const refInput = useRef(null);
  return (
    <Container>
        <img src={Logo} alt="Logo"></img>
        <Label>What Pokémon are you looking for?</Label>
        <InputWraper>
          <Input placeholder="Search a Pokémon" type="text" onChange={onChange} ref={refInput}></Input>
          <Suggestions>
            {
              suggestedPokemon.length > 0 ?
                suggestedPokemon.map(pokemon => <SuggestionItem key={pokemon} onClick={(e) => setValue(e, refInput)}>{pokemon}</SuggestionItem>) :
                null
            }
          </Suggestions>
        </InputWraper>
        <Button type="button" onClick={onClick}>Search</Button>
    </Container>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  setValue: PropTypes.func,
  suggestedPokemon: PropTypes.array,
};


export default SearchBar;
