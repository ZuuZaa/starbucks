import { Logo } from "components/header/logo";
import { ImLocation } from "react-icons/im";
import { FilledButton, SimpleButton } from 'styled/buttons';
import { NavLink, useLocation } from "react-router-dom";
import "./style.scss";
import { MenuButton } from "./menuButton";
import { useState } from "react";
import { FlexBox } from "styled/containers";

export const Header = () => {

  const path = useLocation()
  const [showNav, setShowNav] = useState(false);


  return (
    <header className="header">

      <div className="header-container">
        <Logo />
        {
          path.pathname !== '/login' && path.pathname !== "/join" &&
          <>

            <div className={`collapse-wrapper ${(showNav ? 'visible' : 'hidden')}`} onClick={()=> setShowNav(false)}>
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
                <div className="navbar__list navbar__list--right-side">
                  <span className="navlink">
                    <NavLink to="location" >
                      <ImLocation />
                      Find a store
                    </NavLink>
                  </span>
                  <FlexBox>
                    <SimpleButton to="login" m_right='1.6rem'>Sign in</SimpleButton>
                    <FilledButton to='join' bg='#000' >Join now</FilledButton>
                  </FlexBox>
                </div>
              </nav>
            </div>

            <MenuButton showNav={showNav} setShowNav={setShowNav} />
          </>
        }
      </div>
    </header>
  )
}
