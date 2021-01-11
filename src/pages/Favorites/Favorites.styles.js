import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

export const Container = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  @media (min-width: 1440px) {
    grid-template: auto / repeat(auto-fit, 300px);
  }
`

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: grey;
  padding: .5rem 0;
`
export const BackButtonIcon = styled(MdKeyboardBackspace)`
  margin-right: .5rem;
`