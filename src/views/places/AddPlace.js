import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import placeService from "../../services/placeService";

class AddPlace extends Component {
  state = {
    placeName: "",
    address: "",
    city: "",
    country: "",
    loading: true
  }

  async componentDidMount() {

    try {
      const places = await placeService.getAllPlaces();

      this.setState({
        placeName: places.placeName,
        address: places.address,
        city: places.city,
        country: places.country,
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
    });

  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { history: { push } } = this.props;

    const {
      placeName,
      address,
      city,
      country
    } = this.state;

    await placeService.addPlace(placeName, address, city, country)
      .then(() => { push(`/user-profile`); })
      .catch(error => console.log(error));

  };

  render() {
    const {
      placeName,
      address,
      city,
      country,
      loading
    } = this.state;
    return (
      <div>
        <h1>Add a Place</h1>
        {loading && <div>loading...</div>}
        <div>
          <label htmlFor="name">Place name</label>
          <input
            type="text"
            value={placeName}
            name="placeName"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Address</label>
          <input
            type="text"
            value={address}
            name="address"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">City</label>
          <input
            type="text"
            value={city}
            name="city"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Country</label>
          <input
            type="text"
            value={country}
            name="country"
            onChange={this.handleInput}
          />
        </div>

        <div>
          <input
            type="button"
            value="Add Place"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default withAuth(withTheme(AddPlace));
