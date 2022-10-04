import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: #707070;
    margin-top: 2.5em;
  }
`;

export const SearchEvent = styled.div`
  margin-top: 1.5em;
  width: 80%;
  display: flex;
  border-bottom: 1.5px solid #707070;

  @media screen and (min-width: 576px) {
    width: 60%;
    margin-top: 2em;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
    border-bottom: 2.5px solid #707070;
  }

  input {
    width: 100%;
    color: #707070;
    font-size: 1.2rem;
    font-weight: 700;
    outline: none;
    padding-bottom: 0.2em;

    @media screen and (min-width: 992px) {
      font-size: 1.5rem;
      padding-bottom: 0.5em;
    }
  }
`;

export const ImageContainer = styled.div`
  margin-right: 1em;
  padding-bottom: 0.2em;
`;

export const EventsContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-top: 3.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 1.5em 1em;
`;
