import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

// import styled from 'styled-components';

class HomeList extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <section>

        <div>
          {user ? <Link to="/events">
            <img src="/images/" alt="all events" />
            <h1>All Events</h1>
          </Link> : <div></div>}
        </div>
        <div>
          {user ? <Link to="/whatishot">
            <img src="/images/" alt="what´s hot" />
            <h1>What´s hot</h1>
          </Link> : <div></div>}
        </div>
        <div>
          {user ? <Link to="/places">
            <img src="/images/" alt="see all places in a map" />
            <h1>All Places</h1>
          </Link> : <div></div>}
        </div>
        <div>
          <button
            onClick={changeTheme}
            style={{
              backgroundColor: theme.foreground,
              color: theme.color,
            }}
          >changeTheme</button>
        </div>
        <div>
          {user ? <Link onClick={handleLogout} to="/">Logout</Link> : <Link to="/login">Login</Link>}
        </div>
      </section >
    );
  }
}

export default withAuth(withTheme(HomeList));