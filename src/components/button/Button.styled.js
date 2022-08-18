import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.2em 0.4em;
  border: 3px #fff solid;
  color: #fff;

  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
    padding: 0.3em 0.5em;
  }
`;
