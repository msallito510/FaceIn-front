import React, { Component } from 'react';
import DateFormat from "../components/DateFormat";

import {
  StyledLinkDark,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3
} from "../styles/styledComponents";


export default class UserCard extends Component {

  render() {
    const { user: { likesGiven } } = this.props;
    return (
      <div>
        {likesGiven.map((event) => {
          return (
            <CardContainer key={event._id}>
              <StyledLinkDark to={`/events/${event.likeForEvent._id}`}>
                <EventCardContainer>
                  <ContentEventCard>
                    <TitleEventCardLh1>{event.likeForEvent.title}</TitleEventCardLh1>
                    <TimeEventCardLh3>
                      <DateFormat dateStart={event.likeForEvent.dateStart} timeStart={event.likeForEvent.timeStart} />

                    </TimeEventCardLh3>
                  </ContentEventCard>
                </EventCardContainer>
              </StyledLinkDark>
            </CardContainer>
          );
        })}
      </div>
    )
  }
}
