import React, { Component } from 'react';
import eventService from "../services/eventService";

export default class EventCard extends Component {


  handleAttend = async () => {
    const { event: { _id } } = this.props;
    await eventService.attendEvent(_id)
  };

  handleLike = async () => {
    const { event: { _id } } = this.props;
    await eventService.addLike(_id)
  };

  render() {
    const { event: { title, description, frequency, dateStart, timeStart, price, owner: { username }, participants, belongsToPlace, tag } } = this.props;
    return (
      <div>
        <p><u>Title</u></p>
        <p>{title}</p>
        <dvi>
          {description}
        </dvi>
        <div>
          {username}
        </div>
        <div>
          <input
            type="button"
            value="Attend"
            name="submit"
            onClick={this.handleAttend}
          />
        </div>
        <div>
          <input
            type="button"
            value="Like"
            name="submit"
            onClick={this.handleLike}
          />
        </div>
      </div>
    )
  }
}
