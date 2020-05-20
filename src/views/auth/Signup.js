import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { Title, Wrapper, Input, Submit, ButtonP_letf, Span } from "../../styles/styledComponents";
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
      <Wrapper>
        <Title>Sign up</Title>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <Submit type="submit" value="Signup" />
        </form>
        <ButtonP_letf>
          <Link to={"/login"}>
            <Span>Login</Span></Link>
        </ButtonP_letf>
      </Wrapper>
    );
  }
}

export default withAuth(withTheme(Signup));
