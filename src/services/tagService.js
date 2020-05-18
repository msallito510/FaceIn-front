import axios from "axios";

class TagService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  getAllTags() {
    return this.axios.get("/api/tags")
      .then(({ data: tags }) => tags);
  }

  getTagById(id) {
    return this.axios.get(`/api/tags/${id}`)
      .then(({ data: tag }) => tag);
  }

  addTag() {
    return this.axios.post("/api/tags/add")
      .then(({ data: users }) => users);
  }

  deleteTag(tag) {
    return this.axios
      .delete(`/api/${tag._id}/delete`, tag)
      .then(({ data: tag }) => tag);
  }
}

const userService = new TagService();

export default userService;