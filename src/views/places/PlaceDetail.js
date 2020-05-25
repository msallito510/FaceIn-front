import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import ratingService from "../../services/ratingService";
import PlaceCard from '../places/PlaceCard';

import {
  TitleDh1,
  TitleDh2Secundary,
  CommentsBackground,
  FormWrapper,
  CommentContainer,
  ContainerRow,
  ButtonSecundary,
  LinkDivPrimary,
  LinkDivTertiary,
  StyledLinkLight,
  CommentsContainer

} from "../../styles/styledComponents";

class PlaceDetail extends Component {
  state = {
    place: {},
    isOwner: false,
    ratings: [],
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } }, user } = this.props;

    try {
      const place = await placeService.getPlaceById(id);
      const ratings = await ratingService.getAllRatings();

      this.setState({
        place,
        isOwner: (user.hasPlace === id) ? true : false,
        ratings,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  handleDelete = async (place) => {

    await placeService.deletePlace(place)

  };

  render() {
    const { place, ratings, isOwner, loading } = this.state;

    return (
      <div>
        <TitleDh1>Place Detail</TitleDh1>
        {loading && <div>loading...</div>}
        {!loading &&
          <FormWrapper>
            <div>
              <PlaceCard place={place} />
            </div>
            <CommentsBackground>
              <ContainerRow>
                <TitleDh2Secundary>Comments</TitleDh2Secundary>
                {ratings.map((rating) =>
                  <CommentContainer>
                    <h2>{rating.title}</h2>
                    <p>{rating.description}</p>
                    <p>stars - {rating.stars}</p>
                  </CommentContainer>
                )}
              </ContainerRow>
            </CommentsBackground>
          </FormWrapper>
        }

        <CommentsContainer>
          {isOwner ?
            <div>
              <LinkDivPrimary>
                <StyledLinkLight to={`/place-edit/${place._id}`}>edit</StyledLinkLight>
              </LinkDivPrimary>
              <div>
                <ButtonSecundary onClick={() => this.handleDelete(place)} >delete</ButtonSecundary>
              </div>
            </div> :
            <LinkDivTertiary>
              <Link to={`/rating/${place._id}`}>Rating</Link>
            </LinkDivTertiary>

          }
        </CommentsContainer>

      </div>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));