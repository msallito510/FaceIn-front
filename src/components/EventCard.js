import React, { Component } from 'react';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import eventService from "../services/eventService";
import userService from "../services/userService";

import PlaceCard from '../views/places/PlaceCard';
import DateFormat from "../components/DateFormat";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import styled from 'styled-components';

import {
  Button
} from "../styles/commonStyle";

import {
  EventDetailBackground,
  TitleEventDetailH1,
  TitleEventDetailH2,
  TitleEventDetailH3,
  SocialTitle,
  Paragraph,
  MapPlaceContainer,
  TimeInfoContainer,
  SubmitContainer,
  LikeButtonContainer,
  SocialContainer,
  InfoContainer,
  InfoMapPlaceContainer,
  SocialPhoto,
  SocialCounter

} from "../styles/eventDetailStyle";

import { CardContainer, ContainerRow, StyledLink } from "../styles/styledComponents";

import { EventAddLike, EventHeartFilled } from "../styles/icon-style";


const MapReadOnly = styled.div`
  pointer-events: none;
  `;


class EventCard extends Component {

  state = {
    isLiked: false,
    loading: true,
    currentUser: "",
    eventId: "",
    participants: [],
    isAParticipant: false,
  }

  async componentDidMount() {
    const { event: { _id: eventId, participants }, user: { _id: userId } } = this.props;

    const currentUser = await userService.getUserById(userId);


    this.setState({
      currentUser,
      eventId,
      participants,
    })

    this.handleSetState();
  }

  shouldComponentUpdate(nextState) {
    return this.state.isLiked !== nextState.isLiked;
  }

  handleAttend = async () => {
    const { event: { _id } } = this.props;
    const { isAParticipant } = this.state;

    if (!isAParticipant) {
      await eventService.attendEvent(_id)
        .then(() => {
          toast.success('You have been confirmed for the event!');
          this.handleSetState();
        })
        .catch(error => {
          toast.error(`ERROR. Cannot be confirmed - ${error}`);
        });

    } else {
      toast.warning('You have alredy registered in the event.');
    }

  };

  handleLike = async () => {
    const { eventId } = this.state;
    try {
      await eventService.addLike(eventId)
        .then(() => {
          this.handleSetState();
        })

    } catch (error) {
      console.log(error);
    }

  };

  handleSetState = async () => {

    const { eventId, currentUser } = this.state;

    const event = await eventService.getEventById(eventId)

    let givenLikeByUser = "";
    let participantId = "";

    if (currentUser !== "" && event.likes.length !== 0) {
      givenLikeByUser = event.likes.find(item => item.likeGivenBy._id === currentUser._id)
    }

    let isLiked = givenLikeByUser !== "" ? true : false;


    if (event.participants.length !== 0) {
      participantId = event.participants.find(item => item.participant._id === currentUser._id)
    }

    const isAParticipant = participantId === undefined || participantId === "" ? false : true;

    this.setState({
      isLiked: isLiked,
      participants: event.participants,
      isAParticipant,
      loading: false,
    })

  }

  render() {
    const { event: {
      _id: eventId,
      title,
      description,
      dateStart,
      timeStart,
      price,
      owner: { username, imageUrl },
      belongsToPlace,
    },
      theme } = this.props;

    const { isLiked, participants } = this.state;
    return (

      <EventDetailBackground background={theme}>

        <TimeInfoContainer>
          <DateFormat dateStart={dateStart} timeStart={timeStart} />
        </TimeInfoContainer>
        <TitleEventDetailH1>{title}</TitleEventDetailH1>
        <TitleEventDetailH3>Price: {price}€</TitleEventDetailH3>
        <CardContainer>
          <SocialContainer>
            <TitleEventDetailH2>Social</TitleEventDetailH2>
            <ContainerRow>
              <div>
                <StyledLink to={`/participants-event/${eventId}`}>
                  <SocialTitle>Attend</SocialTitle>
                  <ContainerRow>
                    {participants.slice(0, 2).map((item, index) => {
                      return (<div key={index}>

                        {item.participant.imageUrl ?
                          <SocialPhoto src={item.participant.imageUrl} alt={item.participant.username} />
                          : <Paragraph>{item.participant.username}</Paragraph>}
                      </div>)
                    })
                    }
                    {
                      participants.length < 2 ? "" :
                        <SocialCounter>+ {participants.length - 2}</SocialCounter>
                    }
                  </ContainerRow>
                </StyledLink>
              </div>
              <div>
                <SocialTitle>Owner</SocialTitle>
                {imageUrl ? <SocialPhoto src={imageUrl} alt={imageUrl} /> :
                  <Paragraph>{username}</Paragraph>
                }
              </div>
            </ContainerRow>
          </SocialContainer>
          <InfoContainer>
            <TitleEventDetailH2>Info</TitleEventDetailH2>
            <Paragraph>
              {description}
            </Paragraph>
          </InfoContainer>
          <InfoMapPlaceContainer>
            <TitleEventDetailH2>The Place</TitleEventDetailH2>
            {belongsToPlace._id !== null ? <Link to={`/places/${belongsToPlace._id}`}>
              <MapPlaceContainer>
                <MapReadOnly>
                  <PlaceCard place={belongsToPlace} />
                </MapReadOnly>
              </MapPlaceContainer>
            </Link> :
              <div><p>No place available</p></div>
            }
          </InfoMapPlaceContainer>
        </CardContainer>
        <SubmitContainer>
          <Button color={theme.color} background={theme.primaryButton} ref="btn" onClick={this.handleAttend}>
            Attend
          </Button>
        </SubmitContainer>

        <LikeButtonContainer>
          <div onClick={this.handleLike}>

            {isLiked ?
              <EventHeartFilled color={theme} /> :
              <EventAddLike color={theme} />}
          </div>
        </LikeButtonContainer>

      </EventDetailBackground>
    )
  }
}

export default withAuth(withTheme(EventCard));