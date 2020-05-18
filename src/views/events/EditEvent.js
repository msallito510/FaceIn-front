import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import tagService from "../../services/tagService";

class EditEvent extends Component {
  state = {
    eventId: "",
    title: "",
    description: "",
    frequency: "",
    dateStart: "",
    dateEnd: "",
    timeStart: 0,
    timeEnd: 0,
    price: 0.0,
    tagId: "",
    tags: [],
    loading: true
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    try {
      const event = await eventService.getEventById(id);
      const tags = await tagService.getAllTags();
      const tagId = await tagService.getTagById(event.tag._id);
      // const tagId = tags[0]._id;

      this.setState({
        eventId: event._id,
        title: event.title,
        description: event.description,
        frequency: event.frequency,
        dateStart: event.dateStart,
        dateEnd: event.dateEnd,
        timeStart: event.timeStart,
        timeEnd: event.timeEnd,
        price: event.price,
        tags,
        tagId,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  handleInput = (e) => {
    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value,
      });
      console.log(e.target.value);
    } else if (e.target.type === "number") {
      this.setState(
        { [e.target.name]: parseFloat(e.target.value) });
      console.log(e.target.value);
    } else if (e.target.type === "date" && e.target.value !== "") {
      this.setState(
        { [e.target.name]: new Date(e.target.value).toISOString() });
      console.log(e.target.value);
    } else if (e.target.type === "time") {
      this.setState(
        { [e.target.name]: e.target.value });
      console.log(e.target.value);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // const { user: { user } } = this.props;
    // const event = this.state;

    const {
      eventId,
      title,
      description,
      frequency,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
      tagId
    } = this.state;
    console.log(title);
    console.log(description);


    await eventService.updateEvent(eventId, title, description, frequency, dateStart, dateEnd, timeStart, timeEnd, price, tagId);


    // await eventService.addEvent(event)
  };

  render() {
    const { title,
      description,
      frequency,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
      tags,
      loading
    } = this.state;

    return (
      <div>
        <h1>Edit a Event</h1>
        {loading && <div>loading...</div>}
        <div>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Frequency</label>
          <input
            type="text"
            value={frequency}
            name="frequency"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date Start</label>
          <input
            type="date"
            value={dateStart}
            name="dateStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date End</label>
          <input
            type="date"
            value={dateEnd}
            name="dateEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time Start</label>
          <input
            type="time"
            value={timeStart}
            name="timeStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time End</label>
          <input
            type="time"
            value={timeEnd}
            name="timeEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time End</label>
          <input
            type="number"
            value={price}
            name="price"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <form>
            <label htmlFor="name"># Tag</label>

            <select type="text" name="tagId" value="tagId" onChange={this.handleInput}>
              {!loading && tags.map((tag) => {
                return (
                  <option value={tag._id}>{tag.tagName}</option>
                );
              })}
            </select>
          </form>
        </div>
        <div>
          <input
            type="button"
            value="Add Event"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default withAuth(withTheme(EditEvent));
