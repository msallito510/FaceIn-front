import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import {
  FormWrapper,
  Input,
  Textarea
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit,
  LoadingContainer,
  PlaceContainerAlign,
  PlaceContainer,
  Button,
  Label
} from "../../styles/commonStyle";


class EditEvent extends Component {
  state = {
    eventId: "",
    title: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    timeStart: 0,
    timeEnd: 0,
    price: 0.0,
    imageUrl: "",
    imageName: "",
    loading: true
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    try {
      const event = await eventService.getEventById(id);

      this.setState({
        eventId: event._id,
        title: event.title,
        description: event.description,
        dateStart: event.dateStart,
        dateEnd: event.dateEnd,
        timeStart: event.timeStart,
        timeEnd: event.timeEnd,
        price: event.price,
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
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handlePhoto = async (e) => {

    const imgForm = new FormData();
    imgForm.append("imageUrl", e.target.files[0]);
    await eventService.uploadPhoto(this.state.eventId, imgForm)
      .then(() => {
        toast.success('The image was added successfully');
      })
      .catch(error => {
        toast.error(`ERROR. The image was not added! - ${error}`);
      });
  };

  handleSubmit = async (e) => {

    e.preventDefault();
    const { history: { push } } = this.props;

    const {
      eventId,
      title,
      description,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
    } = this.state;

    await eventService.updateEvent(
      eventId,
      title,
      description,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
    ).then(() => {
      push(`/user-profile`);
      toast.success('The event was edited successfully');

    }).catch(error => {
      toast.error(`ERROR. The event was not edited! - ${error}`);
    })
  };

  handleDelete = async () => {
    const { history: { push } } = this.props;
    const { eventId } = this.state;

    await eventService.deleteEvent(eventId)
      .then(() => {
        push(`/user-profile`);
        toast.success('The event was deleted.');

      })
      .catch(error => {
        toast.error(`ERROR. The event was not deleted! - ${error}`);
      })

  };

  render() {
    const { title,
      description,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
      imageName,
      loading
    } = this.state;

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Edit a Event</TitleH1>
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
        <PlaceContainer>
          <PlaceContainerAlign>
            <div>
              <Label color={theme.color}>Title</Label>
              <Input
                type="text"
                value={title}
                name="title"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Description</Label>
              <Textarea
                type="textarea"
                value={description}
                name="description"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Date Start</Label>
              <Input
                type="date"
                value={dateStart}
                name="dateStart"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Date End</Label>
              <Input
                type="date"
                value={dateEnd}
                name="dateEnd"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Time Start</Label>
              <Input
                type="time"
                value={timeStart}
                name="timeStart"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Time End</Label>
              <Input
                type="time"
                value={timeEnd}
                name="timeEnd"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Time End</Label>
              <Input
                type="number"
                value={price}
                name="price"
                onChange={this.handleInput}
              />
            </div>
          </PlaceContainerAlign>
        </PlaceContainer>
        <div>
          <Label color={theme.color}>Upload an event image</Label>
          <input
            id="myFileUpload"
            type="file"
            value={imageName}
            name="imageName"
            onChange={this.handlePhoto}
            accept=".jpg, .png"
          />
        </div>
        <div>
          <Submit color={theme.color} background={theme.primaryButton}
            type="button"
            value="Update"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
        <div>
          <Button color={theme.color} background={theme.secundaryButton} onClick={this.handleDelete} >
            delete
          </Button>
        </div>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(EditEvent));
