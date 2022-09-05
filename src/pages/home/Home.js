import React from "react";

// styled components
import {
  HomeHeader,
  ImageContainer,
  EventsContainer,
  Event,
  EventInfo,
  HeadingContainer,
  Heading,
  Arrow,
} from "./Home.styled";

// svg
import arrow from "../../assets/svg/arrow.svg";
// images
import eventOne from "../../assets/images/anthony-delanoix.jpg";
import eventTwo from "../../assets/images/ian-dooley.jpg";
import eventThree from "../../assets/images/samantha-gades.jpg";
function Home() {
  return (
    <HomeHeader>
      <EventsContainer>
        <Event grid="one">
          <ImageContainer>
            <img src={eventOne} alt="event" />
          </ImageContainer>
          <EventInfo>
            <span>Opener Festival</span>
            <span>07.07 - 10.07.22</span>
          </EventInfo>
        </Event>

        <Event grid="two">
          <ImageContainer>
            <img src={eventTwo} alt="event" />
          </ImageContainer>
          <EventInfo>
            <span>Opener Festival</span>
            <span>07.07 - 10.07.22</span>
          </EventInfo>
        </Event>

        <Event grid="three">
          <ImageContainer>
            <img src={eventThree} alt="event" />
          </ImageContainer>
          <EventInfo>
            <span>Opener Festival</span>
            <span>07.07 - 10.07.22</span>
          </EventInfo>
        </Event>

        <Event grid="four">
          <ImageContainer>
            <img src={eventThree} alt="event" />
          </ImageContainer>
          <EventInfo>
            <span>Opener Festival</span>
            <span>07.07 - 10.07.22</span>
          </EventInfo>
        </Event>

        <Event grid="five">
          <ImageContainer>
            <img src={eventOne} alt="event" />
          </ImageContainer>
          <EventInfo>
            <span>Opener Festival</span>
            <span>07.07 - 10.07.22</span>
          </EventInfo>
        </Event>
      </EventsContainer>
      <HeadingContainer>
        <Heading>Create, Choose Your Dream Event</Heading>
        <Arrow>
          <img src={arrow} alt="arrow svg" />
        </Arrow>
      </HeadingContainer>
    </HomeHeader>
  );
}

export default Home;
