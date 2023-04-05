import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";

export const LinkList = styled.ul`
display: flex;
align-items: center;
`

export const LogoStyled = styled(Link)`
width: 5rem;
height: 5rem;
margin-right: 4rem;
img {
    width: 100%
}
`

export const HeaderLinkStyled = styled(NavLink)`
padding-block: 4rem;
margin-right: 2.4rem;
font-size: 1.4rem;
font-weight: ${({text_weight}) => text_weight};
text-transform: ${({text}) => text};
letter-spacing: 0.1rem;
color: rgba(0,0,0,.87);

svg {
    margin-right: 0.8rem;
}

&:hover {
    color: #00754a;
}

&:is(.active) {
    box-shadow: inset 0 -6px #00754a;
}
`


    
