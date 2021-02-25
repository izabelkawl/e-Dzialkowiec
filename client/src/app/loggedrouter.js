import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../store.js";

import PrivateRoute from '../components/private-route/PrivateRoute';
import LoggedNavBar from '../components/navigation/LoggedNavBar';

import Dashboard from '../pages/logged/Dashboard';
import { Forum, Account, Allotment, BuyingAllotment, MyAllotment, BuyingAllotmentSell } from '../pages';

import bg from './img/bg.svg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoticeBoard from '../pages/logged/NoticeBoard.jsx';
import Commitment from '../pages/logged/Commitment.jsx';
import Messages from '../pages/logged/Messages.jsx';
import ForumThread from '../pages/logged/ForumThread.jsx';
import MessagesContent from '../pages/logged/MessagesContent.jsx';
import NoticeBoardMessage from '../pages/logged/NoticeBoardMessage.jsx';

const Container = styled.div`

@media(min-width: 1366px){
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
  min-height: 100vh;
}
`;

function LoggedApp() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <LoggedNavBar />
          <Switch>
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/dashboard/allotments" exact component={Allotment} />
            <PrivateRoute path="/dashboard/allotments/mygarden/:id" exact component={MyAllotment}/>
            <PrivateRoute path="/dashboard/allotments/new/:id" exact component={BuyingAllotment}/>
            <PrivateRoute path="/dashboard/allotments/update/:id" exact component={BuyingAllotmentSell}/>
            <PrivateRoute path="/dashboard/commitment" exact component={Commitment} />
            <PrivateRoute path="/dashboard/noticeboard" exact component={NoticeBoard} />
            <PrivateRoute path="/dashboard/noticeboard/:id" exact component={NoticeBoardMessage} />
            <PrivateRoute path="/dashboard/messages" exact component={Messages}/>
            <PrivateRoute path="/dashboard/messages/:id" exact component={MessagesContent}/>
            <PrivateRoute path="/dashboard/forums" exact component={Forum} />
            <PrivateRoute path="/dashboard/forums/:id" exact component={ForumThread}/>
            <PrivateRoute path="/dashboard/account/" exact component={Account} />
          </Switch>
        </Router>
      </ Container >
    </Provider >
  )
}

export default LoggedApp;
