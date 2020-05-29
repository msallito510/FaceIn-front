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

    if (username === "" || password === "") {
      toast.error("We need your name and password");

    } else if (email === "" || !email.includes("@")) {
      toast.error("It would be nice add a correct email");
    } else {
      try {
        this.props.handleSignup({
          username,
          password,
          email,
        });
      } catch (error) {
        console.error('Error');
      }
    }
  };

  render() {
    const { username, password, email } = this.state;
    const { theme } = this.props;

    return (
      <EventCardWrapper>
        <TitleDh1>Sign up</TitleDh1>
        <form onSubmit={this.handleFormSubmit}>
          <InputDark
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <InputDark
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <InputDark
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <Submit color={theme.color} background={theme.primaryButton} type="submit" value="Signup" />
        </form>
        <ButtonPLeft>
          <Link to={"/login"}>
            <Span>Login</Span></Link>
        </ButtonPLeft>
      </EventCardWrapper>
    );
  }
}

export default withAuth(withTheme(Signup));
