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
  /* justify-content: space-between; */
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  padding: 0 0.5em 1em;

  span {
    cursor: pointer;
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

// modal content
export const ModalContent = styled.div`
  padding: 1.5em 0.5em;
  width: 100%;
  color: #3137e7;

  button {
    margin: 1.5em 1em 0 0;
  }

  p {
    height: 100px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PeopleList = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5em;
  }
`;

export const Person = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* color: #3137e7; */
  font-weight: 700;
  margin-bottom: 1em;

  img {
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
  }
`;
