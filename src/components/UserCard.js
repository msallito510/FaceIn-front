import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class UserCard extends Component {

  render() {
    const { user: { username, likesGiven } } = this.props;
    return (
      <div>
        {likesGiven.map((event) => {
          return (
            <div key={event._id}>
              <Link to={`/events/${event.likeForEvent._id}`}>
                <h2>{event.likeForEvent.title}</h2>
                <p>{event.likeForEvent.description}</p>
              </Link>

            </div>
          );
        })}
      </div>
    )
  }
}
