import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";


export const Button = styled(Link)`
font-size: 1.4rem;
font-weight: 600;
color:${({color}) => color}; 
background:${({bg}) => bg}; 
padding:${({p}) => p};
border-radius: 5rem; 
margin-top:${({m_top}) => m_top}; 
margin-left:${({m_left}) => m_left}; 
margin-right:${({m_right}) => m_right}; 
` 
export const SimpleButton = styled(Button)`
border: 0.1rem solid ${({color}) => color};

&:hover {
    background: rgba(0,0,0,.1);
}
`

export const FilledButton = styled(Button)`
border: 0.1rem solid ${({bg}) => bg};

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