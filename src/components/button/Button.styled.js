import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  padding: ${({ buttonStyles }) =>
    buttonStyles ? buttonStyles.padding : "0.2em 0.4em"};
  border: 2px solid;
  border-color: ${({ buttonStyles }) =>
    buttonStyles ? buttonStyles.borderColor : "#fff"};
  color: ${({ buttonStyles }) => (buttonStyles ? buttonStyles.color : "#fff")};
  font-size: ${({ buttonStyles }) =>
    buttonStyles ? buttonStyles.fontSize : ""};

  &:hover {
    background-color: #fff;
    color: #2127c8;
  }
`;
