import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import {
  TitleLh1,
  HeaderBackground,
  GeneralBackground,
  StyledLink,
  CardContainer,
  EventCard,
  ContentEventCard,
  TitleEventCardLh1,
  InfoEventCardLh3
} from "../../styles/styledComponents";

class Events extends Component {
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

  convertDate = (event) => {
    if (event.event.dateStart) {
      const sptdate = event.event.dateStart.split("-");
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = sptdate[0];
      const month = sptdate[1];
      const day = sptdate[2].replace("T00:00:00.000Z", "");
      return day + " " + months[month - 1] + " " + year;
    }
  }


  render() {
    const { events, loading } = this.state;

    return (
      <div>
        <HeaderBackground>
          <TitleLh1>All Events</TitleLh1>
        </HeaderBackground>
        <GeneralBackground>
          {loading && <div>loading...</div>}
          {!loading && events.map((event) => {
            {/* const d = this.convertDate({ event.dateStart }); */ }
            return (
              <CardContainer key={event._id}>
                <StyledLink to={`/events/${event._id}`}>
                  <EventCard>
                    <ContentEventCard>
                      <TitleEventCardLh1>{event.title}</TitleEventCardLh1>
                      <InfoEventCardLh3>{event.dateStart} | {event.timeStart}</InfoEventCardLh3>
                    </ContentEventCard>
                  </EventCard>
                </StyledLink>
              </CardContainer>
            );
          })}
        </GeneralBackground>
      </div>
    );
  }
}

export default withAuth(withTheme(Events));
