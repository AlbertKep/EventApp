// styles
import { Button } from "../../components/button/Button.styled";
import {
  Container,
  ColumnController,
  AddEventForm,
  InputContainer,
  AddEventInputContainer,
  ButtonContainer,
} from "./AddEvent.styled";

import { useState } from "react";

const buttonStyles = {
  color: "#3137e7",
  borderColor: "#3137e7",
  padding: "0.5em 1em",
};

export default function AddEvent() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container>
      <AddEventForm>
        <ColumnController>
          <InputContainer>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label htmlFor="name">Name</label>
          </InputContainer>

          <InputContainer>
            <input type="text" id="date" />
            <label htmlFor="date">Date</label>
          </InputContainer>

          <InputContainer>
            <input
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
            <label htmlFor="name">Location</label>
          </InputContainer>
        </ColumnController>

        <ColumnController>
          <AddEventInputContainer>
            <label htmlFor="image">
              <input type="file" id="image" />+ Add image
            </label>
          </AddEventInputContainer>

          <InputContainer>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="10"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
            <label htmlFor="description"> Description</label>
          </InputContainer>

          <ButtonContainer>
            <Button buttonStyles={buttonStyles}>Add Event</Button>
          </ButtonContainer>
        </ColumnController>
      </AddEventForm>
    </Container>
  );
}
