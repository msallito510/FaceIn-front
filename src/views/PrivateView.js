import React from "react";
import { withAuth } from "../context/authContext";
import { withTheme } from "../context/themeContext";

const PrivateView = ({ user }) => {
  return <div>PrivateView user: {user.username}</div>;
};

export default withAuth(withTheme(PrivateView));
