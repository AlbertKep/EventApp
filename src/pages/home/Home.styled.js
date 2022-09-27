import styled from "styled-components";

export const HomeHeader = styled.header`
  height: 90vh;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`;

export const EventsContainer = styled.div`
  height: -webkit-fill-available;
  /* width: 100%; */
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "one one"
    "two two"
    "three three"; */

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.75em;
    grid-template-areas:
      "one two"
      "three four";
    width: 60%;
  }
`;

export const Event = styled.div`
  position: relative;
  grid-area: ${({ grid }) => grid};
  cursor: pointer;
  overflow: hidden;
  height: 33%;

  @media screen and (min-width: 992px) {
    height: 100%;
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 100%;

  img {
    vertical-align: top;
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* max-width: 100%;
    max-height: 100%; */
    transition: all 0.5s ease-in-out;
  }
`;

export const EventInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.6;
  }
  span {
    position: relative;
    display: block;
    padding: 0.4em 0.7em;
  }
`;
export const HeadingContainer = styled.div`
  display: none;
  flex-basis: 60%;

  img {
    width: 100%;
  }

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1.5em;
  }

  @media screen and (min-width: 992px) {
    padding: 0 3em;
  }
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.5em;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const Arrow = styled.div`
  margin-top: 1.5em;
`;
