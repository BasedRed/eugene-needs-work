import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    background-color: #0c0b18;
    font-family: 'Nunito Sans', sans-serif;
}

h2{
    font-weight: lighter;
}
`;

export default GlobalStyle;
