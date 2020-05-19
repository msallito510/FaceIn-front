import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import PlaceCard from '../places/PlaceCard';

class PlaceDetail extends Component {
  state = {
    place: {},
    isOwner: false,
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } }, user } = this.props;

    try {
      const place = await placeService.getPlaceById(id)

      this.setState({
        place,
        isOwner: (user.hasPlace === id) ? true : false,
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
    const { place, isOwner, loading } = this.state;
    // const { handleLogout } = this.props;
    return (
      <div>
        <h1>PlaceDetail</h1>
        {loading && <div>loading...</div>}
        {!loading && <PlaceCard place={place} />}
        {isOwner &&
          <div>
            <div>
              <Link to={`/place-edit/${place._id}`}>edit</Link>
            </div>
            <div>
              <button onClick={() => this.handleDelete(place)} >delete</button>
            </div>
          </div>

        }
        {/* <button onClick={handleLogout}>Logout</button> */}
        {/* <Link to={`/protectedview`}>ProtectedView</Link> */}
      </div>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));