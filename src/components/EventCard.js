import React, { Component } from 'react';
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

import eventService from "../services/eventService";

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

const INIT_STATE = {
  isLiked: "",
  loading: true,
};

const MapReadOnly = styled.div`
  pointer-events: none;
  `;

class EventCard extends Component {

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
      });

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

  // renderIcon = () => {
  //   return !!this.state.isLiked ? <EventHeartFilled /> : <EventAddLike />;
  // }

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
      price,
      owner: { username, imageTwo },
      participants,
      belongsToPlace,
    },
      theme } = this.props;

    const isLiked = this.state;
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
                <StyledLink to={`/attend/${eventId}`}>
                  <SocialTitle>Attend</SocialTitle>
                  <ContainerRow>
                    {participants.slice(0, 2).map((item) => {
                      return (<div>

                        {item.participant.imageTwo ?
                          <SocialPhoto src={item.participant.imageTwo} alt={item.participant.username} />
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
                {imageTwo ? <SocialPhoto src={imageTwo} alt={imageTwo} /> :
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
          <button onClick={this.handleLike}>
            {/* {this.renderIcon()} */}
            {!!isLiked ? <EventHeartFilled color={theme} /> : <EventAddLike color={theme} />}
          </button>
        </LikeButtonContainer>

      </EventDetailBackground>
    )
  }
}

export default withAuth(withTheme(EventCard));