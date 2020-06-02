import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import DateFormat from "../../components/DateFormat";
import { DualRing } from 'react-awesome-spinners';

import eventService from "../../services/eventService";
import userService from "../../services/userService";

import {
  TitleEventsLh1,
  HeaderBackground,
  StyledLink,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3
} from "../../styles/styledComponents";

import { GeneralBackground, LoadingContainer } from "../../styles/commonStyle";

class FutureEvents extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {
    const { user: { _id } } = this.props;

    try {

      const futureEvents = await userService.getMyFutureEvents(_id);

      this.setState({
        events: futureEvents.participantEvents,
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
    const { theme } = this.props;


    return (
      <div>
        <HeaderBackground>
          <TitleEventsLh1>Events I have registered</TitleEventsLh1>
        </HeaderBackground>
        <GeneralBackground background={theme}>
          {loading && <LoadingContainer><DualRing /></LoadingContainer>}
          {!loading && events.map((item) => {
            return (
              <CardContainer key={item.event._id}>
                <StyledLink to={`/events/${item.event._id}`}>
                  <EventCardContainer>
                    <ContentEventCard image={item.event.image}>
                      <TitleEventCardLh1>{item.event.title}</TitleEventCardLh1>
                      <TimeEventCardLh3>
                        <DateFormat dateStart={item.event.dateStart} timeStart={item.event.timeStart} />
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

export default withAuth(withTheme(FutureEvents));
