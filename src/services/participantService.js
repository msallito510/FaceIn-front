import axios from "axios";

class ParticipantService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true
    });
  }

  getParticipantById(id) {
    return this.axios.get(`/api/participants/${id}`)
      .then(({ data: user }) => user);
  }

  getParticipantPhoto(participantId) {
    return this.axios
      .get(`/api/participants/${participantId}/get-photo`)
      .then(({ data: string }) => string);
  }

  faceMatch(imgSrc, participantId) {
    return this.axios
      .post(`/api/participants/${participantId}/scan`, { imgSrc })
      .then(({ data }) => data);
  }



}

const participantService = new ParticipantService();

export default participantService;