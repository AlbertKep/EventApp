import styled from "styled-components";

export const EventCard = styled.div`
  /* height: 250px; */
  width: 250px;
  /* background-color: #363434; */
  background-color: #000;
  border-radius: 10px;

  @media screen and (min-width: 992px) {
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: rotate(5deg);
    }
  }
`;

export const EventImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const EventInfo = styled.div`
  padding: 1em;

  h4 {
    color: #3137e7;
  }
`;

export const EventTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.7em 0;
`;

export const EventPlace = styled.h4`
  color: #3137e7;
  font-size: 1.1rem;
`;

export const EventDate = styled.div`
  color: #3137e7;
  margin: 0.5em 0;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #707070;
    font-size: 0.7rem;
    border-bottom: 1px solid #707070;
    padding-bottom: 0.3em;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }

  button {
    /* color: #3137e7; */
    /* border: 2px solid #3137e7; */
    /* padding: 0.5em 1em; */
  }
`;
