import { Link } from 'react-router-dom';
import { MdBookmarkBorder, MdKeyboardBackspace } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: ${props => props.location === '/' ? 'flex-end' : 'flex-start'};
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: 1rem;
`;

export const FavLink = styled(Link)`
  position: relative;
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
  font-size: 1.5rem;
`

export const BackIcon = styled(MdKeyboardBackspace)`
  margin: 0 .5rem 0 0;
  font-size: 1.5rem;
`

export const Counter = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 14px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border-radius: 50%;
`

