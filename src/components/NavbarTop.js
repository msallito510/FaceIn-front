import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import { MenuBarUlTop, MenuBarLiTop } from "../styles/menuStyle";
import { BackArrow, LogOutIcon } from "../styles/icon-style";
import styled from 'styled-components';

const ThemeButton = styled.img`
  position: absolute;
  width: 2em;
  height: 2em;
  top: 0;
  right: 5em;
`;

class NavbarTop extends Component {

  render() {
    const { location: { pathname }, history, user, handleLogout, theme, changeTheme } = this.props;

    return (
      <section>

        {pathname !== "/" && <nav>
          <MenuBarUlTop color={theme}>
            <MenuBarLiTop>
              {user ? <div onClick={history.goBack}><BackArrow color={theme} /></div> : <div></div>}
            </MenuBarLiTop>
            <MenuBarLiTop>
              <div type="button" onClick={changeTheme}>
                {theme.name === "light" ? <ThemeButton src="/icons/moon.svg" alt="light" /> :
                  <ThemeButton src="/icons/sun.svg" alt="dark" />}
              </div>
            </MenuBarLiTop>
            <MenuBarLiTop>
              {user ? <div onClick={handleLogout}><LogOutIcon color={theme} /></div> : <div></div>}
            </MenuBarLiTop>
          </MenuBarUlTop>
        </nav>}
      </section>
    );
  }
}

export default withAuth(withTheme(withRouter(NavbarTop)));