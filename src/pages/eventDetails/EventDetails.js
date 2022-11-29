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
  ModalContent,
  PeopleList,
  Person,
} from "./EventDetails.styled";
import { Button } from "../../components/button/Button.styled";

//components
import Modal from "../../components/modal/Modal";

// images
import personeOne from "../../assets/images/aiony-haust-unsplash.jpg";
import personeTwo from "../../assets/images/ian-dooley-unsplash.jpg";
import personeThree from "../../assets/images/michael-dam-unsplash.jpg";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1.5em",
};

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [joinedPeople, setJoinedPeople] = useState([
    { img: personeOne, name: "Blert Kępski", id: "23" },
    { img: personeTwo, name: "Ana Kępski", id: "33" },
    { img: personeThree, name: "Kasia Kępski", id: "53" },
    { img: personeTwo, name: "Ewa Kępski", id: "73" },
    { img: personeOne, name: "Ela Kępski", id: "03" },
    { img: personeTwo, name: "Ana Kępski", id: "323" },
    { img: personeThree, name: "Kasia Kępski", id: "753" },
    { img: personeTwo, name: "Ewa Kępski", id: "773" },
    { img: personeOne, name: "Ela Kępski", id: "013" },
    { img: personeTwo, name: "Ana Kępski", id: "33" },
    { img: personeThree, name: "Kasia Kępski", id: "53" },
    { img: personeTwo, name: "Ewa Kępski", id: "73" },
    { img: personeOne, name: "Ela Kępski", id: "03" },
  ]);

  const handleClick = () => setShowModal(!showModal);

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
              <span onClick={handleClick}>
                {joinedPeople.length} people joined the event
              </span>
              <Button buttonStyles={buttonStyles}>Join</Button>
            </ButtonContainer>
            {showModal && (
              <Modal>
                <ModalContent>
                  {joinedPeople.length !== 0 && (
                    <PeopleList>
                      {joinedPeople.map((person) => (
                        <Person key={person.id}>
                          <img src={person.img} alt="person" />
                          <p>{person.name}</p>
                        </Person>
                      ))}
                    </PeopleList>
                  )}
                  {joinedPeople.length === 0 && (
                    <p>Nobody is attending the event yet</p>
                  )}

                  <ButtonContainer justifyContent="flex-end">
                    <Button buttonStyles={buttonStyles} onClick={handleClick}>
                      Close
                    </Button>
                  </ButtonContainer>
                </ModalContent>
              </Modal>
            )}
          </EventInfo>
        </>
      )}
    </Container>
  );
}
