import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import placeService from "../../services/placeService";
import {
  FormWrapper,
  Input
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit,
  LoadingContainer
} from "../../styles/commonStyle";

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
      .then(() => {
        push(`/user-profile`);
        toast.success('the place was added successfully');

      })
      .catch(error => {
        toast.error(`ERROR. The place was not created! - ${error}`);
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
        <TitleH1 color={theme.color}>Add a Place</TitleH1>
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
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
            value="Add Place"
            name="submit"
            onClick={this.handleSubmit}
          />
        </div>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(AddPlace));
