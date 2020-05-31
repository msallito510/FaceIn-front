import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import placeService from "../../services/placeService";
import { DualRing } from 'react-awesome-spinners';

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

    return (
      <div>
        <h1>PlacesAll</h1>
        {loading && <DualRing />}
        {!loading && places.map((place) => {
          return (
            <div key={place._id}>
              <Link to={`/places/${place._id}`}>{place.placeName}</Link>
            </div>
          )
        })}

      </div>
    );
  }
}

export default withAuth(withTheme(PlacesAll));
