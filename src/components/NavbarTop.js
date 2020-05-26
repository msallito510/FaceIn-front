import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { MenuBarUlTop, MenuBarLiTop } from "../styles/styledComponents";
import { BackArrow, LogOutIcon } from "../styles/icon-style";
import "../styles/commonCustom.css";

class NavbarTop extends Component {

  render() {
    const { location: { pathname }, history, user, handleLogout, theme, changeTheme } = this.props;

    return (
      <section>

        {pathname !== "/" && <nav>
          <MenuBarUlTop>
            <MenuBarLiTop>
              {user ? <button onClick={history.goBack}><BackArrow /></button> : <div></div>}
            </MenuBarLiTop>
            <MenuBarLiTop>
              {user ? <input className="toggle-theme" type="checkbox" id="theme" name="theme" onclick={changeTheme}></input> : <div></div>}
            </MenuBarLiTop>
            <MenuBarLiTop>
              {user ? <button onClick={handleLogout}><LogOutIcon /></button> : <div></div>}
            </MenuBarLiTop>
          </MenuBarUlTop>
        </nav>}
      </section>
    );
  }
}

export default withAuth(withTheme(withRouter(NavbarTop)));