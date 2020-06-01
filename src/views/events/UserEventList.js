import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { Link } from "react-router-dom";

import DateFormat from "../../components/DateFormat";
import styled from 'styled-components';
import { DualRing } from 'react-awesome-spinners';

import eventService from "../../services/eventService";
import {
  FormWrapper,
  SimpleContainerScroll,
  LinkContainer,
  StyledLink,
  CardContainer,
  EventCardContainer,
  ContentEventCard,
  ContainerRow
} from "../../styles/styledComponents";

import {
  TitleH1,
  LoadingContainer
} from "../../styles/commonStyle";

import { PlayCircleIcon } from "../../styles/icon-style";

const TitleEditEvent = styled.h3`
  position: relative;
  top: 1em;
  opacity: 1;
  padding: 0.3em;
  font-weight: 900;
  font-size: 1em;
  text-align: center;
  color: #1F1F1F;
  width: -webkit-fill-available;
`;

const TimeEditEvent = styled.h3`  
position: relative;
  top: 1em;
  font-weight: 200;
  font-size: 0.8em;
  padding: 0.2em;
  line-height: 13px;
  width: -webkit-fill-available;
`;

const AccessLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none !important;
  color: #1F1F1F
`;

class UserEventList extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const events = await eventService.getAllEventsByOwner();

      this.setState({
        events,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { events, loading } = this.state;
    const { theme } = this.props;

    return (
      <FormWrapper>
        <SimpleContainerScroll>
          <TitleH1 color={theme.color}>User event list</TitleH1>
          {loading && <LoadingContainer><DualRing /></LoadingContainer>}
          {!loading && events.map((event) => {
            return (
              <CardContainer key={event._id}>
                <EventCardContainer>
                  <ContentEventCard>
                    <TitleEditEvent>{event.title}</TitleEditEvent>
                    <TimeEditEvent>
                      <DateFormat dateStart={event.dateStart} timeStart={event.timeStart} />
                    </TimeEditEvent>
                  </ContentEventCard>

                  <ContainerRow>
                    <LinkContainer color={theme.color} background={theme.secundaryButton}>
                      <AccessLink to={`/attend/${event._id}`}>
                        <PlayCircleIcon color={theme.color} />Access

                      </AccessLink>
                    </LinkContainer>
                    <LinkContainer color={theme.color} background={theme.primaryButton}>
                      <StyledLink to={`/event-edit/${event._id}`}>edit</StyledLink>
                    </LinkContainer>
                  </ContainerRow>

                </EventCardContainer>
              </CardContainer>
            );
          })
          }
        </SimpleContainerScroll>
      </FormWrapper>
    );
  }
}

export default withAuth(withTheme(UserEventList));