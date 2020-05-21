import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import DateFormat from "../../components/DateFormat";

import eventService from "../../services/eventService";
import {
  TitleLh1,
  HeaderBackground,
  GeneralBackground,
  StyledLink,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3
} from "../../styles/styledComponents";

class WhatIsHotEvents extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {

    try {
      const events = await eventService.getAllEvents()
      this.setState({
        events,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }


  render() {
    const { events, loading } = this.state;

    return (
      <div>
        <HeaderBackground>
          <TitleLh1>Most popular events</TitleLh1>
        </HeaderBackground>
        <GeneralBackground>
          {loading && <div>loading...</div>}
          {!loading && events.map((event) => {
            return (
              <CardContainer key={event._id}>
                <StyledLink to={`/events/${event._id}`}>
                  <EventCardContainer>
                    <ContentEventCard>
                      <TitleEventCardLh1>{event.title}</TitleEventCardLh1>
                      <TimeEventCardLh3>
                        <DateFormat dateStart={event.dateStart} timeStart={event.timeStart} />
                      </TimeEventCardLh3>
                    </ContentEventCard>
                  </EventCardContainer>
                </StyledLink>
              </CardContainer>
            );
          })}
        </GeneralBackground>
      </div>
    );
  }
}

export default withAuth(withTheme(WhatIsHotEvents));
