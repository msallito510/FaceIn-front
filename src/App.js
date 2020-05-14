import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css'; 

import { withAuth } from './context/authContext';
import { withTheme } from './context/themeContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Body from "./components/Body";
import Navbar from "./components/Navbar";

import Login from './views/auth/Login';
import Signup from './views/auth/Signup';

import Homepage from './views/Homepage';

// private views
import Events from './views/Events';
import Attend from './views/Attend';
import ProtectedViewTwo from './views/ProtectedViewTwo';

// error view
import ErrorPage from "./views/ErrorPage";

// styles
// import { aaa } from "./styles/styledComponents";

class App extends Component {
  render() {
    return (
      <>
        {/* <ToastContainer autoClose={2000} /> */}
        <Router>
          <Body />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/attend" component={Attend} />
            <PrivateRoute exact path="/protectedviewtwo" component={ProtectedViewTwo} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth(withTheme(App));







