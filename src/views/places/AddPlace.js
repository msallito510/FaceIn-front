import React, { Component } from 'react';
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { toast } from 'react-toastify';
import { DualRing } from 'react-awesome-spinners';

import placeService from "../../services/placeService";
import userService from "../../services/userService";

import {
  FormWrapper,
  Input
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit,
  LoadingContainer,
  PlaceContainerAlign,
  PlaceContainer
} from "../../styles/commonStyle";

import { Label } from "../../styles/commonStyle";

class AddPlace extends Component {
  _isMounted = false;

  state = {
    placeName: "",
    address: "",
    city: "",
    country: "",
    loading: true,
    hasPlace: false,
  }

  async componentDidMount() {
    const { user: { _id } } = this.props;
    this._isMounted = true;

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

  componentWillUnmount() {
    this._isMounted = false;
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
        toast.success('The place was added successfully');

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
      loading,
      hasPlace
    } = this.state;

    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Add a Place</TitleH1>
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
        {!hasPlace ? <div>
          <div>
            <Submit color={theme.color} background={theme.primaryButton}
              type="button"
              value="Add Place"
              name="submit"
              onClick={this.handleSubmit}
            />
          </div>
        </div> : <Label color={theme.color}>It is only possible to create one place per user.</Label>}
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(AddPlace));
