import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

const Events = ({ user }) => {
  return <div>Events user: {user.username}</div>;
};

export default withAuth(withTheme(Events));
