import React, { Component } from 'react';
import eventService from "../services/eventService";
import PlaceCard from '../views/places/PlaceCard';
import DateFormat from "../components/DateFormat";

import {
  TitleEventCardDetailDh2,
  EventCardDetailContainerSocial,
  EventCardDetailContainerInfo,
  EventCardDetailContainerPlace,
  GeneralBackground,
  StyledLink,
  CardContainer,
  ContentEventCard,
  TagEventCardDetailsLh3,
  TimeEventCardDetailLh3,
  EventCardDetailMapPlace,
  Submit,
  EventDetailSubmitContainer
} from "../styles/styledComponents";

export default class EventCard extends Component {


  handleAttend = async () => {
    const { event: { _id } } = this.props;
    await eventService.attendEvent(_id)
  };

  handleLike = async () => {
    const { event: { _id } } = this.props;
    await eventService.addLike(_id)
  };

  render() {
    const { event: {
      title,
      description,
      frequency,
      dateStart,
      timeStart,
      price,
      owner: { username },
      participants,
      belongsToPlace,
      tag
    } } = this.props;

    return (
      <GeneralBackground>
        <TimeEventCardDetailLh3>
          <DateFormat dateStart={dateStart} timeStart={timeStart} />
        </TimeEventCardDetailLh3>
        <TitleEventCardDetailDh2>{title}</TitleEventCardDetailDh2>
        <TagEventCardDetailsLh3>#{tag}</TagEventCardDetailsLh3>
        <CardContainer>
          <EventCardDetailContainerSocial>
            <p>Social</p>
            <div>
              <div>
                <p>Attend</p>
                {/* linkTo attend page */}
              </div>
              <div>
                <p>Owner</p>
                {username}
              </div>
            </div>
          </EventCardDetailContainerSocial>
          <EventCardDetailContainerInfo>
            <p>Info</p>
            {description}
          </EventCardDetailContainerInfo>
          <EventCardDetailContainerPlace>
            <p>The Place</p>
            {/* {address} | {city} | {country} */}
            <EventCardDetailMapPlace>
              <div>
                <PlaceCard place={belongsToPlace} />
              </div>
            </EventCardDetailMapPlace>
          </EventCardDetailContainerPlace>
        </CardContainer>
        <EventDetailSubmitContainer>
          <Submit
            type="button"
            value="Attend"
            name="submit"
            onClick={this.handleAttend}
          />
        </EventDetailSubmitContainer>
        <div>
          <input
            type="button"
            value="Like"
            name="submit"
            onClick={this.handleLike}
          />
        </div>
      </GeneralBackground>
    )
  }
}
