import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

export const Container = styled.div`
  display: block;
`;

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