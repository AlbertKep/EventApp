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
// import eventOne from "../../assets/images/anthony-delanoix.jpg";
// import eventTwo from "../../assets/images/ian-dooley.jpg";
// import eventThree from "../../assets/images/samantha-gades.jpg";

import { useState, useEffect, useMemo } from "react";
import { useWindowSize } from "../../components/hooks/useWindowSize";
import { getDocsByCollectionId } from "../../firebase/api.service";

function Home() {
  //const [size, setSize] = useState(null);
  const [events, setEvents] = useState([]);
  //const [filteredEvents, setFilteredEvents] = useState(null);

  const { width } = useWindowSize();
  const gridIndex = ["one", "two", "three", "four", "five", "six"];

  // const getEvents = useCallback(async () => {
  //   const eventsRef = collection(db, "events");
  //   try {
  //     const eventsSnap = await getDocs(eventsRef);
  //     let result = [];
  //     eventsSnap.docs.forEach((doc) => {
  //       result.push({ id: doc.id, ...doc.data() });
  //     });
  //     setEvents(result);
  //     console.log(events);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  useEffect(() => {
    // const eventsRef = collection(db, "events");
    // const q = query(eventsRef, limit(5));
    // getDocs(q)
    //   .then((snapshot) => {
    //     let result = [];
    //     snapshot.docs.forEach((doc) => {
    //       result.push({ id: doc.id, ...doc.data() });
    //     });
    //     setEvents(result);
    //     // setFilteredEvents(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    (async () => {
      const results = await getDocsByCollectionId("events", { limit: 4 });
      setEvents(results);
    })();
  }, []);

  const filteredElements = useMemo(() => {
    return width < 992 ? events.slice(0, 3) : events;
  }, [events, width]);

  // useEffect(() => {
  //   const screenSize = () => {
  //     console.log("jestm tu :D");
  //     const width = window.innerWidth;
  //     setSize(width);
  //   };
  //   if (events && size < 992) {
  //     setFilteredEvents(events.slice(0, 3));
  //   } else {
  //     setFilteredEvents(events);
  //   }
  //   window.addEventListener("resize", screenSize);
  //   return () => {
  //     window.removeEventListener("resize", screenSize);
  //   };
  // }, [size, events]);

  // useEffect(()=> {
  //   ///ustaw rozmiar
  // }, [zmiane rozmiaru])

  // const filterEvents = useCallback(() => {
  //   console.log("running");
  //   if (events !== null && size < 992) {
  //     setFilteredEvents(events.slice(0, 3));
  //     console.log(filteredEvents);
  //     // setEvents(events.slice(0, 3));
  //   } else {
  //     setFilteredEvents(events);
  //   }

  //   console.log(filteredEvents);
  // }, []);

  return (
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
        {/* <Event grid="one">
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
        </Event> */}
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
