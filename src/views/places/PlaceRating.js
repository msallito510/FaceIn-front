import React, { Component } from 'react';
import { withAuth } from '../../context/authContext';
import { withTheme } from '../../context/themeContext';
import placeService from "../../services/placeService";
import { toast } from 'react-toastify';

import {
  FormWrapper,
  Input
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit
} from "../../styles/commonStyle";

class PlaceRating extends Component {
  state = {
    title: "",
    description: "",
    rating: 4
  }

  handleInput = (e) => {
    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else if (e.target.type === "number") {
      this.setState(
        { [e.target.name]: parseFloat(e.target.value) });
    }
  };

  handleRating = async () => {
    const { title, description, rating } = this.state;
    const { match: { params: { id } }, history: { push } } = this.props;

    const place = { id, title, description, rating };

    await placeService.addRating(place)
      .then(() => {
        push(`/user-profile`);
        toast.success('the rating was edited successfully');

      })
      .catch(error => {
        toast.error(`ERROR. The rating was not edited! - ${error}`);
      })

  };

  render() {
    const { title, description, rating } = this.state;
    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Add a comment</TitleH1>
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
          <form>
            <label htmlFor="name">Rating</label>

            <select type="number" name="rating" value={rating} onChange={this.handleInput}>
              return (
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4" selected="selected">4</option>
              <option value="5">5</option>
                );
            </select>
          </form>
        </div>
        <div>
          <Submit
            type="button"
            value="Rate"
            name="submit"
            onClick={this.handleRating}
          />
        </div>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(PlaceRating));