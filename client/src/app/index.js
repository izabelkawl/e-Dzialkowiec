import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../api/index";

import { Provider } from "react-redux";
import store from "../store.js";

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from '../components/private-route/PrivateRoute';
import { FrontPage, About, Garden, Login, Register, Contact } from '../pages';
import bg from './img/bg.png';
import AdminApp from './adminrouter';
import LoggedApp from './loggedrouter';

const Container = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    font-size: 20px;
`;

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./users/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>

          <Switch>
            <PrivateRoute path="/dashboard" component={LoggedApp} />
            <PrivateRoute path="/admin" component={AdminApp} />
            <Route path="/" exact component={FrontPage} />
            <Route path="/about" exact component={About} />
            <Route path="/garden" exact component={Garden} />
            <Route path="/contact" exact component={Contact} />

            <Route path="/users/login" exact component={Login} />
            <Route path="/users/register" exact component={Register} />
          </Switch>
        </Router>
      </ Container >
    </Provider >
  )

}

export default App;