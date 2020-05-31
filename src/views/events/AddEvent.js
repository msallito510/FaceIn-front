import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import tagService from "../../services/tagService";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import {
  FormWrapper,
  InputDark
} from "../../styles/styledComponents";

import {
  Submit,
  TitleH1
} from "../../styles/commonStyle";

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
    } else if (e.target.type === "number") {
      this.setState(
        { [e.target.name]: parseFloat(e.target.value) });
    } else if (e.target.type === "date" && e.target.value !== "") {
      this.setState(
        { [e.target.name]: new Date(e.target.value).toISOString() });

    } else if (e.target.type === "time") {
      this.setState(
        { [e.target.name]: e.target.value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history: { push } } = this.props;

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

    await eventService.addEvent(title, description, frequency, dateStart, dateEnd, timeStart, timeEnd, price, tagId)
      .then(() => {
        push(`/user-profile`);
        toast.success('the event was added successfully');

      })
      .catch(error => {
        toast.error(`ERROR. The event was not created! - ${error}`);
      })

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

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Add a Event</TitleH1>
        {loading && <DualRing />}
        <div>
          <label htmlFor="title">Title</label>
          <InputDark
            type="text"
            value={title}
            name="title"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <InputDark
            type="text"
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="frequency">Frequency</label>
          <InputDark
            type="text"
            value={frequency}
            name="frequency"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="dateStart">Date Start</label>
          <InputDark
            type="date"
            value={dateStart}
            name="dateStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="dateEnd">Date End</label>
          <InputDark
            type="date"
            value={dateEnd}
            name="dateEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="timeStart">Time Start</label>
          <InputDark
            type="time"
            value={timeStart}
            name="timeStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time End</label>
          <InputDark
            type="time"
            value={timeEnd}
            name="timeEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <InputDark
            type="number"
            value={price}
            name="price"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <form>
            <label htmlFor="tagId"># Tag</label>

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
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(AddEvent));
