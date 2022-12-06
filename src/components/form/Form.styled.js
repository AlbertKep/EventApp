import styled from "styled-components";
import { Button } from "../button/Button.styled";

export const FormContainer = styled.section`
  text-align: center;
  padding-top: 3em;
`;

export const ImageContainer = styled.div`
  max-width: 100px;
  margin: 3.5em auto;

  @media screen and (min-width: 768px) {
    max-width: 150px;
  }

  img {
    width: 100%;
  }
`;
export const Form = styled.form`
  margin-top: 2.5em;
`;

export const InputContainer = styled.div`
  margin: 3em auto;
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
    fill: none;
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
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #2127c8;
    }

    &:hover span {
      background-color: #2127c8;
    }
  }
`;

export const BorderBottom = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 90px;
  background-color: #fff;
  height: 2px;
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
