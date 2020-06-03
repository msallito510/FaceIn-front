import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';

import placeService from "../../services/placeService";
import { FormWrapper, Input } from "../../styles/styledComponents";
import { DualRing } from 'react-awesome-spinners';

import {
  TitleH1,
  Submit,
  LoadingContainer,
  PlaceContainerAlign,
  PlaceContainer,
  Label
} from "../../styles/commonStyle";


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
      const place = await placeService.getPlaceById(id);

      this.setState({
        placeId: place._id,
        placeName: place.placeName,
        address: place.address,
        city: place.city,
        country: place.country,
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
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
        <PlaceContainer>
          <PlaceContainerAlign>
            <div>
              <Label color={theme.color}>Place name</Label>
              <Input
                type="text"
                value={placeName}
                name="placeName"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Address</Label>
              <Input
                type="text"
                value={address}
                name="address"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>City</Label>
              <Input
                type="text"
                value={city}
                name="city"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <Label color={theme.color}>Country</Label>
              <Input
                type="text"
                value={country}
                name="country"
                onChange={this.handleInput}
              />
            </div>
          </PlaceContainerAlign>
        </PlaceContainer>
        <div>
          <div>
            <Submit color={theme.color} background={theme.primaryButton}
              type="button"
              value="Edit Place"
              name="submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(EditPlace));
