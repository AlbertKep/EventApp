import styled from "styled-components";

export const Container = styled.section`
  height: 75vh;
  margin: 1em;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const EventImage = styled.div`
  /* margin: auto; */
  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      max-height: fit-content;
      height: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    height: 100%;
  }
`;
export const EventInfo = styled.div`
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    padding-left: 1.5em;
  }
`;

export const EventName = styled.h1`
  margin: 1em 0 0.5em;
  font-weight: 800;
  font-size: 1.75rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const EventDescription = styled.p`
  max-height: 250px;
  line-height: 1.7em;
  padding: 0 0.3em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5em;
  }
`;

export const EventDate = styled.div`
  margin: 0.7em 0 1em;
  font-weight: 700;
  line-height: 1.5em;

  span {
    display: inline-block;
    color: #3137e7;
    margin: 0.2em 0.8em 0 0;
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em 1em;

  span {
    color: #707070;
    font-size: 1rem;
    border-bottom: 1px solid #707070;
    padding-bottom: 0.3em;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;
