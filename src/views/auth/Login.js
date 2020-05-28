import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import {
  TitleDh1,
  EventCardWrapper,
  InputDark,
  ButtonPLeft,
  Span
} from "../../styles/styledComponents";

import {
  Submit
} from "../../styles/commonStyle";

import { toast } from 'react-toastify';
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

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (username === "" || password === "") {
      toast.error("I'd love it if add a name and password");

    } else {
      try {
        this.props.handleLogin({
          username,
          password,
        });
        toast.success('🦄 Welcome!');
      } catch (error) {
        toast.error('There was an ERROR!');
      }

    }
  };

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
      <EventCardWrapper>
        <TitleDh1>Login</TitleDh1>
        <form onSubmit={this.handleFormSubmit}>

          <InputDark
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <InputDark
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Submit type="submit" value="Login" />

        </form>
        <ButtonPLeft>
          <Link to={"/signup"}>
            <Span>sign up</Span>
          </Link>
        </ButtonPLeft>
      </EventCardWrapper>
    );
  }
}

export default withAuth(withTheme(Login));
