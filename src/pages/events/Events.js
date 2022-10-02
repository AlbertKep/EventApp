import {
  Container,
  SearchEvent,
  ImageContainer,
  EventsContainer,
} from "./Events.styled";

import Event from "../../components/event/Event";
// svg
import Magnifier from "../../assets/svg/magnifier.svg";

function Events() {
  return (
    <Container>
      <SearchEvent>
        <ImageContainer>
          <img src={Magnifier} alt="magnifier" />
        </ImageContainer>

        <input
          type="text"
          id="eventName"
          name="eventName"
          placeholder="Looking for a event?"
        />
      </SearchEvent>

      <EventsContainer>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </EventsContainer>
    </Container>
  );
}

export default Events;
