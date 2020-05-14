import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

class Navbar extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <section>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              {user ? <NavLink to="/protectedview">ProtectedView</NavLink> : <div></div>}
            </li>
            <li>
              {user ? <NavLink to="/protectedviewtwo">ProtectedViewTwo</NavLink> : <div></div>}
            </li>
            <li>
              {user ? <NavLink to="/places">Places</NavLink> : <div></div>}
            </li>
            <li>
              <button
                onClick={changeTheme}
                style={{
                  backgroundColor: theme.foreground,
                  color: theme.color,
                }}
              >changeTheme</button>
            </li>
            <li>
              {user ? <NavLink onClick={handleLogout} to="/">Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default withAuth(withTheme(Navbar));