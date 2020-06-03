import React, { Component } from "react";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import PlaceCard from '../places/PlaceCard';
import styled from 'styled-components';
import { DualRing } from 'react-awesome-spinners';
import 'react-rater/lib/react-rater.css';
import Rater from 'react-rater';

import {
  TitleDh2Secundary,
  FormWrapper,
  ContainerRow,
  LinkContainer,
  StyledLink,
} from "../../styles/styledComponents";

import { TitleH1, GeneralContainer, Button, LoadingContainer } from "../../styles/commonStyle";

const TitleH2 = styled.h1`
  font-size: 1.2em;
  font-style: italic;
`;

const CommentsBackground = styled.div`
  background: #F9F9F9;
  overflow: hidden;
  overflow-y: scroll;
  bottom: -7em;
  top: 27em;
  position: absolute;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-radius: 2em 2em 0em 0em;
  left: 0em;
  `;

const CommentsContainer = styled.div`
  position:absolute;
  bottom:3em;
`;

const CommentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
  padding:2em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 6em 1em;
`;

const EmptyCommentMsg = styled.h2`
  position: absolute;
  top: 3em;
  
`;

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

      this.setState({
        place,
        isOwner: (user.hasPlace === id) ? true : false,
        ratings: place.ratings.length === undefined ? [] : place.ratings,
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
    const { theme } = this.props;

    return (
      <GeneralContainer>
        <TitleH1 color={theme.color}>Place Detail</TitleH1>
        {loading && <LoadingContainer><DualRing /></LoadingContainer>}
        {!loading &&
          <FormWrapper>
            <div>
              <PlaceCard place={place} />
            </div>
            <CommentsBackground>
              <ContainerRow>
                <TitleDh2Secundary>Comments</TitleDh2Secundary>
              </ContainerRow>
              {ratings.length > 0 ? ratings.map((rating) =>
                <CommentContainer>
                  <div>
                    <TitleH2>{rating.title}</TitleH2>
                    <Rater rating={rating.stars} total={5} interactive={false} />
                  </div>
                  <p>{rating.description}</p>

                </CommentContainer>
              ) : <EmptyCommentMsg>there are not any comments yet</EmptyCommentMsg>
              }

            </CommentsBackground>
          </FormWrapper>
        }

        <CommentsContainer>
          {isOwner ?
            <ButtonsContainer>
              <LinkContainer color={theme.color} background={theme.primaryButton}>
                <StyledLink to={`/place-edit/${place._id}`}>edit</StyledLink>
              </LinkContainer>
              <div>
                <Button color={theme.color} background={theme.secundaryButton} onClick={() => this.handleDelete(place)} >
                  delete
                </Button>
              </div>
            </ButtonsContainer> :
            <LinkContainer color={theme.color} background={theme.primaryButton}>
              <StyledLink to={`/rating/${place._id}`}>Rating</StyledLink>
            </LinkContainer>

          }
        </CommentsContainer>

      </GeneralContainer>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));