import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";

class WhatIsHotEvents extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {

    try {
      const events = await eventService.getAllEvents()
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

    return (
      <div>
        <h1>Most popular events</h1>
        {loading && <div>loading...</div>}
        {!loading && events.map((event) => {
          return (
            <div key={event._id}>
              <Link to={`/events/${event._id}`}>{event.title}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(withTheme(WhatIsHotEvents));
