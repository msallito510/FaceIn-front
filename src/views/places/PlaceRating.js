import React, { Component } from 'react';
import { withAuth } from '../../context/authContext';
import { withTheme } from '../../context/themeContext';
import placeService from "../../services/placeService";
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-rater/lib/react-rater.css';
import Rater from 'react-rater';

import {
  FormWrapper,
  Input
} from "../../styles/styledComponents";

import {
  TitleH1,
  Submit,
  PlaceContainerAlign,
  PlaceContainer,
  Label
} from "../../styles/commonStyle";

const SubmitContainer = styled.div`
  margin-top: 5em;
`;

const RatingContainer = styled.div`
  position: relative;
  right: 3em;
  padding: 1em;
`;

class PlaceRating extends Component {
  state = {
    title: "",
    description: "",
    stars: 4
  }

  handleInput = (e) => {
    if (e.target.type === "text") {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleRate({ rating }) {
    const { rating: lastRating } = this.state;
    if (rating === lastRating) {
      return
    }

    this.setState({
      stars: rating,
    })
  }

  handleRating = async () => {
    const { title, description, stars } = this.state;
    const { match: { params: { id } }, history: { push } } = this.props;

    const place = { id, title, description, stars };

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
    const { title, description, stars } = this.state;
    const { theme } = this.props;

    return (
      <FormWrapper>
        <TitleH1 color={theme.color}>Add a comment</TitleH1>
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
            <RatingContainer>
              <Label color={theme.color}>Rating</Label>
              <Rater rating={stars} total={5} onRate={this.handleRate.bind(this)} />
            </RatingContainer>
          </PlaceContainerAlign>
        </PlaceContainer>
        <SubmitContainer>
          <Submit
            type="button"
            value="Rate"
            name="submit"
            onClick={this.handleRating}
          />
        </SubmitContainer>
      </FormWrapper>
    )
  }
}

export default withAuth(withTheme(PlaceRating));