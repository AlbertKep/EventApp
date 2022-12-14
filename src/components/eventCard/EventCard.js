// import EventPhoto from "../../assets/images/anthony-delanoix.jpg";
import {
  EventCard,
  EventImage,
  EventInfo,
  EventTitle,
  EventPlace,
  EventDate,
  Container,
} from "./EventCard.styled";

import { Button } from "../button/Button.styled";

import { Link } from "react-router-dom";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1em",
};

export default function Event({ event }) {
  console.log(event);
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
        <EventTitle>
          <Link to={event.id} state={{ test: "test" }}>
            {event.name}
          </Link>
        </EventTitle>

        <Container>
          <span>45 people joined the event</span>
          <Button buttonStyles={buttonStyles}>Join</Button>
        </Container>
      </EventInfo>
    </EventCard>
  );
}
