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
import {
  getDocsByCollectionId,
  getImageFromStorage,
} from "../../firebase/api.service";
import { ref, getDownloadURL } from "firebase/storage";

import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import { storage } from "../../firebase/config";

function Events() {
  const [events, setEvents] = useState([]);
  const [isDataDownloaded, setIsDataDownloaded] = useState(false);
  const [typedEventName, setTypedEventName] = useState("");

  // get events
  useEffect(() => {
    (async () => {
      const results = await getDocsByCollectionId("events", { limit: 10 });
      setEvents(results);
      setIsDataDownloaded(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const newEvents = [...events];

      const imagesPromises = [];

      newEvents.forEach((event) => {
        const imageRef = ref(storage, `photos/${event.photoId}`);
        imagesPromises.push(getDownloadURL(imageRef));
      });

      const urls = await Promise.all(imagesPromises);

      urls.forEach((url, index) => {
        newEvents[index].image = url;
      });

      setEvents(newEvents);
    })();
  }, [isDataDownloaded]);

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
