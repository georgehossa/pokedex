import styled from 'styled-components';
import { Link } from 'react-router-dom';

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