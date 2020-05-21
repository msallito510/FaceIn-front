import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import {
  TitleLh1,
  BoldTitleCardLh1,
  BoldTitleCardDh1,
  HomeImageBackground,
  GeneralBackground,
  HomeAllEvents,
  HomeWhatsHot,
  HomeUserLikes,
  StyledLink,
  CardContainer
} from "../styles/styledComponents";


class HomeList extends Component {
  render() {
    const { user, handleLogout, theme, changeTheme } = this.props;
    return (
      <HomeImageBackground>
        <TitleLh1>Barcelona</TitleLh1>
        {/* <button
          onClick={changeTheme}
          style={{
            backgroundColor: theme.foreground,
            color: theme.color,
          }}
        >changeTheme</button> */}
        <GeneralBackground>
          <CardContainer>
            {user ? <StyledLink to="/events">
              <HomeAllEvents />
              <BoldTitleCardLh1>All Events</BoldTitleCardLh1>
            </StyledLink> : <div></div>}
          </CardContainer>
          <CardContainer>
            {user ? <StyledLink to="/whatishot">
              <HomeWhatsHot />
              <BoldTitleCardLh1>What´s hot</BoldTitleCardLh1>
            </StyledLink> : <div></div>}
          </CardContainer>
          <CardContainer>
            {user ? <StyledLink to="/places">
              <HomeUserLikes />
              <BoldTitleCardDh1>User Likes</BoldTitleCardDh1>
            </StyledLink> : <div></div>}
          </CardContainer>

        </GeneralBackground>
      </HomeImageBackground>
    );
  }
}

export default withAuth(withTheme(HomeList));