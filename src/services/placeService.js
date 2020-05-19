import axios from "axios";

class PlaceService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  addPlace(placeName, address, city, country) {
    const place = {
      placeName,
      address,
      city,
      country
    }
    return this.axios
      .post(`/api/places/add`, place)
      .then(({ data: place }) => place);
  }

  getAllPlaces() {
    return this.axios.get("/api/places")
      .then(({ data: places }) => places);
  }

  getPlaceById(id) {
    return this.axios.get(`/api/places/${id}`)
      .then(({ data: place }) => place);
  }

  updatePlace(placeId, placeName, address, city, country) {
    return this.axios
      .put(`/api/places/${placeId}/edit`, {
        placeId,
        placeName,
        address,
        city,
        country
      })
      .then(({ data }) => data);
  }

  deletePlace(place) {
    return this.axios
      .delete(`/api/places/${place._id}/delete`, place)
      .then(({ data: place }) => place);
  }
}

const placeService = new PlaceService();

export default placeService;