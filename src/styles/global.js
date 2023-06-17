import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: 'Roboto Slab', 'sans-serif';
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Roboto Slab', 'sans-serif';
  font-size: 16px;
  outline: none;
}

a {
  text-decoration: none;
}

a, button {
  cursor: pointer;
  transition: filter 0.2s;
}

a:hover, button:hover {
  filter: brightness(0.9);
}
`