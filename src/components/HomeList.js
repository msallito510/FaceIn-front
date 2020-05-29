import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import styled from 'styled-components';

import {
  TitleLh1,
  BoldTitleCardLh1,
  BoldTitleCardDh1,
  HomeImageBackground,
  HomeAllEvents,
  HomeWhatsHot,
  HomeUserLikes,
  StyledLinkDark,
  CardContainer
} from "../styles/styledComponents";


const HomeBackgroundDark = styled.div`
  background: ${ (props) => props.color};
  overflow: hidden;
  overflow-y:scroll;
  bottom:-16.5em;
  top: 20rem;
  position: absolute;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-radius: 20px;
  `;

class HomeList extends Component {


  render() {
    const { theme, user } = this.props;
    return (
      <HomeImageBackground>
        <TitleLh1>Barcelona</TitleLh1>       
        <HomeBackgroundDark color={theme}>
          <CardContainer>
            {user ? <StyledLinkDark to="/events">
              <HomeAllEvents />
              <BoldTitleCardLh1>All Events</BoldTitleCardLh1>
            </StyledLinkDark> : <div></div>}
          </CardContainer>
          <CardContainer>
            {user ? <StyledLinkDark to="/whatishot">
              <HomeWhatsHot />
              <BoldTitleCardLh1>What´s hot</BoldTitleCardLh1>
            </StyledLinkDark> : <div></div>}
          </CardContainer>
          <CardContainer>
            {user ? <StyledLinkDark to="/likes">
              <HomeUserLikes />
              <BoldTitleCardDh1>User Likes</BoldTitleCardDh1>
            </StyledLinkDark> : <div></div>}
          </CardContainer>

        </HomeBackgroundDark>
      </HomeImageBackground>
    );
  }
}

export default withAuth(withTheme(HomeList));