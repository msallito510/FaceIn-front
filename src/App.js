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

// private views and components
import UserProfile from './views/UserProfile';
import Events from './views/Events';
import EventDetail from './views/EventDetail';
import AddEvent from './views/events/AddEvent';
import UserEventList from './views/events/UserEventList';
import EditEvent from './views/events/EditEvent';

import PlaceDetail from './views/PlaceDetail';
import PlacesAll from './views/PlacesAll';
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
          <Switch>
            <Route exact path="/" component={Homepage} />
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/user-profile" component={UserProfile} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/events/:id" component={EventDetail} />
            <PrivateRoute exact path="/add-event" component={AddEvent} />
            <PrivateRoute exact path="/user-events" component={UserEventList} />
            <PrivateRoute exact path="/event-edit/:id" component={EditEvent} />

            <PrivateRoute exact path="/protectedviewtwo" component={ProtectedViewTwo} />

            <PrivateRoute exact path="/places" component={PlacesAll} />
            <PrivateRoute exact path="/places/:id" component={PlaceDetail} />

            <Route path="*" component={ErrorPage} />
          </Switch>
          <Navbar />
        </Router>
      </>
    );
  }
}

export default withAuth(withTheme(App));







