import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { NavLink } from "react-router-dom";
import { MenuBarUl, MenuBarLi } from "../styles/menuStyle";
import { SearchIcon, HeartIcon, UserIcon, HomeIcon } from "../styles/icon-style";

class Navbar extends Component {
  render() {
    const { user, theme } = this.props;
    return (
      <section>
        <nav>
          <MenuBarUl color={theme}>
            <MenuBarLi>
              <NavLink to="/">
                <HomeIcon />
              </NavLink>
            </MenuBarLi>
            <MenuBarLi>
              {user ? <NavLink to="/search">
                <SearchIcon />
              </NavLink> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <NavLink to="/likes">
                <HeartIcon />
              </NavLink> : <div></div>}
            </MenuBarLi>
            <MenuBarLi>
              {user ? <NavLink to="/user-profile">
                <UserIcon />
              </NavLink> : <div></div>}
            </MenuBarLi>
          </MenuBarUl>
        </nav>
      </section >
    );
  }
}

export default withAuth(withTheme(Navbar));