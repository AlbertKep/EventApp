import {
  Container,
  SearchEvent,
  ImageContainer,
  EventsContainer,
} from "./Events.styled";

import EventCard from "../../components/eventCard/EventCard";
// svg
import Magnifier from "../../assets/svg/magnifier.svg";

//services
import { getDocsByCollectionId } from "../../firebase/api.service";

import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";

function Events() {
  const [events, setEvents] = useState([]);
  const [typedEventName, setTypedEventName] = useState("");

  useEffect(() => {
    (async () => {
      const results = await getDocsByCollectionId("events", { limit: 10 });
      setEvents(results);
    })();
  }, []);

  const filteredEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(typedEventName.toLowerCase());
  });

  const handleInput = (e) => {
    setTypedEventName(e.target.value);
  };

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
          onChange={handleInput}
          value={typedEventName}
        />
      </SearchEvent>

      <EventsContainer>
        {filteredEvents.length !== 0 &&
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

        {events.length === 0 && <Loading />}
      </EventsContainer>
      {filteredEvents.length === 0 && <h2>There are no events here ;(</h2>}
    </Container>
  );
}

export default Events;
