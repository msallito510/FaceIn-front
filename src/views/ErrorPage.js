import React, { Component } from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Link } from "react-router-dom";
// import styled from "styled-components";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/">404 - This page does not exist - Home </Link>
        </p>
      </div>
    );
  }
}

export default withAuth(withTheme(ErrorPage));
