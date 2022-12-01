import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: 2em;
  padding: 1em 0.75em;

  @media screen and (min-width: 768px) {
    padding: 1em 1.75em;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    margin: 1em 0;
  }
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: auto;
`;

export const ContentList = styled.ul`
  text-align: center;
  margin-top: 1.5em;
`;

export const ContentItem = styled.li`
  line-height: 1.75em;
  text-align: center;
  margin-bottom: 3.5em;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "one two three";
  }
`;

export const ImageContainer = styled.div`
  grid-area: two;
  margin: 2em 0;

  img {
    @media screen and (min-width: 768px) {
      width: 100px;
    }

    @media screen and (min-width: 966px) {
      width: 150px;
    }
  }
`;

export const TextContainer = styled.div`
  position: relative;
  margin: auto;
  grid-area: ${({ area }) => area};
  padding-left: 1em;

  @media screen and (min-width: 768px) {
    border-left: 2px solid #3137e7;
  }
`;
export const Text = styled.p`
  max-width: 400px;
  font-weight: 700;
  margin: auto;
  text-align: left;
`;
