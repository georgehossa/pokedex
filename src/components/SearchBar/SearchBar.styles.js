import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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

export const InputWraper = styled.div`
  position: relative;
`


export const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 3;
  width: 80vw;
  margin: 0 auto;
  list-style: none;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0 0 0 / 10%);
  overflow-y: auto;
  max-height: 50vh;
  border-radius: 0 0 1rem 1rem;
  opacity: .99;
`

export const SuggestionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(0 0 0 / 10%);
  font-size: 14px;
  transition: .2s linear;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`