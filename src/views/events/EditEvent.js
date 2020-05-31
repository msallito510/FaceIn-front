import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import tagService from "../../services/tagService";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';
// import { Image } from 'cloudinary-react';

import {
  FormWrapper,
  InputDark
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit
} from "../../styles/commonStyle";

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
    imageUrl: "",
    imageName: "",
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
        // imageUrl: event.image,
        tags,
        tagId: tagId._id,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  handleInput = async (e) => {
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
    } else if (e.target.type === "file") {

      const imgForm = new FormData();
      imgForm.append("imageUrl", e.target.files[0]);
      await eventService.uploadPhoto(this.state.eventId, imgForm)
        .then(() => {
          toast.success('the image was added successfully');
        })
        .catch(error => {
          toast.error(`ERROR. The image was not added! - ${error}`);
        });



    };
  };

  handleSubmit = async (e) => {

    e.preventDefault();
    const { history: { push } } = this.props;

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
      // imageUrl,
      tagId
    } = this.state;

    await eventService.updateEvent(
      eventId,
      title,
      description,
      frequency,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
      tagId,
    ).then(() => {
      push(`/user-profile`);
      toast.success('the event was edited successfully');

    }).catch(error => {
      toast.error(`ERROR. The event was not edited! - ${error}`);
    })
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
      imageName,
      tags,
      loading
    } = this.state;

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Edit a Event</TitleH1>
        {loading && <DualRing />}
        <div>
          <label htmlFor="name">Title</label>
          <InputDark
            type="text"
            value={title}
            name="title"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <InputDark
            type="text"
            value={description}
            name="description"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Frequency</label>
          <InputDark
            type="text"
            value={frequency}
            name="frequency"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date Start</label>
          <InputDark
            type="date"
            value={dateStart}
            name="dateStart"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Date End</label>
          <InputDark
            type="date"
            value={dateEnd}
            name="dateEnd"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Time Start</label>
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
          <label htmlFor="name">Time End</label>
          <InputDark
            type="number"
            value={price}
            name="price"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Upload an event image</label>
          <input
            id="myFileUpload"
            type="file"
            value={imageName}
            name="imageName"
            onChange={this.handleInput}
            accept=".jpg, .png"
          />
        </div>


        {/* <input
              id=“file-input1”
              type=“file”
              onChange={e => handleChangeFile(e, setImage1)}
            /> */}

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
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(EditEvent));
