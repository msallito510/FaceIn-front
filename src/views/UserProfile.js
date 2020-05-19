import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  // const { handleLogout } = this.props;

  return (
    <div>
      <div>
        <h1>{user.username}'s profile</h1>
      </div>
      <div>
        <h3>Event</h3>
        <section>
          <div>
            {user ? <Link to="/add-event" user={user._id}>
              <h3>Add event</h3>
            </Link> : <div></div>}
          </div>
          <div>
            {user ? <Link to="/user-events" user={user}>
              <h3>Edit</h3>
            </Link> : <div></div>}
          </div>
        </section>
      </div>
      <div>
        <h3>Place</h3>
        <section>
          <div>
            {user ? <Link to="/add-place">
              <h3>Add a place</h3>
            </Link> : <div></div>}
          </div>
          <div>
            {user ? <Link to={`/places/${user.hasPlace}`}>
              <h3>Edit your place</h3>
            </Link> : <div></div>}
          </div>
        </section>
      </div>

      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <Link to={`/protectedview`}>ProtectedView</Link> */}
    </div>
  );
};

export default withAuth(withTheme(UserProfile));
