import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import placeService from "../services/placeService";

class PlacesAll extends Component {
  state = {
    places: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const places = await placeService.getAllPlaces()
      this.setState({
        places,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { places, loading } = this.state;
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>PlacesAll</h1>
        {!loading && places.map((place) => {
          return (
            <div key={place._id}>
              <Link to={`/places/${place._id}`}>{place.placeName}</Link>
            </div>
          )
        })}
        {loading && <div>loading...</div>}
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/protectedview`}>ProtectedView</Link>
      </div>
    );
  }
}

export default withAuth(withTheme(PlacesAll));
