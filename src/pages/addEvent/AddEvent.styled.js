import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`;

export const AddEventForm = styled.form`
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  p {
    cursor: pointer;
    font-weight: 700;
  }
`;

export const ColumnController = styled.div`
  flex-basis: 80%;

  //add end date and time paragraph
  p {
    margin-top: 1em;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 35%;
    margin: 1em 2em;
  }
`;

export const InputContainer = styled.div`
  margin: 3em 0;
  position: relative;
  color: #fff;

  label {
    margin-right: 1.3em;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  input {
    outline: none;
    width: 100%;
    color: #fff;
    border-bottom: 2px solid #fff;
    padding: 0.5em;
    font-size: 1.3rem;

    &:focus {
      border-color: #3137e7;
    }

    &:required:focus + label,
    &:required:valid + label {
      border-color: #3137e7;
      color: #3137e7;
      font-size: 1rem;
      top: -30px;
    }
  }

  textarea {
    font-family: "Roboto";
    margin-top: 1em;
    font-size: 1.3rem;
    resize: none;
    outline: none;
    width: 100%;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;

    &:focus {
      border-color: #3137e7;
    }

    &:required:focus + label,
    &:required:valid + label {
      margin-top: 1em;
      color: #3137e7;
      font-size: 1rem;
      top: -30px;
    }
  }
`;

export const AddEventInputContainer = styled(InputContainer)`
  /* margin-bottom: 5em; */
  padding-top: 0.5em;
  div {
    max-width: 250px;
  }

  img {
    width: 100%;
  }

  label {
    cursor: pointer;
    top: -30px;
    display: inline-block;

    &:hover {
      color: #3137e7;
    }
  }
  input {
    display: none;
  }
`;

export const DateAndTimeContainer = styled(InputContainer)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0;

  label {
    top: -30px;
  }

  input {
    font-family: "Roboto";
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
      filter: invert(19%) sepia(39%) saturate(5981%) hue-rotate(231deg)
        brightness(104%) contrast(94%);
    }
  }
`;
export const Date = styled(InputContainer)`
  flex-basis: 45%;
  margin-bottom: 1em;
`;

export const Time = styled(InputContainer)`
  flex-basis: 45%;
  margin-bottom: 1em;
`;

export const ButtonContainer = styled(InputContainer)`
  text-align: right;
`;

export const EventModalContent = styled.div`
  padding: 1em;
  color: #2127c8;
  font-size: 0.8rem;
  text-align: center;

  h3 {
    margin: 1em 0 1.5em;
  }
`;

export const ErrorValidationInfo = styled.span`
  display: block;
  color: #ee4040;
  margin: 0.5em 0;
  font-size: 0.8rem;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;
