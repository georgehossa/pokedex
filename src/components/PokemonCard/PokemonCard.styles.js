import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-template-areas: "info image";
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export const InfoWrapper = styled.section`
  display: block;
  grid-area: info;
  text-align: left;
  span {
    display: block;
  }
`;


