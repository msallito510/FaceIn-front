import React from 'react';

const UserCard = (props) => {
  const { user: { username } } = props;
  return (
    <div>
      <label htmlFor="">Username</label>
      <p>{username}</p>
    </div>
  );
};
export default UserCard;