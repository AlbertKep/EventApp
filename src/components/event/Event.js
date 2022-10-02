import EventPhoto from "../../assets/images/anthony-delanoix.jpg";
import {
  EventCard,
  EventImage,
  EventInfo,
  EventTitle,
  EventPlace,
  EventDate,
  Container,
} from "./Event.styled";

import { Button } from "../button/Button.styled";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1em",
};

export default function Event() {
  return (
    <EventCard>
      <EventImage>
        <img src={EventPhoto} alt="event" />
      </EventImage>
      <EventInfo>
        <EventPlace>Kostrzyn, Poland</EventPlace>
        <EventDate>
          <span>Monday, August 04 2022</span> -
          <span>Monday, August 07 2022</span>
        </EventDate>
        <EventTitle>PolandRock Festival 2022</EventTitle>

        <Container>
          <span>45 people joined the event</span>
          <Button buttonStyles={buttonStyles}>Join</Button>
        </Container>
      </EventInfo>
    </EventCard>
  );
}
