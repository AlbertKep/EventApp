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
  EventModalContent,
  ErrorValidationInfo,
} from "./AddEvent.styled";

//components
import Modal from "../../components/modal/Modal";
import ApproveIcon from "../../components/svgComponents/ApproveIcon";

import { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

const buttonModalStyles = {
  color: "#2127c8",
  borderColor: "#2127c8",
  padding: "0.5em 1em",
};

// today's date
const minDate = new window.Date().toLocaleDateString("en-ca");

const checkIfFormIsValid = (values) => {
  let isValid = true;

  const clone = JSON.parse(JSON.stringify(values)); // deep copy
  Object.entries(clone).forEach(([fieldName, fieldInfo]) => {
    // validators for field name
    if (fieldName === "name") {
      if (fieldInfo.value.length < 3) {
        isValid = false;
        clone[fieldName].error = "The name should contains min. 3 characters";
      }

      if (fieldInfo.value.length > 20) {
        isValid = false;
        clone[fieldName].error = "The name should contains min. 3 signs";
      }
    }

    // validators for fields date and time
    if (fieldName === "startDate") {
      if (fieldInfo.value === "") {
        isValid = false;
        clone[fieldName].error = "The event should contains start date";
      }
    }

    if (fieldName === "startTime") {
      if (fieldInfo.value === "") {
        isValid = false;
        clone[fieldName].error = "The event should contains start time";
      }
    }

    // check if start date is > than end date
    if (
      clone.startDate.value.length !== 0 &&
      clone.endDate.value.length !== 0
    ) {
      if (clone.startDate.value > clone.endDate.value) {
        isValid = false;
        clone.endDate.error =
          "The start date of the event is later than the end date";
      }
    }

    // validators for field location
    if (fieldName === "location") {
      if (fieldInfo.value.length < 3) {
        isValid = false;
        clone[fieldName].error = "The location should contains min. 3 signs";
      }
    }

    // validators for field description
    if (fieldName === "description") {
      if (fieldInfo.value.length <= 0) {
        isValid = false;
        clone[fieldName].error = "The description should not be empty";
      }
    }

    // validators for field image
    if (fieldName === "image") {
      if (fieldInfo.value.length === 0) {
        isValid = false;
        clone[fieldName].error = "The event should contains image";
      }
    }
  });

  return {
    isValid,
    event: clone,
  };
};

export default function AddEvent() {
  const { user } = useContext(AuthContext);
  const userInfo = useMemo(
    () => ({
      createdBy: user.displayName,
      userId: user.uid,
    }),
    [user]
  );
  const [newEvent, setNewEvent] = useState({
    name: {
      value: "",
      // validators: [
      //   (value) => value > 8,
      //   (value) => value < 20,
      // ],
      error: null,
    },
    location: {
      value: "",
      error: null,
    },
    description: {
      value: "",
      error: null,
    },
    startDate: {
      value: "",
      error: null,
    },
    startTime: {
      value: "",
      error: null,
    },
    endDate: {
      value: "",
      error: null,
    },
    endTime: {
      value: "",
      error: null,
    },
    image: {
      value: "",
      error: null,
    },
  });

  const [image, setImage] = useState(null);
  const [showEndDateAndTime, setShowEndDateAndTime] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  // const imageListRef = ref(storage, "images/");
  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, event } = checkIfFormIsValid(newEvent);
    if (!isValid) {
      setNewEvent(event);
      return;
    }

    const formData = Object.entries(newEvent).reduce(
      (collector, [fieldName, fieldInfo]) => ({
        ...collector,
        [fieldName]: fieldInfo.value,
      }),
      {}
    );

    const eventData = {
      ...userInfo,
      ...formData,
    };

    // if (!image) return;
    // const imageRef = ref(storage, `images/${image.name}`);
    // uploadBytes(imageRef, image).then(() => alert("Image Uploaded"));
    // console.log(eventData);
    addNewEvent(eventData);
    setShowSuccessModal(true);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (name === "image") {
      // e.target.files[0].name,
      console.log(e.target.files[0].name);
      setImage(e.target.files[0]);
    }
    setNewEvent((prev) => ({
      ...prev,
      [name]: {
        error: null,
        value,
      },
    }));
  };

  return (
    <Container>
      <AddEventForm noValidate onSubmit={handleSubmit}>
        <ColumnController>
          <InputContainer>
            <input
              type="text"
              id="name"
              name="name"
              value={newEvent.name.value}
              onChange={changeHandler}
              required
            />
            <label htmlFor="name">Name</label>
            {newEvent.name.error && (
              <ErrorValidationInfo>{newEvent.name.error}</ErrorValidationInfo>
            )}
          </InputContainer>

          <DateAndTimeContainer>
            <Date>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={newEvent.startDate.value}
                min={minDate}
                onChange={changeHandler}
                required
              />
              <label htmlFor="startDate">Start date</label>
              {newEvent.startDate.error && (
                <ErrorValidationInfo>
                  {newEvent.startDate.error}
                </ErrorValidationInfo>
              )}
            </Date>
            <Time>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={newEvent.startTime.value}
                onChange={changeHandler}
                required
              />
              <label htmlFor="startTime">Start time</label>
              {newEvent.startTime.error && (
                <ErrorValidationInfo>
                  {newEvent.startTime.error}
                </ErrorValidationInfo>
              )}
            </Time>
          </DateAndTimeContainer>

          {showEndDateAndTime && (
            <>
              <DateAndTimeContainer>
                <Date>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={newEvent.endDate.value}
                    min={
                      newEvent.startDate.value
                        ? newEvent.startDate.value
                        : minDate
                    }
                    onChange={changeHandler}
                    required
                  />
                  <label htmlFor="endDate">End date</label>
                </Date>
                <Time>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={newEvent.endTime.value}
                    onChange={changeHandler}
                    required
                  />
                  <label htmlFor="endTime">End time</label>
                </Time>
              </DateAndTimeContainer>
              {newEvent.endDate.error && (
                <ErrorValidationInfo>
                  {newEvent.endDate.error}
                </ErrorValidationInfo>
              )}
            </>
          )}

          <p onClick={() => setShowEndDateAndTime(!showEndDateAndTime)}>
            {!showEndDateAndTime ? "+" : "-"} End date and time
          </p>

          <InputContainer>
            <input
              type="text"
              id="location"
              name="location"
              value={newEvent.location.value}
              onChange={changeHandler}
              required
            />
            <label htmlFor="location">Location</label>
            {newEvent.location.error && (
              <ErrorValidationInfo>
                {newEvent.location.error}
              </ErrorValidationInfo>
            )}
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
                name="image"
                onChange={changeHandler}
              />
              + Add image
            </label>
            {newEvent.image.error && (
              <ErrorValidationInfo>{newEvent.image.error}</ErrorValidationInfo>
            )}
          </AddEventInputContainer>

          <InputContainer>
            <textarea
              id="description"
              name="description"
              cols="20"
              rows="10"
              value={newEvent.description.value}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="description"> Description</label>
            {newEvent.description.error && (
              <ErrorValidationInfo>
                {newEvent.description.error}
              </ErrorValidationInfo>
            )}
          </InputContainer>

          <ButtonContainer>
            <Button buttonStyles={buttonStyles}>Add Event</Button>
          </ButtonContainer>
        </ColumnController>
      </AddEventForm>
      {showSuccessModal && (
        <Modal>
          <EventModalContent>
            <ApproveIcon />
            <h3>The event has been successfully added!</h3>
            <Button
              buttonStyles={buttonModalStyles}
              onClick={() => navigate("/")}
            >
              OK
            </Button>
          </EventModalContent>
        </Modal>
      )}
    </Container>
  );
}
