import styled from "styled-components";

export const HomeHeader = styled.header`
  height: 90vh;
  display: flex;

  img {
    width: 100%;
  }
`;

export const EventsContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 0.7fr 1.3fr;
    grid-template-rows: 1.4fr 0.6fr 0.8fr 1.2fr;
    gap: 0px 0px;
    grid-template-areas:
      "one one three"
      "one one four"
      "two two four"
      "two two five";
    width: 60%;
  }
`;

export const Event = styled.div`
  position: relative;
  grid-area: ${({ grid }) => grid};
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 100%;

  img {
    vertical-align: top;
    object-fit: cover;
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

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    padding: 0 1.5em;
  }

  @media screen and (min-width: 922px) {
    padding: 0 3em;
  }
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.5em;

  @media screen and (min-width: 1200px) {
    font-size: 4rem;
  }
`;

export const Arrow = styled.div`
  margin-top: 1.5em;
`;
