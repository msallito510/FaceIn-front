import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = this.state;
    this.props.handleSignup({
      username,
      password,
      email,
    });
  };

  // handleFormSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const { username, password } = this.state;
  //     this.props.handleSignup({
  //       username,
  //       password,
  //     });
  //     toast.success('Welcome');
  //   } catch (error) {
  //     console.error('Error');
  //   }
  // };

  render() {
    const { username, password, email } = this.state;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(withTheme(Signup));
