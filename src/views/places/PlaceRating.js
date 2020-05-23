import React, { Component } from 'react';
import { withAuth } from '../../context/authContext';
import { withTheme } from '../../context/themeContext';
import placeService from "../../services/placeService";

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
    const { match: { params: { id } } } = this.props;

    const place = { id, title, description, rating };

    await placeService.addRating(place);
  };

  render() {
    const { title, description, rating } = this.state;

    return (
      <div>
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
          <input
            type="button"
            value="Rating"
            name="submit"
            onClick={this.handleRating}
          />
        </div>
      </div>
    )
  }
}

export default withAuth(withTheme(PlaceRating));