// styles
import { Button } from "../../components/button/Button.styled";
import {
  Container,
  ColumnController,
  AddEventForm,
  InputContainer,
  Date,
  Time,
  AddEventInputContainer,
  DateAndTimeContainer,
  ButtonContainer,
} from "./AddEvent.styled";

import { useState, useContext } from "react";
// import { storage } from "../../firebase/config";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

// services
import { addNewEvent } from "../../firebase/api.service";

//context
import { AuthContext } from "../../context/AuthContext";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1em",
};

// today's date
const minDate = new window.Date().toLocaleDateString("en-ca");

export default function AddEvent() {
  const { user } = useContext(AuthContext);
  const [newEvent, setNewEvent] = useState({
    createdBy: user.displayName,
    userId: user.uid,
    name: "",
    location: "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    imageUrl: "",
  });

  const [image, setImage] = useState(null);
  const [showEndDateAndTime, setShowEndDateAndTime] = useState(false);

  // const imageListRef = ref(storage, "images/");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
    // if (!image) return;
    // const imageRef = ref(storage, `images/${image.name}`);
    // uploadBytes(imageRef, image).then(() => alert("Image Uploaded"));
    addNewEvent(newEvent);
  };

  return (
    <Container>
      <AddEventForm>
        <ColumnController>
          <InputContainer>
            <input
              type="text"
              id="name"
              value={newEvent.name}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
            <label htmlFor="name">Name</label>
          </InputContainer>

          <DateAndTimeContainer>
            <Date>
              <input
                type="date"
                id="startDate"
                value={newEvent.startDate}
                min={minDate}
                onChange={(e) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }))
                }
                required
              />
              <label htmlFor="startDate">Start date</label>
            </Date>
            <Time>
              <input
                type="time"
                id="startTime"
                value={newEvent.startTime}
                onChange={(e) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    startTime: e.target.value,
                  }))
                }
                required
              />
              <label htmlFor="startTime">Start time</label>
            </Time>
          </DateAndTimeContainer>

          {showEndDateAndTime && (
            <DateAndTimeContainer>
              <Date>
                <input
                  type="date"
                  id="endDate"
                  value={newEvent.endDate}
                  min={newEvent.startDate ? newEvent.startDate : minDate}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                    }))
                  }
                  required
                />
                <label htmlFor="endDate">End date</label>
              </Date>
              <Time>
                <input
                  type="time"
                  id="endTime"
                  value={newEvent.endTime}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      endTime: e.target.value,
                    }))
                  }
                  required
                />
                <label htmlFor="endTime">End time</label>
              </Time>
            </DateAndTimeContainer>
          )}

          <p onClick={() => setShowEndDateAndTime(!showEndDateAndTime)}>
            {!showEndDateAndTime ? "+" : "-"} End date and time
          </p>

          <InputContainer>
            <input
              type="text"
              id="location"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent((prev) => ({ ...prev, location: e.target.value }))
              }
              required
            />
            <label htmlFor="name">Location</label>
          </InputContainer>
        </ColumnController>

        <ColumnController>
          <AddEventInputContainer>
            {image && (
              <div>
                <img src={URL.createObjectURL(image)} alt="event" />
              </div>
            )}

            <label htmlFor="image">
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  setNewEvent((prev) => ({
                    ...prev,
                    imageUrl: e.target.files[0].name,
                  }));
                  setImage(e.target.files[0]);
                }}
              />
              + Add image
            </label>
          </AddEventInputContainer>

          <InputContainer>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="10"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
            ></textarea>
            <label htmlFor="description"> Description</label>
          </InputContainer>

          <ButtonContainer>
            <Button buttonStyles={buttonStyles} onClick={handleClick}>
              Add Event
            </Button>
          </ButtonContainer>
        </ColumnController>
      </AddEventForm>
    </Container>
  );
}
