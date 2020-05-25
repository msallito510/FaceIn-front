import React, { Component } from 'react';
import eventService from "../services/eventService";

import PlaceCard from '../views/places/PlaceCard';
import DateFormat from "../components/DateFormat";
import { Link } from "react-router-dom";

import {
  TitleEventCardDetailDh1,
  TitleEventCardDetailDh2,
  EventDetailSocialTitle,
  EventCardDetailContainerSocial,
  EventCardDetailContainerInfo,
  EventCardDetailContainerPlace,
  GeneralBackground,
  Container_row,
  CardContainer,
  ContentEventCard,
  TagEventCardDetailsLh3,
  TimeEventCardDetailLh3,
  EventCardDetailMapPlace,
  Button,
  EventDetailLikeContainer,
  EventDetailSubmitContainer
} from "../styles/styledComponents";

import { EventCircleHeartBroken, HeartIcon } from "../styles/icon-style";

export default class EventCard extends Component {

  state = {
    isLiked: false,
    loading: true,
  }

  async componentDidMount() {

    this.handleSetState();

  }

  shouldComponentUpdate(nextState) {
    return this.state.isLiked !== nextState.isLiked;
  }

  handleAttend = async () => {
    const { event: { _id } } = this.props;
    try {
      await eventService.attendEvent(_id)
    } catch (error) {
      console.log(error);
    }

    this.renderButtonState();
  };

  handleLike = async () => {
    const { event: { _id } } = this.props;
    try {
      await eventService.addLike(_id);

    } catch (error) {
      console.log(error);
    }


    // this.handleSetState();
    // this.componentDidMount();

  };

  renderButtonState = () => {
    this.refs.btn.setAttribute("disabled", "disabled");
  }

  renderIcon = () => {
    switch (this.state.isLiked) {
      case true: return <EventCircleHeartBroken />;
      case false: return <HeartIcon />;
    }
  }

  handleSocialLoop = () => {
    const { event: { participants } } = this.props;

  }

  handleSetState = async () => {
    const { event: { likes }, user: { _id: userId } } = this.props;

    // const isLiked = likes.map((item) => item.likeGivenBy._id.toString() === userId.toString() ? true : false).filter(Boolean)[0];

    let nIsLiked = false;

    nIsLiked = likes.map((item) => {
      if (item.likeGivenBy._id.toString() === userId.toString()) {
        return true;
      }
    }).filter(Boolean)[0];

    if (typeof nIsLiked === "boolean") {
      this.setState({
        isLiked: nIsLiked,
        loading: false
      })
    }
  }

  render() {
    const { event: {
      _id: eventId,
      title,
      description,
      frequency,
      dateStart,
      timeStart,
      price,
      owner: { _id, username },
      participants,
      belongsToPlace,
      tag,
      StyledLink
    } } = this.props;

    // const { isLiked, loading } = this.state;

    return (

      <GeneralBackground>

        <TimeEventCardDetailLh3>
          <DateFormat dateStart={dateStart} timeStart={timeStart} />
        </TimeEventCardDetailLh3>
        <TitleEventCardDetailDh2>{title}</TitleEventCardDetailDh2>
        <TagEventCardDetailsLh3>#{tag}</TagEventCardDetailsLh3>
        <CardContainer>
          <EventCardDetailContainerSocial>
            <TitleEventCardDetailDh1>Social</TitleEventCardDetailDh1>
            <Container_row>
              <div>
                <Link to={`/attend/${eventId}`}>
                  <EventDetailSocialTitle>Attend</EventDetailSocialTitle>
                  <Container_row>
                    {participants.slice(0, 2).map((item) =>
                      <p style={{ padding: "0.5em" }}>
                        {item.participant.username}
                      </p>)}
                    {participants.length >= 1 ? <p style={{ padding: "0.5em" }}>+ {participants.length - 2}</p> : ""}
                  </Container_row>
                </Link>
              </div>
              <div>
                <EventDetailSocialTitle>Owner</EventDetailSocialTitle>
                {username}
              </div>
            </Container_row>
          </EventCardDetailContainerSocial>
          <EventCardDetailContainerInfo>
            <TitleEventCardDetailDh1>Info</TitleEventCardDetailDh1>
            {description}
          </EventCardDetailContainerInfo>
          <EventCardDetailContainerPlace>
            <TitleEventCardDetailDh1>The Place</TitleEventCardDetailDh1>
            <Link to={`/places/${belongsToPlace._id}`}>
              <EventCardDetailMapPlace>
                <div>
                  <PlaceCard place={belongsToPlace} />
                </div>
              </EventCardDetailMapPlace>
            </Link>
          </EventCardDetailContainerPlace>
        </CardContainer>
        <EventDetailSubmitContainer>
          <Button ref="btn" onClick={this.handleAttend}>
            Attend
          </Button>
        </EventDetailSubmitContainer>

        <EventDetailLikeContainer>
          <button onClick={this.handleLike}>
            {this.renderIcon()}
          </button>
        </EventDetailLikeContainer>

      </GeneralBackground>
    )
  }
}
