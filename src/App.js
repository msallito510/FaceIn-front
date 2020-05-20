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

            <Route path="*" component={ErrorPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default withAuth(withTheme(App));







