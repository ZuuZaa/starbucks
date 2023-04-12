import { Logo } from "components/header/logo";
import { ImLocation } from "react-icons/im";
import { FilledButton, SimpleButton } from 'styled/buttons';
import { NavLink } from "react-router-dom";
import "./style.scss";
import { MenuButton } from "./menuButton";
import { useState } from "react";
import { FlexBox } from "styled/containers";

export const Header = () => {

  // const path = useLocation()


  // const mediaQuery = window.matchMedia('(min-width: 772px)');

  // const [screenSize, setScreenSize] = useState(mediaQuery.matches);
  const [showNav, setShowNav] = useState(false);


  return (
    <header className="header">
      <Logo />

      {
        path.pathname !== '/login' && path.pathname !== "/join" &&
        <>
          <MenuButton showNav={showNav} setShowNav={setShowNav} />
          <nav className={`navbar ${(showNav ? 'visible' : 'hidden')}`}>
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
            <div className="navbar__list navbar__list--right-side">
              <span className="navlink">
                <NavLink to="location" >
                  <ImLocation />
                  Find a store
                </NavLink>
              </span>
              <FlexBox>
                <SimpleButton to="login" color='rgba(0,0,0,.87)' p='0.7rem 1.6rem' m_right='1.6rem'>Sign in</SimpleButton>
                <FilledButton to='join' color='#fff' bg='#000' p='0.7rem 1.6rem'>Join now</FilledButton>
              </FlexBox>
            </div>
          </nav>
        </>
      }

    </header>
  )
}
