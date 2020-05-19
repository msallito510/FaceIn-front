import axios from "axios";

class RatingService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  getAllRatings() {
    return this.axios.get("/api/ratings")
      .then(({ data: ratings }) => ratings);
  }

  getRatingById(id) {
    return this.axios.get(`/api/ratings/${id}`)
      .then(({ data: rating }) => rating);
  }
}

const ratingService = new RatingService();

export default ratingService;