import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';

import placeService from "../../services/placeService";
import { FormWrapper, InputDark } from "../../styles/styledComponents";
import { TitleH1, Submit } from "../../styles/commonStyle";

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
      .then(() => {
        push(`/user-profile`);
        toast.success('the place was edited successfully');

      })
      .catch(error => {
        toast.error(`ERROR. The place was not edited! - ${error}`);
      })

  };

  render() {
    const {
      placeName,
      address,
      city,
      country,
      loading
    } = this.state;

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Edit a Place</TitleH1>
        {loading && <div>loading...</div>}
        <div>
          <label htmlFor="name">Place name</label>
          <InputDark
            type="text"
            value={placeName}
            name="placeName"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Address</label>
          <InputDark
            type="text"
            value={address}
            name="address"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">City</label>
          <InputDark
            type="text"
            value={city}
            name="city"
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Country</label>
          <InputDark
            type="text"
            value={country}
            name="country"
            onChange={this.handleInput}
          />
        </div>

        <div>
          <Submit color={theme.color} background={theme.primaryButton}
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
