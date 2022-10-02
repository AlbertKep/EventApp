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

import { useState, useEffect, useMemo } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getDocsByCollectionId } from "../../firebase/api.service";
import Loading from "../../components/loading/Loading";

function Home() {
  const [events, setEvents] = useState([]);
  const { width } = useWindowSize();
  const gridIndex = ["one", "two", "three", "four", "five", "six"];

  useEffect(() => {
    (async () => {
      const results = await getDocsByCollectionId("events", { limit: 4 });
      setEvents(results);
    })();
  }, []);

  const filteredElements = useMemo(() => {
    return width < 992 ? events.slice(0, 3) : events;
  }, [events, width]);

  return (
    <>
      {events.length !== 0 && (
        <HomeHeader>
          <EventsContainer>
            {filteredElements.map((event, index) => (
              <Event key={event.id} grid={gridIndex[index]}>
                <ImageContainer>
                  <img src={event.image} alt="event" />
                </ImageContainer>
                <EventInfo>
                  <span>{event.name}</span>
                  <span>{event.date}</span>
                </EventInfo>
              </Event>
            ))}
          </EventsContainer>

          <HeadingContainer>
            <Heading>Create, Choose Your Dream Event</Heading>
            <Arrow>
              <img src={arrow} alt="arrow svg" />
            </Arrow>
          </HeadingContainer>
        </HomeHeader>
      )}
      {events.length === 0 && <Loading />}
    </>
  );
}

export default Home;
