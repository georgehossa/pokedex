import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 100;
`

export const Label = styled.label`
  display: block;
  font-weight: ${props => props.theme.font.weight.regular};
  margin: 1rem auto;
`

export const Button = styled.button`
  display: block;
  padding: 1rem 3rem;
  margin: 0 auto;
  font-weight: ${props => props.theme.font.weight.bold};
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.layout.borderRadius}px;
  box-shadow: none;
  color: white;
  cursor: pointer;
`
export const Input = styled.input`
  display: block;
  width: 80vw;
  margin: 1rem auto;
  padding: 1rem .5rem;
  font-weight: ${props => props.theme.font.weight.light};
  border: 1px solid grey;
  border-radius: ${props => props.theme.layout.borderRadius}px;
  text-align: center;
  &::placeholder {
    opacity: .5;
    text-align: center;
    font-weight: inherit;
  }
`