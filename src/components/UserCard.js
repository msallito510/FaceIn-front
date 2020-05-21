import React, { Component } from 'react';
import {
  StyledLink,
  CardContainer,
  EventCard,
  ContentEventCard,
  TitleEventCardLh1,
  InfoEventCardLh3
} from "../styles/styledComponents";


export default class UserCard extends Component {

  render() {
    const { user: { username, likesGiven } } = this.props;
    return (
      <div>
        {likesGiven.map((event) => {
          return (
            <CardContainer key={event._id}>
              <StyledLink to={`/events/${event.likeForEvent._id}`}>
                <EventCard>
                  <ContentEventCard>
                    <TitleEventCardLh1>{event.likeForEvent.title}</TitleEventCardLh1>
                    <InfoEventCardLh3>{event.likeForEvent.dateStart}</InfoEventCardLh3>
                  </ContentEventCard>
                </EventCard>
              </StyledLink>
            </CardContainer>
          );
        })}
      </div>
    )
  }
}
