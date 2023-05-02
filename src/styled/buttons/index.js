import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";



export const SimpleLink = styled(Link)`
font-size: inherit ;
font-weight: inherit;
color: #006241;
text-decoration: underline;
cursor: pointer;
display: inline-block;

&:hover {
    text-decoration: none;
}
`

export const Button = styled(Link)`
font-size: 1.4rem;
display: inline-block;
font-weight: 600;
color: ${({color}) => color  || 'inherit'}; 
padding:${({p}) => p  || '0.7rem 1.6rem'};
border-radius: 5rem; 
margin-top:${({m_top}) => m_top}; 
margin-left:${({m_left}) => m_left}; 
margin-right:${({m_right}) => m_right}; 
transition: all 0.3s ease;
` 

export const SimpleButton = styled(Button)`
border: 0.1rem solid ${({color}) => color};

&:hover {
    background: ${({bg}) => bg ||' rgba(0,0,0,.1)'};
}
`

export const FilledButton = styled(Button)`
color: #fff;
background:${({bg}) => bg || '#00754a'};
border: 0.1rem solid ${({bg}) => bg || '#00754a'};

&:hover {
    opacity: 0.8;
}
`

export const SosialLinkStyled = styled(NavLink)`
color: white;
background: black;
border-radius: 50%;
padding: 2rem;
font-size: 4rem;
display: grid;
place-items: center;
margin: 1rem;
`