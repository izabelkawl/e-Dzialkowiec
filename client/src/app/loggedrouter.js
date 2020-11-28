import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";

import Table from '../pages/logged/Table';
import Account from '../pages/logged/Account';
import PrivateRoute from '../components/private-route/PrivateRoute';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedNavBar from '../components/LoggedNavBar';
import Dashboard from '../components/dashboard/Dashboard';
import bg from './img/bg.png';

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  font-family: Century Gothic;
  min-height: 100vh;
`;

function LoggedApp() {
  return (
    <Provider store={store}>
      <Container>

        <Router>
          <LoggedNavBar />
          <Switch>
            <PrivateRoute path="/dashboard" exact component={Dashboard} />

            <PrivateRoute path="/dashboard/table" exact component={Table} />
            <PrivateRoute path="/dashboard/account" exact component={Account} />

          </Switch>
        </Router>
      </ Container >
    </Provider >
  )

}

export default LoggedApp;