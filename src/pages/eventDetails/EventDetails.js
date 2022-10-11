import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//service
import { getSingleCollectionById } from "../../firebase/api.service";

// styles
import {
  Container,
  EventImage,
  EventInfo,
  EventName,
  EventDescription,
  EventDate,
  ButtonContainer,
} from "./EventDetails.styled";
import { Button } from "../../components/button/Button.styled";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1.5em",
};

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getSingleCollectionById(eventId);
      setEvent(result);
      console.log(event);
    })();
  }, []);
  return (
    <Container>
      {event && (
        <>
          <EventImage>
            <img src={event.image} alt="event" />
          </EventImage>
          <EventInfo>
            <EventName>{event.name}</EventName>
            <EventDate>
              <div>
                <span>When?</span>
                {event.startDate}
                {event.endDate ? <> - {event.endDate}</> : ""}
              </div>
              <div>
                <span>Where?</span>
                {event.place}
              </div>
            </EventDate>
            <EventDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </EventDescription>
            <ButtonContainer>
              <span>45 people joined the event</span>
              <Button buttonStyles={buttonStyles}>Join</Button>
            </ButtonContainer>
          </EventInfo>
        </>
      )}
    </Container>
  );
}
