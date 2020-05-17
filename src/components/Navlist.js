import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

class Navlist extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <section>
        <nav>
          <ul>
            {/* <li>
              <NavLink to="/">Homepage</NavLink>
            </li> */}
            <li>
              {user ? <NavLink to="/events">
                <img src="/images/" alt="all events" />
                <h1>All Events</h1>
              </NavLink> : <div></div>}
            </li>
            <li>
              {user ? <NavLink to="/protectedviewtwo">
                <img src="/images/" alt="what´s hot" />
                <h1>What´s hot</h1>
              </NavLink> : <div></div>}
            </li>
            <li>
              {user ? <NavLink to="/places">
                <img src="/images/" alt="your event places in a map" />
                <h1>Your places</h1>
              </NavLink> : <div></div>}
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

export default withAuth(withTheme(Navlist));