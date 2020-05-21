import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";

import placeService from "../../services/placeService";
import { TitleDh1, FormWrapper, Input, Submit } from "../../styles/styledComponents";

class EditPlace extends Component {
  state = {
    placeId: "",
    placeName: "",
    address: "",
    city: "",
    country: "",
    loading: true
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    try {
      const places = await placeService.getPlaceById(id);

      this.setState({
        placeId: places._id,
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
  handleSubmit = (e) => {
    e.preventDefault();

    const { history: { push } } = this.props;

    const {
      placeId,
      placeName,
      address,
      city,
      country
    } = this.state;

    placeService.updatePlace(placeId, placeName, address, city, country)
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
      <FormWrapper>
        <TitleDh1>Edit a Place</TitleDh1>
        {loading && <div>loading...</div>}
        <div>
          <label htmlFor="name">Place name</label>
          <Input
            type="text"
            value={placeName}
            name="placeName"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Address</label>
          <Input
            type="text"
            value={address}
            name="address"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">City</label>
          <Input
            type="text"
            value={city}
            name="city"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Country</label>
          <Input
            type="text"
            value={country}
            name="country"
            onChange={this.handleInput}
          />
        </div>

        <div>
          <Submit
            type="button"
            value="Edit Place"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(EditPlace));
