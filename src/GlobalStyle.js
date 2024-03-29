import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
 
    font-family: "Manrope", sans-serif;
    background-color: ${({ theme: { colors } }) => colors.mainBgColor};
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover; 
  height: auto;
  
}

ul,li,h1, h2, h3, h4, h5, h6, p {
font-family: inherit;
padding: 0;
margin: 0;
list-style: none;
}

a {
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
}

`;
