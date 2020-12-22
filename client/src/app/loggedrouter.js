import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";

import PrivateRoute from '../components/private-route/PrivateRoute';
import LoggedNavBar from '../components/LoggedNavBar';

import Dashboard from '../components/dashboard/Dashboard';
import { Forum, Account, Allotment } from '../pages';

import bg from './img/bgo.svg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoticeBoard from '../pages/logged/NoticeBoard.jsx';
import Commitment from '../pages/logged/Commitment.jsx';

const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
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
            {/* <PrivateRoute path="/dashboard/table" exact component={Table} /> */}
            <PrivateRoute path="/dashboard/table" exact component={NoticeBoard} />
            <PrivateRoute path="/dashboard/account" exact component={Account} />
            <PrivateRoute path="/dashboard/allotment" exact component={Allotment} />
            <PrivateRoute path="/dashboard/forum" exact component={Forum} />
            <PrivateRoute path="/dashboard/commitment" exact component={Commitment} />
          </Switch>
        </Router>
      </ Container >
    </Provider >
  )
}

export default LoggedApp;