import axios from "axios";

class PlaceService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  getAllPlaces() {
    return this.axios.get("/api/places")
      .then(({ data: places }) => places);
  }

  getPlaceById(id) {
    return this.axios.get(`/api/places/${id}`)
      .then(({ data: place }) => place);
  }

  updatePlace(place) {
    return this.axios
      .put(`/api/places/${place._id}/update`, place)
      .then(({ data: place }) => place);
  }

  // solo para owner
  deletePlace(place) {
    return this.axios
      .delete(`/api/places/${place._id}/delete`, place)
      .then(({ data: place }) => place);
  }
}

const placeService = new PlaceService();

export default placeService;