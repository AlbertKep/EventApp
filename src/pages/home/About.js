//svg
import authPerson from "../../assets/svg/icon-auth.svg";
import plus from "../../assets/svg/icon-plus.svg";
import party from "../../assets/svg/icon-party.svg";

//styled components
import {
  AboutContainer,
  Heading,
  Content,
  ContentList,
  ContentItem,
  ImageContainer,
  TextContainer,
  Text,
} from "./About.styled";

import { useMemo } from "react";

function About() {
  const contentItemConfig = useMemo(
    () => [
      {
        img: authPerson,
        alt: "auth person",
        gridArea: "one",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: plus,
        alt: "auth person",
        gridArea: "three",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        img: party,
        alt: "auth person",
        gridArea: "one",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
    []
  );

  return (
    <AboutContainer>
      <Heading>How it works?</Heading>
      <Content>
        <ContentList>
          {contentItemConfig.map((item, index) => (
            <ContentItem key={index}>
              <ImageContainer>
                <img src={item.img} alt={item.alt} />
              </ImageContainer>
              <TextContainer area={item.gridArea}>
                <Text>{item.text}</Text>
              </TextContainer>
            </ContentItem>
          ))}
        </ContentList>
      </Content>
    </AboutContainer>
  );
}

export default About;
