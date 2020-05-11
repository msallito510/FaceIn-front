import React from 'react';
import { withAuth } from '../context/authContext';

const PrivateView = ({ user }) => {
  return (
    <div>
      PrivateView
      user: {user.username}
    </div>
  );
};

export default withAuth(withTheme(PrivateView));