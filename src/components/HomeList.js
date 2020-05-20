import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import {
  TitleLh1,
  BoldTitleCardLh1,
  BoldTitleCardDh1,
  HomeBackground,
  GeneralBackground,
  HomeAllEvents,
  HomeWhatsHot,
  HomeUserLikes,
  StyledLink,
  HomeCard
} from "../styles/styledComponents";


class HomeList extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <HomeBackground>
        <TitleLh1>Barcelona</TitleLh1>
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
              <BoldTitleCardLh1>All Events</BoldTitleCardLh1>
            </StyledLink> : <div></div>}
          </HomeCard>
          <HomeCard>
            {user ? <StyledLink to="/whatishot">
              <HomeWhatsHot />
              <BoldTitleCardLh1>What´s hot</BoldTitleCardLh1>
            </StyledLink> : <div></div>}
          </HomeCard>
          <HomeCard>
            {user ? <StyledLink to="/places">
              <HomeUserLikes />
              <BoldTitleCardDh1>User Likes</BoldTitleCardDh1>
            </StyledLink> : <div></div>}
          </HomeCard>

        </GeneralBackground>
      </HomeBackground >
    );
  }
}

export default withAuth(withTheme(HomeList));