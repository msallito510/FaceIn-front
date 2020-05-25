import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import ratingService from "../../services/ratingService";
import PlaceCard from '../places/PlaceCard';

import {
  TitleDh1,
  TitleDh2_2,
  CommentsBackground,
  FormWrapper,
  CommentContainer,
  Container_row,
  Button_secundary,
  Link_div_primary,
  Link_div_tertiary,
  StyledLink_L,
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
              <Container_row>
                <TitleDh2_2>Comments</TitleDh2_2>
                {ratings.map((rating) =>
                  <CommentContainer>
                    <h2>{rating.title}</h2>
                    <p>{rating.description}</p>
                    <p>stars - {rating.stars}</p>
                  </CommentContainer>
                )}
              </Container_row>
            </CommentsBackground>
          </FormWrapper>
        }
       
          <CommentsContainer>
            {isOwner ?
              <div>
                <Link_div_primary>
                  <StyledLink_L to={`/place-edit/${place._id}`}>edit</StyledLink_L>
                </Link_div_primary>
                <div>
                  <Button_secundary onClick={() => this.handleDelete(place)} >delete</Button_secundary>
                </div>
              </div> :
              <Link_div_tertiary>
                <Link to={`/rating/${place._id}`}>Rating</Link>
              </Link_div_tertiary>

            }
          </CommentsContainer>

      </div>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));