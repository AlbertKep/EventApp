// import EventPhoto from "../../assets/images/anthony-delanoix.jpg";
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

export default function Event({ event }) {
  return (
    <EventCard>
      <EventImage>
        <img src={event.image} alt="event" />
      </EventImage>
      <EventInfo>
        <EventPlace>{event.place}</EventPlace>
        <EventDate>
          <span>{event.startDate}</span>
          {event.endDate && <span> - {event.endDate}</span>}
        </EventDate>
        <EventTitle>{event.name}</EventTitle>

        <Container>
          <span>45 people joined the event</span>
          <Button buttonStyles={buttonStyles}>Join</Button>
        </Container>
      </EventInfo>
    </EventCard>
  );
}
