import { Logo } from "components/header/logo";
import { ImLocation } from "react-icons/im";
import { FilledButton, SimpleButton } from 'styled/buttons';
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="navbar">
        <ul className="navbar__list navbar__list--left-side">
          <li className="navlink">
            <NavLink to="menu">menu</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="rewards">rewards</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="gifts">gift cards</NavLink>
          </li>
        </ul>
        <hr />
        <ul className="navbar__list navbar__list--right-side">
          <li className="navlink">
            <NavLink to="location" >
              <ImLocation />
              Find a store
            </NavLink>
          </li>
          <li>
            <SimpleButton to="login" color='rgba(0,0,0,.87)' p='0.7rem 1.6rem' m_right='1.6rem'>Sign in</SimpleButton>
          </li>
          <li>
            <FilledButton to='join' color='#fff' bg='#000' p='0.7rem 1.6rem'>Join now</FilledButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}
