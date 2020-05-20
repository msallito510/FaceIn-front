import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/authContext";
import { withTheme } from "../../context/themeContext";
import { Title, Wrapper, Input, Submit, ButtonP_letf, Span } from "../../styles/styledComponents";
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
      <Wrapper>
        <Title>Login</Title>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <Submit type="submit" value="Login" />
        </form>
        <ButtonP_letf>
          <Link to={"/signup"}>
            <Span>sign up</Span>
          </Link>
        </ButtonP_letf>
      </Wrapper>
    );
  }
}

export default withAuth(withTheme(Login));
