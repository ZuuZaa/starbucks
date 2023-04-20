import { createGlobalStyle } from 'styled-components'
 
export const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'SoDo Sans';
    font-size: 62.5%;
}

body {
    transition: all 0.3;
    color: rgba(0,0,0,.87);
    font-width: 400;
}

ul {
    list-style-type: none;
}

a {
    color:inherit;
    text-decoration: none;
}
button {
    border: none;
    outline: none;
    background: inherit;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
}
`