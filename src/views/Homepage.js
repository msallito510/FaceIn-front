import React, { Component } from "react";
// import { withAuth } from '../context/authContext';

class Homepage extends Component {
  render() {
    return <div>Homepage for registered users and not registered users</div>;
  }
}

export default withTheme(Homepage);