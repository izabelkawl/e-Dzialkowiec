import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";
import { connect } from "react-redux";

import { UsersList, UsersUpdate, AllotmentsList, AllotmentsInsert, AllotmentsUpdate, MessagesList, MessagesUpdate, MessagesInsert, Management } from '../pages'

import PrivateRoute from '../components/private-route/PrivateRoute';
import Admin from '../components/dashboard/Admin';
import AdminNavBar from '../components/AdminNavBar';

import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    background-color: #f2f4f5;
    height: 100vh;
`;

const ErrContainer = styled.div`
    height: 100vh;
    background-color: #f2f4f5;
    text-align: center;
    padding: 50px;
    font-size: 26px;
`;

class AdminApp extends Component {

  render() {

    const { user } = this.props.auth;
    if (user.email === "edzialkowiec@gmail.com") {
      return (
        <Provider store={store}>
          <Container>
            <Router>
              <AdminNavBar />
              <Switch>
                <PrivateRoute path="/admin" exact component={Admin} />
                <PrivateRoute path="/admin/management" exact component={Management} />
                <PrivateRoute path="/admin/users/list" exact component={UsersList} />
                <PrivateRoute path="/admin/users/update/:id" exact component={UsersUpdate} />

                <PrivateRoute path="/admin/allotments/list" exact component={AllotmentsList} />
                <PrivateRoute path="/admin/allotments/create" exact component={AllotmentsInsert} />
                <PrivateRoute path="/admin/allotments/update/:id" exact component={AllotmentsUpdate} />

                <PrivateRoute path="/admin/messages/list" exact component={MessagesList} />
                <PrivateRoute path="/admin/messages/create" exact component={MessagesInsert} />
                <PrivateRoute path="/admin/messages/update/:id" exact component={MessagesUpdate} />
              </Switch>
            </Router>
          </ Container >
        </Provider >
      );
    } else return (
      <ErrContainer >
        <h3>Page not found</h3>
        <Button href={'/dashboard'}>Powrót</Button>
      </ErrContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(AdminApp);