import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import {
  EventCardWrapper,
  Input,
  ButtonPLeft,
  Span
} from "../../styles/styledComponents";

import {
  Submit,
  TitleH1
} from "../../styles/commonStyle";

import { toast } from 'react-toastify';

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
        toast.success(`🦄 Welcome! ${username}`);
      } catch (error) {
        toast.error('There was an ERROR!');
      }
    }
  };

  render() {
    const { username, password, email } = this.state;
    const { theme } = this.props;

    return (
      <EventCardWrapper>
        <TitleH1 color={theme.color}>Sign up</TitleH1>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            name="username"
            autocomplete="on"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <Input
            type="password"
            name="password"
            autocomplete="on"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Input
            type="email"
            name="email"
            autocomplete="on"
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
