import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import EventCard from "../../components/EventCard";


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
      <div>
        <h1>Event detail</h1>
        {loading && <div>loading...</div>}
        {!loading && <EventCard event={event} />}
        <Link to={`/events`}> back </Link>
      </div>
    );
  }
}

export default withAuth(withTheme(EventDetail));
