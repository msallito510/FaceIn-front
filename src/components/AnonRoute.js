import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../context/authContext';

function AnonRoute({ component: Comp, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedin ? (
          <Comp {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/private',
                // state: { from: props.location },
              }}
            />
          )
      }
    />
  );
}

export default withAuth(AnonRoute);