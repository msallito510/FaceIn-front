import React, { Component } from 'react';
import eventService from "../services/eventService";

import PlaceCard from '../views/places/PlaceCard';
import DateFormat from "../components/DateFormat";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import {
  TitleEventCardDetailDh1,
  TitleEventCardDetailDh2,
  EventDetailSocialTitle,
  EventCardDetailContainerSocial,
  EventCardDetailContainerInfo,
  EventCardDetailContainerPlace,
  ContainerRow,
  EventDetailBackground,
  CardContainer,
  TagEventCardDetailsLh3,
  TimeEventCardDetailLh3,
  EventCardDetailMapPlace,
  Button,
  EventDetailLikeContainer,
  EventDetailSubmitContainer
} from "../styles/styledComponents";

import { EventAddLike, EventHeartFilled } from "../styles/icon-style";

const INIT_STATE = {
  isLiked: "",
  loading: true,
};

export default class EventCard extends Component {

  state = {
    ...INIT_STATE,
  }

  componentDidMount() {
    this.handleSetState();
  }

  shouldComponentUpdate(nextState) {
    return this.state.isLiked !== nextState.isLiked;
  }

  handleAttend = async () => {
    const { event: { _id } } = this.props;

    await eventService.attendEvent(_id)
      .then(() => {
        toast.success('Confirmed!');

      })
      .catch(error => {
        toast.error(`ERROR. Cannot be confirmed - ${error}`);
      })

    this.renderButtonState();
    this.resetState();
  };

  handleLike = async () => {
    const { event: { _id } } = this.props;
    try {
      await eventService.addLike(_id);

    } catch (error) {
      console.log(error);
    }


    this.handleSetState();

  };

  renderButtonState = () => {
    this.refs.btn.setAttribute("disabled", "disabled");
  }

  renderIcon = () => {
    return !!this.state.isLiked ? <EventHeartFilled /> : <EventAddLike />;
  }

  handleSetState = () => {
    this.resetState();
    const { event: { likes }, user: { _id: userId } } = this.props;

    // const isLiked = likes.map((item) => item.likeGivenBy._id.toString() === userId.toString() ? true : false).filter(Boolean)[0];


    // nIsLiked = likes.map((item) => {
    //   if (item.likeGivenBy._id.toString() === userId.toString()) {
    //     return true;
    //   }
    // }).filter(Boolean)[0];

    let givenLikeByUser = "";

    givenLikeByUser = likes.find(item => item.likeGivenBy._id === userId)


    // if (typeof nIsLiked === "boolean") {

    let isLiked = givenLikeByUser !== "" ? true : false;

    this.setState({
      isLiked: isLiked,
      loading: false
    })

    this.resetState();
    // }
  }

  resetState = () => {
    this.setState({ ...INIT_STATE });
  };

  render() {
    const { event: {
      _id: eventId,
      title,
      description,
      dateStart,
      timeStart,
      // price,
      owner: { username },
      participants,
      belongsToPlace,
      tag
    } } = this.props;

    return (

      <EventDetailBackground>

        <TimeEventCardDetailLh3>
          <DateFormat dateStart={dateStart} timeStart={timeStart} />
        </TimeEventCardDetailLh3>
        <TitleEventCardDetailDh2>{title}</TitleEventCardDetailDh2>
        <TagEventCardDetailsLh3>#{tag}</TagEventCardDetailsLh3>
        <CardContainer>
          <EventCardDetailContainerSocial>
            <TitleEventCardDetailDh1>Social</TitleEventCardDetailDh1>
            <ContainerRow>
              <div>
                <Link to={`/attend/${eventId}`}>
                  <EventDetailSocialTitle>Attend</EventDetailSocialTitle>
                  <ContainerRow>
                    {participants.slice(0, 2).map((item) =>
                      <p style={{ padding: "0.5em" }}>
                        {item.participant.username}
                      </p>)}
                    {participants.length >= 1 ? <p style={{ padding: "0.5em" }}>+ {participants.length - 2}</p> : ""}
                  </ContainerRow>
                </Link>
              </div>
              <div>
                <EventDetailSocialTitle>Owner</EventDetailSocialTitle>
                {username}
              </div>
            </ContainerRow>
          </EventCardDetailContainerSocial>
          <EventCardDetailContainerInfo>
            <TitleEventCardDetailDh1>Info</TitleEventCardDetailDh1>
            {description}
          </EventCardDetailContainerInfo>
          <EventCardDetailContainerPlace>
            <TitleEventCardDetailDh1>The Place</TitleEventCardDetailDh1>
            {belongsToPlace._id !== null ? <Link to={`/places/${belongsToPlace._id}`}>
              <EventCardDetailMapPlace>
                <div>
                  <PlaceCard place={belongsToPlace} />
                </div>
              </EventCardDetailMapPlace>
            </Link> :
              <div><p>No place available</p></div>
            }
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

      </EventDetailBackground>
    )
  }
}
