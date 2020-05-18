import axios from "axios";

class EventService {

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  // addEvent(event) {
  //   return this.axios
  //     .post(`/api/events/add`, event)
  //     .then(({ data: event }) => event);
  // }

  addEvent(
    title,
    description,
    frequency,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    price,
    tagId, ) {
    return this.axios
      .post(`/api/events/add`, {
        title,
        description,
        frequency,
        dateStart,
        dateEnd,
        timeStart,
        timeEnd,
        price,
        tagId,
      })
      .then(({ data }) => data);
  }

  // addShift(timeStart, timeEnd, workingDayId, userId) {
  //   return this.axios
  //     .post(`/api/shifts/add`, { timeStart, timeEnd, workingDayId, userId })
  //     .then(({ data }) => data);
  // }

  getAllEvents() {
    return this.axios.get("/api/events")
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
    frequency,
    dateStart,
    dateEnd,
    timeStart,
    timeEnd,
    price,
    tagId, ) {
    return this.axios
      .put(`/api/events/${eventId}/edit`, {
        title,
        description,
        frequency,
        dateStart,
        dateEnd,
        timeStart,
        timeEnd,
        price,
        tagId,
      })
      .then(({ data }) => data);
  }


  // updateEvent(event) {
  //   return this.axios
  //     .put(`/api/events/${event._id}/edit`, event)
  //     .then(({ data: event }) => event);
  // }

  // solo para owner
  deleteEvent(event) {
    return this.axios
      .delete(`/api/events/${event._id}/delete`, event)
      .then(({ data: event }) => event);
  }
}

const eventService = new EventService();

export default eventService;
