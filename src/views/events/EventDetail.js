import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import EventCard from "../../components/EventCard";

import {
  TitleLh1,
  keyFrameEvendDetailImg,

} from "../../styles/styledComponents";

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
    return (
      <keyFrameEvendDetailImg>
        <TitleLh1>Event detail</TitleLh1>
        {loading && <div>loading...</div>}
        {!loading && <EventCard event={event} />}

      </keyFrameEvendDetailImg>
    );
  }
}

export default withAuth(withTheme(EventDetail));
