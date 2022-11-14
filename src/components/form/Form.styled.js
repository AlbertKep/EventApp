import styled from "styled-components";
import { Button } from "../button/Button.styled";

export const FormContainer = styled.section`
  text-align: center;
  padding-top: 3em;
`;

export const ImageContainer = styled.div`
  margin-top: 3.5em;
`;
export const Form = styled.form`
  margin-top: 2.5em;
`;

export const InputContainer = styled.div`
  margin: 2em auto;
  position: relative;
  color: #fff;
  width: 80%;
  max-width: 400px;

  &:last-child {
    margin-top: 5em;
  }

  label {
    margin-right: 1.3em;
    position: absolute;
    bottom: 25px;
    left: 0;
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  input {
    outline: none;
    fill: none;
    width: 100%;
    color: #fff;
    border-bottom: 2px solid #fff;
    padding: 0.5em;
    font-size: 1.3rem;
    padding-top: 2em;

    &:focus {
      border-color: #3137e7;
      background-color: transparent;
    }

    &:active {
      background-color: transparent;
    }

    &:required:focus + label,
    &:required:valid + label {
      border-color: #3137e7;
      color: #3137e7;
      font-size: 1rem;
      bottom: 55px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s;
      -webkit-text-fill-color: #fff !important;
    }
  }
`;

export const FormButton = styled(Button)`
  border: 2px solid;
  font-size: 1.2rem;
  padding-left: 1.2em;
  padding-right: 1.2em;

  &:hover {
    background-color: #fff;
    color: #1c1c1c;
  }
`;

export const TextContainer = styled.div`
  margin-top: 2.5em;
  font-weight: bold;
  display: flex;
  justify-content: center;

  p {
    margin-right: 0.5em;
  }

  span {
    cursor: pointer;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #fff;
  }
`;
