import { Link } from 'react-router-dom';
import { MdBookmarkBorder } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: 1rem;
`;

export const FavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  transition: .3s;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

export const FavIcon = styled(MdBookmarkBorder)`
  margin: 0 0 0 .5rem;
  font-size: 1.3rem;
`

