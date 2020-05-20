import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

import { TitleW, HomeBackground, GeneralBackground, HomeAllEvents, HomeWhatsHot, HomeUserLikes, TitleCardW, TitleCardB, StyledLink, HomeCard } from "../styles/styledComponents";

class HomeList extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <HomeBackground>
        <TitleW>Barcelona</TitleW>
        {/* <button
          onClick={changeTheme}
          style={{
            backgroundColor: theme.foreground,
            color: theme.color,
          }}
        >changeTheme</button> */}
        <GeneralBackground>
          <HomeCard>
            {user ? <StyledLink to="/events">
              <HomeAllEvents />
              <TitleCardW>All Events</TitleCardW>
            </StyledLink> : <div></div>}
          </HomeCard>
          <HomeCard>
            {user ? <StyledLink to="/whatishot">
              <HomeWhatsHot />
              <TitleCardW>What´s hot</TitleCardW>
            </StyledLink> : <div></div>}
          </HomeCard>
          <HomeCard>
            {user ? <StyledLink to="/places">
              <HomeUserLikes />
              <TitleCardB>User Likes</TitleCardB>
            </StyledLink> : <div></div>}
          </HomeCard>

        </GeneralBackground>
      </HomeBackground >
    );
  }
}

export default withAuth(withTheme(HomeList));