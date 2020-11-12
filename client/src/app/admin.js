import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../api/index";

import { Provider } from "react-redux";
import store from "../store.js";

import { NavBar } from '../components'
import { FrontPage, Table, About, UsersList, Register, UsersUpdate, AllotmentsList, AllotmentsInsert, AllotmentsUpdate, HandymansList, HandymansInsert, HandymansUpdate, MessagesList, MessagesUpdate, MessagesInsert, Login } from '../pages'

import PrivateRoute from '../components/private-route/PrivateRoute';
import Dashboard from '../components/dashboard/Dashboard';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Container = styled.div`
    background-color: #f2f4f5;
    font-family: Century Gothic;
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

          <NavBar />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/about" exact component={About} />
            <Route path="/table" exact component={Table} />
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

            <Route path="/messages/list" exact component={MessagesList} />
            <Route path="/messages/create" exact component={MessagesInsert} />
            <Route path="/messages/update/:id" exact component={MessagesUpdate} />

            <PrivateRoute path="/dashboard" exact component={Dashboard} />

          </Switch>
        </Router>
      </ Container >
    </Provider >
  )
}

export default App;