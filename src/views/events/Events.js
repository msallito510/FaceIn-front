import React, { Component } from "react";
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

  // convertDate = (event) => {
  //   if (event.event.dateStart) {
  //     const sptdate = event.event.dateStart.split("-");
  //     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //     const year = sptdate[0];
  //     const month = sptdate[1];
  //     const day = sptdate[2].replace("T00:00:00.000Z", "");
  //     return day + " " + months[month - 1] + " " + year;
  //   }
  // }


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

export default withAuth(withTheme(Events));
