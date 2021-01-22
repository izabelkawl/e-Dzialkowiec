import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";
import { connect } from "react-redux";

import { UsersList, UsersUpdate, AllotmentsList, AllotmentsInsert, AllotmentsUpdate, MessagesList, MessagesUpdate, MessagesInsert, Management, Finanse, FinancesInsert,  } from '../pages'
import StatusUpdate from '../pages/admin/StatusUpdate'
import PaymentInsert from '../pages/admin/PaymentInsert'
import ChoosenAllotmetnforFinances from '../pages/admin/ChoosenAllotmetnforFinances'
import AnnouncementUpdate from '../pages/admin/AnnouncementUpdate'
import NoticeBoard from '../pages/admin/NoticeBoard'

import PrivateRoute from '../components/private-route/PrivateRoute'

import Admin from '../components/dashboard/Admin';
import AdminNavBar from '../components/AdminNavBar';

import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    background-color: #f2f4f5;
    min-height: 100vh;
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
    if (user.position !== "Działkowiec") {
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

                <PrivateRoute path="/admin/finances/list" exact component={Finanse} />
                <PrivateRoute path="/admin/finances/create" exact component={FinancesInsert} />
                <PrivateRoute path="/admin/finances/create/:id" exact component={ChoosenAllotmetnforFinances} />
                <PrivateRoute path="/admin/finances/update/:id" exact component={StatusUpdate} />
                <PrivateRoute path="/admin/table/" exact component={NoticeBoard} />
               
                <PrivateRoute path="/admin/ads/update/:id" exact component={AnnouncementUpdate} />
                <PrivateRoute path="/admin/paymentdetails/create" exact component={PaymentInsert} />
             
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