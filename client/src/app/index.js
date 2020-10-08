import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../api/index";

import { Provider } from "react-redux";
import store from "../store.js";

import { NavBar } from '../components'
import { FrontPage, UsersList, Register, UsersUpdate, AllotmentsList, AllotmentsInsert, AllotmentsUpdate, HandymansList, HandymansInsert, HandymansUpdate, Login } from '../pages'

import PrivateRoute from '../components/private-route/PrivateRoute';
import Dashboard from '../components/dashboard/Dashboard';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Background from './img/bg.jpg';
import img from './img/bg.jpg';

const Container2 = styled.div`
    background-image: url(${img});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
  background-attachment: fixed;
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
      <Container2>
        <Router>

          <NavBar />
          <Switch>
            <Route path="/" exact component={FrontPage} />

            <Route path="/users/login" exact component={Login} />
            <Route path="/users/register" exact component={Register} />
            <Route path="/users/list" exact component={UsersList} />
            <Route path="/users/update/:id" exact component={UsersUpdate} />

            <Route path="/allotments/list" exact component={AllotmentsList} />
            <Route path="/allotments/create" exact component={AllotmentsInsert} />
            <Route path="/allotments/update/:id" exact component={AllotmentsUpdate} />

            <Route path="/handymans/list" exact component={HandymansList} />
            <Route path="/handymans/create" exact component={HandymansInsert} />
            <Route path="/handymans/update/:id" exact component={HandymansUpdate} />

            <PrivateRoute path="/dashboard" exact component={Dashboard} />

          </Switch>
        </Router>
      </ Container2 >
    </Provider >
  )
}

export default App;