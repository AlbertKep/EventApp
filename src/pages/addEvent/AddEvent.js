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
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  // today's date
  const minDate = new window.Date().toLocaleDateString("en-ca");

  const [showEndDateAndTime, setShowEndDateAndTime] = useState(false);
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

          <DateAndTimeContainer>
            <Date>
              <input
                type="date"
                id="startDate"
                value={startDate}
                min={minDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <label htmlFor="startDate">Start date</label>
            </Date>
            <Time>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
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
                  value={endDate}
                  min={minDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
                <label htmlFor="endDate">End date</label>
              </Date>
              <Time>
                <input
                  type="time"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
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
