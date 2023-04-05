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
}

ul {
    list-style-type: none;
}

a {
    color:inherit;
    text-decoration: none;
}
`