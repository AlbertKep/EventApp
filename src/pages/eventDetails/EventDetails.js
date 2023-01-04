import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//service
import {
  getSingleCollectionById,
  getJoinedPeopleCollection,
  getImageFromStorage,
} from "../../firebase/api.service";

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

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1.5em",
};

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(!showModal);

  useEffect(() => {
    (async () => {
      const result = await getSingleCollectionById(eventId);
      const resultWithAddedImg = await getImageFromStorage(result.photoId);
      const resultWithJoinedPeople = await getJoinedPeopleCollection(eventId);

      setEvent({
        ...result,
        photoId: resultWithAddedImg,
        joinedPeople: resultWithJoinedPeople,
      });
    })();
  }, []);

  return (
    <Container>
      {event && (
        <>
          <EventImage>
            <img src={event.photoId} alt="event" />
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
                {event.location}
              </div>
            </EventDate>
            <EventDescription>{event.description}</EventDescription>
            <ButtonContainer>
              <span onClick={handleClick}>
                {event.joinedPeople.length} people joined the event
              </span>
              <Button buttonStyles={buttonStyles}>Join</Button>
            </ButtonContainer>
            {showModal && (
              <Modal>
                <ModalContent>
                  {event.joinedPeople.length !== 0 && (
                    <PeopleList>
                      {event.joinedPeople.map((person) => (
                        <Person key={person.id}>
                          <img src={person.photoId} alt="person" />
                          <p>{person.name}</p>
                        </Person>
                      ))}
                    </PeopleList>
                  )}
                  {event.joinedPeople.length === 0 && (
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
