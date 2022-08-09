import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #707070;
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
