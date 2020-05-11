import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import styled from "styled-components";

class ErrorPage extends Component {
  render() {
    return <div>
      <p>
        <Link to="/">404 - This page does not exist - Home </Link>
      </p>
    </div>;
  }
}

export default withAuth(withTheme(ErrorPage));