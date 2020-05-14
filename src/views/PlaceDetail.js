import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import placeService from "../services/placeService";
import PlaceCard from './components/CardBook';

class PlaceDetail extends Component {
  state = {
    place: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    try {
      const place = await placeService.getPlaceById(id)
      this.setState({
        place,
        loading: false
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { place, loading } = this.state;
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>PlaceDetail</h1>
        {loading && <div>loading...</div>}
        {!loading && <PlaceCard place={place} />}
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/protectedview`}>ProtectedView</Link>
      </div>
    );
  }
}

export default withAuth(withTheme(PlaceDetail));