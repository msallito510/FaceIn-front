import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

class ProtectedView extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>ProtectedView</h1>
        <button onClick={handleLogout}>Logout</button>
        <Link to={`/protectedviewtwo`}>ProtectedViewTwo</Link>
      </div>
    );
  }
}

export default withAuth(withTheme(ProtectedView));
