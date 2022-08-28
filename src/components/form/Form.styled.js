import styled from "styled-components";
import { Button } from "../button/Button.styled";

export const ImageContainer = styled.div`
  text-align: center;
  margin-top: 3.5em;
`;
export const Form = styled.form`
  text-align: center;
  margin-top: 2.5em;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1em;
  &:last-child {
    margin-top: 3em;
  }
  label {
    position: absolute;
    font-size: 0.9rem;
  }

  input {
    background-color: transparent;
    outline: 0;
    border: none;
    border-bottom: 1px solid white;
    padding: 1.3em 0 0.75em;
    color: #fff;
    font-size: 1.2rem;
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
