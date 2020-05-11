import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
// for notifications:
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({
      username,
      password,
    });
  };

  // handleFormSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const { username, password } = this.state;
  //     this.props.handleLogin({
  //       username,
  //       password,
  //     });
  //     toast.success('Welcome!');
  //   } catch (error) {
  //     console.error('Error');
  //   }
  // };

  // call it?
  // cleanForm = () => {
  //   this.setState({
  //     username: "",
  //     password: "",
  //   });
  // };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <input type="submit" value="Login" />
        </form>
        <p>
          Keen to
          <Link to={"/signup"}>
            <span> sign up?</span>
          </Link>
        </p>
      </div>
    );
  }
}

export default withAuth(withTheme(Login));
