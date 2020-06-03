import axios from "axios";

class UserService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  getAllUsers() {
    return this.axios.get("/api/users")
      .then(({ data: users }) => users);
  }

  getUserById(id) {
    return this.axios.get(`/api/users/${id}`)
      .then(({ data: user }) => user);
  }

  getUserByIdAndLikes(id) {
    return this.axios
      .get(`/api/users/${id}/likes`)
      .then(({ data: user }) => user);
  }

  getMyFutureEvents(id) {
    return this.axios
      .get(`/api/users/${id}/futureEvents`)
      .then(({ data: user }) => user);
  }

  updateUser(user) {
    return this.axios
      .put(`/api/users/${user._id}/update`, user)
      .then(({ data: user }) => user);
  }

  addProfilePhoto(imgSrc, userId) {
    return this.axios
      .post(`/api/users/${userId}/add-photo`, { imgSrc })
      .then(({ data }) => data);
  }

  getProfilePhoto(userId) {
    return this.axios
      .get(`/api/users/${userId}/get-photo`)
      .then(({ data: string }) => string);
  }

  getPorfilePhoto128(userId) {
    return this.axios
      .get(`/api/users/${userId}/get-photoBlob`)
      .then(({ data: string }) => string);
  }

  // deleteUser(user) {
  //   return this.axios
  //     .delete(`/api/users/${user._id}/delete`, user)
  //     .then(({ data: user }) => user);
  // }
}

const userService = new UserService();

export default userService;