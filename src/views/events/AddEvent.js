import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import eventService from "../../services/eventService";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import {
  FormWrapper,
  Input
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
    frequency: "",
    dateStart: "",
    dateEnd: "",
    timeStart: 0,
    timeEnd: 0,
    price: 0.0,
    loading: true
  }

  async componentDidMount() {

    try {

      this.setState({
        loading: false,
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
    } = this.state;

    await eventService.addEvent(title, description, frequency, dateStart, dateEnd, timeStart, timeEnd, price)
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
      loading
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
              <Input
                type="text"
                value={description}
                name="description"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Frequency</Label>
              <Input
                type="text"
                value={frequency}
                name="frequency"
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
            {/* <div>
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
            </div> */}
          </PlaceContainerAlign>
        </PlaceContainer>
        <div>
          <Submit color={theme.color} background={theme.primaryButton}
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
