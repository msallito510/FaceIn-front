import React, { Component } from 'react';
import DateFormat from "../components/DateFormat";

import {
  StyledLink_D,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3
} from "../styles/styledComponents";


export default class UserCard extends Component {

  render() {
    const { user: { username, likesGiven } } = this.props;
    return (
      <div>
        {likesGiven.map((event) => {
          return (
            <CardContainer key={event._id}>
              <StyledLink_D to={`/events/${event.likeForEvent._id}`}>
                <EventCardContainer>
                  <ContentEventCard>
                    <TitleEventCardLh1>{event.likeForEvent.title}</TitleEventCardLh1>
                    <TimeEventCardLh3>
                      <DateFormat dateStart={event.likeForEvent.dateStart} timeStart={event.likeForEvent.timeStart} />

                    </TimeEventCardLh3>
                  </ContentEventCard>
                </EventCardContainer>
              </StyledLink_D>
            </CardContainer>
          );
        })}
      </div>
    )
  }
}
