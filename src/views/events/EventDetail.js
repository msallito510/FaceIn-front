import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import EventCard from "../../components/EventCard";
import styled, { keyframes } from 'styled-components';

const keyFrameImage = keyframes`
  0% {
  }
  50% {
    background-position: Calc(-35vw - 40px) 50%;
  }
`;

const EventImg = styled.div`
  position: absolute;
  background-image: url(${ (props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: hidden;
  width: 100%;
  height: 376px;
  top: 10em;
  transform: translateY(-50%);

  animation: ${keyFrameImage} 20s 2;
  animation-delay: 2s;
`;

class EventDetail extends Component {
  state = {
    event: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    try {
      const event = await eventService.getEventById(id);
      this.setState({
        event,
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
    const { event, loading } = this.state;
    const { user } = this.props;
    return (
      <div>
        <EventImg image={event.image} />
       
        {loading && <div>loading...</div>}
        {!loading && <EventCard event={event} user={user} />}

      </div >
    );
  }
}

export default withAuth(withTheme(EventDetail));
