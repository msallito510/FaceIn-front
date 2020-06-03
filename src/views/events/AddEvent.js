import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import userService from "../../services/userService";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import {
  FormWrapper,
  Input,
  Textarea
} from "../../styles/styledComponents";

import {
  Submit,
  TitleH1,
  LoadingContainer,
  PlaceContainerAlign,
  PlaceContainer,
  Label
} from "../../styles/commonStyle";

class AddEvent extends Component {
  state = {
    title: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    timeStart: 0,
    timeEnd: 0,
    price: 0.0,
    loading: true,
    hasPlace: false,
  }

  async componentDidMount() {
    const { user: { _id } } = this.props;

    try {
      const currentUser = await userService.getUserById(_id);
      const hasPlace = currentUser.hasPlace.length !== 0 ? true : false;

      this.setState({
        loading: false,
        hasPlace,
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history: { push } } = this.props;

    const {
      title,
      description,
      dateStart,
      dateEnd,
      timeStart,
      timeEnd,
      price,
    } = this.state;

    await eventService.addEvent(title, description, dateStart, dateEnd, timeStart, timeEnd, price)
      .then(() => {
        push(`/user-profile`);
        toast.success('The event was added successfully');

      })
      .catch(error => {
        toast.error(`ERROR. The event was not created! - ${error}`);
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
      loading,
      hasPlace
    } = this.state;

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Add a Event</TitleH1>
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
              <Label color={theme.color}>Price</Label>
              <Input
                type="number"
                value={price}
                name="price"
                onChange={this.handleInput}
              />
            </div>

          </PlaceContainerAlign>
        </PlaceContainer>
        {hasPlace ? <div>
          <Submit color={theme.color} background={theme.primaryButton}
            type="button"
            value="Add Event"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div> : <Label color={theme.color}>It is necessary to have created a Place before creating an Event</Label>}
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(AddEvent));
