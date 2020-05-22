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
  EventDetailSocialContainer,
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

  handleSetState = async () => {
    const { event: { likes }, user: { _id: userId } } = this.props;

    // const isLiked = likes.map((item) => item.likeGivenBy._id.toString() === userId.toString() ? true : false).filter(Boolean)[0];

    let nIsLiked = false;

    nIsLiked = likes.map((item) => {
      if (item.likeGivenBy._id.toString() === userId.toString()) {
        return true;
      }
    }).filter(Boolean)[0];

    console.log(nIsLiked)
    if (typeof nIsLiked === "boolean") {
      this.setState({
        isLiked: nIsLiked,
        loading: false
      })
    }
  }

  render() {
    const { event: {
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
            <EventDetailSocialContainer>
              <div>
                <EventDetailSocialTitle>Attend</EventDetailSocialTitle>
                {/* linkTo attend page */}
              </div>
              <div>
                <EventDetailSocialTitle>Owner</EventDetailSocialTitle>
                {username}
              </div>
            </EventDetailSocialContainer>
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
          <button onClick={this.handleAttend}>
            Attend
          </button>
        </EventDetailSubmitContainer>

        <EventDetailLikeContainer>
          <button ref="btn" onClick={this.handleLike}>
            {this.renderIcon()}
          </button>
        </EventDetailLikeContainer>
        }
      </GeneralBackground>
    )
  }
}
