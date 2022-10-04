import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&display=swap");
    body {
        margin: 0;
        padding: 0;
        color: #3c484e;
        font-family: 'Josefin Sans', sans-serif;
    }
`;
export default GlobalStyle;
