import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

class ProtectedViewTwo extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>ProtectedViewTwo</h1>
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/protectedview`}>ProtectedView</Link>
      </div>
    );
  }
}

export default withAuth(withTheme(ProtectedViewTwo));
