import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withAuth } from "../context/authContext";

class ProtectedViewTwo extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <h1>ProtectedView</h1>
        <button onClick={handleLogout}>Loogut</button>
        <Link to={`/protectedview`}>ProtectedView</Link>
      </div>
    );
  }
}

export default withAuth(withTheme(ProtectedViewTwo));