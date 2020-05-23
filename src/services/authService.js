import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
  }

  signup(user) {
    const { username, password, email } = user;
    return this.auth.post('/signup', { username, password, email })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/login', { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.get('/logout', {})
      .then(response => response.data);
  }

  whoami(user) {
    return this.auth.get('/whoami')
      .then(response => response.data);
  }

  // profileUpdate(user) {
  //   const { username } = user;
  //   return this.auth.put('/profile/edit-profile', { username })
  //   .then(({ data }) => data);
  // }
}

const authService = new AuthService();

export default authService;