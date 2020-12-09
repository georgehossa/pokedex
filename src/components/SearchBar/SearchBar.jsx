import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Input,Label } from './SearchBar.styles';

const SearchBar = ({onChange, onClick}) => {
  return (
    <Container>
        <Label>Search a Pokemon</Label>
        <Input type="text" onChange={onChange}></Input>
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
