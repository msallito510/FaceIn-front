import React, { Component } from 'react';
import DateFormat from "./DateFormat";

import {
  StyledLink,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  TitleEventCardLh1,
  TimeEventCardLh3
} from "../styles/styledComponents";


export default class UserCardList extends Component {

  render() {
    const { user: { likesGiven } } = this.props;
    return (
      <div>
        {likesGiven.length !== 0 ? likesGiven.map((event) => {
          return (
            <CardContainer key={event._id}>
              <StyledLink to={`/events/${event.likeForEvent._id}`}>
                <EventCardContainer>
                  <ContentEventCard image={event.likeForEvent.image}>
                    <TitleEventCardLh1>{event.likeForEvent.title}</TitleEventCardLh1>
                    <TimeEventCardLh3>
                      <DateFormat dateStart={event.likeForEvent.dateStart} timeStart={event.likeForEvent.timeStart} />
                    </TimeEventCardLh3>
                  </ContentEventCard>
                </EventCardContainer>
              </StyledLink>
            </CardContainer>
          );
        }) :
          <h2>You still haven't given any likes</h2>
        }
      </div>
    )
  }
}
