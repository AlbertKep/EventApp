import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  background-color: #1C1C1C;
  color: #fff;

};

ul {
  list-style-type: none;

}

button {
  border: none;
  background-color: transparent;
}
`;
