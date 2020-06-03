import axios from "axios";

class EventService {

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  addEvent(
    title,
    description,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    price,
  ) {
    return this.axios
      .post(`/api/events/add`, {
        title,
        description,
        dateStart,
        dateEnd,
        timeStart,
        timeEnd,
        price,
      })
      .then(({ data }) => data);
  }

  uploadPhoto(eventId, imageUrl) {
    return this.axios
      .put(`/api/events/${eventId}/upload-photo`, imageUrl)
      .then(({ data }) => data);
  }

  getAllEvents() {
    return this.axios.get("/api/events")
      .then(({ data: events }) => events);
  }

  getSortEvents() {
    return this.axios.get("/api/events/sort")
      .then(({ data: events }) => events);
  }

  getAllEventsByOwner() {
    return this.axios.get("/api/events/owner")
      .then(({ data: events }) => events);
  }

  getEventById(id) {
    return this.axios.get(`/api/events/${id}`)
      .then(({ data: event }) => event);
  }

  attendEvent(id) {
    return this.axios
      .get(`/api/events/${id}/register`)
      .then(({ data: event }) => event);
  }

  addLike(id) {
    return this.axios
      .get(`/api/events/${id}/add-like`)
      .then(({ data: event }) => event);
  }

  updateEvent(
    eventId,
    title,
    description,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    price,
    image,
  ) {
    return this.axios
      .put(`/api/events/${eventId}/edit`, {
        title,
        description,
        dateStart,
        dateEnd,
        timeStart,
        timeEnd,
        price,
        image,
      })
      .then(({ data }) => data);
  }

  deleteEvent(eventId) {
    return this.axios
      .delete(`/api/events/${eventId}/delete`, eventId)
      .then(({ data }) => data);
  }
}

const eventService = new EventService();

export default eventService;
