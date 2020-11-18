import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";

import Table from '../pages/logged/Table';

import PrivateRoute from '../components/private-route/PrivateRoute';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedNavBar from '../components/LoggedNavBar';
import Dashboard from '../components/dashboard/Dashboard';


const Container = styled.div`
    background-color: #f2f4f5;
    font-family: Century Gothic;
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


          </Switch>
        </Router>
      </ Container >
    </Provider >
  )

}

export default LoggedApp;