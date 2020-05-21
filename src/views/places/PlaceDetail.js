import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import ratingService from "../../services/ratingService";
import PlaceCard from '../places/PlaceCard';

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
    // const { handleLogout } = this.props;
    return (
      <div>
        <h1>Place Detail</h1>
        {loading && <div>loading...</div>}
        {!loading &&
          <div>
            <div><PlaceCard place={place} /></div>
            <div>
              <h2>Comments</h2>
              {ratings.map((rating) =>
                <div>
                  <h2>{rating.title}</h2>
                  <p>{rating.description}</p>
                  <p>stars - {rating.stars}</p>
                </div>
              )}
            </div>
          </div>
        }

        {isOwner ?
          <div>
            <div>
              <Link to={`/place-edit/${place._id}`}>edit</Link>
            </div>
            <div>
              <button onClick={() => this.handleDelete(place)} >delete</button>
            </div>
          </div> : <div>
            <Link to={`/rating/${place._id}`}>Rating</Link>
          </div>

        }
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* <Link to={`/protectedview`}>ProtectedView</Link> */}
      </div>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));