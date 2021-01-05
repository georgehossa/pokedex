import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: block;
  width: 80vw;
  margin: 0 auto;
  padding: 2rem;
  border-radius: ${props => props.theme.layout.borderRadius}px;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  img {
    position: relative;
    z-index: 2;
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    background-color: white;
    border-radius: 50%;
  }
`

export const InfoWrapper = styled.section`
  display: block;
  text-align: center;
  color: white;
`;

export const Name = styled.h2`
  margin: .5rem auto;
  text-transform: capitalize;
`

export const Id = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: block;
  font-weight: ${props => props.theme.font.weight.regular};
  opacity: .6;
`
export const Type = styled.span`
  display: block;
  font-weight: ${props => props.theme.font.weight.regular};
  text-transform: capitalize;
  opacity: .6;
`

export const LikeIconActive = styled(MdFavorite)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`

export const LikeIcon = styled(MdFavoriteBorder)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`


