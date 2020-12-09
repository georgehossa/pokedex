import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 1rem auto;
`

export const Button = styled.button`
  display: block;
  padding: 1rem 3rem;
  margin: 0 auto;
  font-weight: bold;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 20px;
  box-shadow: none;
  color: white;
  cursor: pointer;
`
export const Input = styled.input`
  display: block;
  width: 80vw;
  margin: 1rem auto;
  padding: .5rem;
  font-weight: bold;
`