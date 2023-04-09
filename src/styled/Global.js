import { createGlobalStyle } from 'styled-components'
 
export const GlobalStyles = createGlobalStyle`
* {
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
    overflow-x: hidden;
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
}
`