import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import tagService from "../../services/tagService";

import { TitleDh1, AddEventWrapper, Input, Submit } from "../../styles/styledComponents";

class AddEvent extends Component {
  state = {
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

    try {
      const tags = await tagService.getAllTags();
      const tagId = tags[0]._id;

      this.setState({
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

    const {
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


    await eventService.addEvent(title, description, frequency, dateStart, dateEnd, timeStart, timeEnd, price, tagId);


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
      <AddEventWrapper>
        <TitleDh1>Add a Event</TitleDh1>
        {loading && <div>loading...</div>}
        <div>
          <label htmlFor="name">Title</label>
          <Input
            type="text"
            value={title}
            name="title"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <Input
            type="text"
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Frequency</label>
          <Input
            type="text"
            value={frequency}
            name="frequency"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date Start</label>
          <Input
            type="date"
            value={dateStart}
            name="dateStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date End</label>
          <Input
            type="date"
            value={dateEnd}
            name="dateEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time Start</label>
          <Input
            type="time"
            value={timeStart}
            name="timeStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time End</label>
          <Input
            type="time"
            value={timeEnd}
            name="timeEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time End</label>
          <Input
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
          <Submit
            type="button"
            value="Add Event"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </AddEventWrapper>
    )
  }
}

export default withAuth(withTheme(AddEvent));
