import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";

class UserEventList extends Component {
  state = {
    events: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const events = await eventService.getAllEventsByOwner()

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

  handleDelete = async (eventId) => {

    await eventService.deleteEvent(eventId)

  };

  render() {
    const { events, loading } = this.state;
    const { user } = this.props;
    {/* {user.eventsOwner === event._id &&} */ }
    return (
      <div>
        <h1>user event</h1>
        {loading && <div>loading...</div>}
        {!loading && events.map((event) => {
          return (
            <div div key={event._id}>
              <div>
                <h2>{event.title}</h2>
                <h2>{event.description}</h2>
              </div>
              <div>
                <Link to={`/event-edit/${event._id}`}>edit</Link>
              </div>
              <div>
                <button onClick={() => this.handleDelete(event._id)} >delete</button>
              </div>
            </div>
          );
        })
        }
      </div>
    );
  }
}

export default withAuth(withTheme(UserEventList));