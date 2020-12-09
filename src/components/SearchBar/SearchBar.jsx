import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input,Label } from './SearchBar.styles';
import Logo from '../../assets/logo.png';

const SearchBar = ({onChange, onClick}) => {
  return (
    <Container>
        <img src={Logo} alt="Logo"></img>
        <Label>What Pokémon are you looking for?</Label>
        <Input placeholder="Search a Pokémon" type="text" onChange={onChange}></Input>
        <Button type="button" onClick={onClick}>Search</Button>
    </Container>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

SearchBar.defaultProps = {
  // bla: 'test',
};

export default SearchBar;
