import styled from 'styled-components';
import {Link} from "react-router-dom";

export const LinkList = styled.ul`
display: flex;
align-items: center;
`

export const LogoStyled = styled(Link)`
width: 5rem;
height: 5rem;
img {
    width: 100%
}
`


export const HeaderLinkStyled = styled(Link)`
color: red;
`

export const SosialLinkStyled = styled(Link)`
color: white;
background: black;
border-radius: 50%;
padding: 2rem;
font-size: 4rem;
display: grid;
place-items: center;
margin: 1rem;
`
    
