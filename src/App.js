import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withAuth } from './context/authContext';
import { withTheme } from './context/themeContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import Body from "./components/Body";
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";

import Login from './views/auth/Login';
import Signup from './views/auth/Signup';

import Homepage from './views/Homepage';

// private views and components
import UserProfile from './views/UserProfile';
import Events from './views/events/Events';
import EventDetail from './views/events/EventDetail';
import AddEvent from './views/events/AddEvent';
import UserEventList from './views/events/UserEventList';
import EditEvent from './views/events/EditEvent';
import SearchEvent from './views/events/SearchEvent';
import WhatIsHotEvents from './views/events/WhatIsHotEvents';
import UserLikes from './views/events/UserLikeEvents';

import PlaceDetail from './views/places/PlaceDetail';
import PlacesAll from './views/places/PlacesAll';
import AddPlace from './views/places/AddPlace';
import EditPlace from './views/places/EditPlace';
import Rating from './views/places/PlaceRating';

import Attend from './views/attend/Attend';

// error view
import ErrorPage from "./views/ErrorPage";

import ReactWebcam from "./views/ReactWebcam";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          autoClose={2000}
          position="top-right"
          className="toast-container"
          toastClassName="dark-toast"
        />
        <Router>
          <Body />
          <NavbarTop />
          <Navbar />
          <Switch>
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/" component={Homepage} />
            <PrivateRoute exact path="/user-profile" component={UserProfile} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/events/:id" component={EventDetail} />
            <PrivateRoute exact path="/add-event" component={AddEvent} />
            <PrivateRoute exact path="/user-events" component={UserEventList} />
            <PrivateRoute exact path="/event-edit/:id" component={EditEvent} />
            <PrivateRoute exact path="/search" component={SearchEvent} />

            <PrivateRoute exact path="/whatishot" component={WhatIsHotEvents} />
            <PrivateRoute exact path="/likes" component={UserLikes} />

            <PrivateRoute exact path="/places" component={PlacesAll} />
            <PrivateRoute exact path="/places/:id" component={PlaceDetail} />
            <PrivateRoute exact path="/add-place" component={AddPlace} />
            <PrivateRoute exact path="/place-edit/:id" component={EditPlace} />
            <PrivateRoute exact path="/rating/:id" component={Rating} />

            <PrivateRoute exact path="/attend/:id" component={Attend} />

            <PrivateRoute exact path="/react-webcam" component={ReactWebcam} />

            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth(withTheme(App));







