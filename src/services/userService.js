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

  updateUser(user) {
    return this.axios
      .put(`/api/users/${user._id}/update`, user)
      .then(({ data: user }) => user);
  }

  // deleteUser(user) {
  //   return this.axios
  //     .delete(`/api/users/${user._id}/delete`, user)
  //     .then(({ data: user }) => user);
  // }
}

const userService = new UserService();

export default userService;