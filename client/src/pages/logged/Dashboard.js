import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import styled from 'styled-components';
import AdList from '../../components/management/AdList';
import AdDescription from '../../components/management/AdDescription'
import AdRodo from '../../components/management/AdRodo'
import Title from '../../components/Title'
import { Tab, Tabs, CardColumns } from 'react-bootstrap';
import ManagementList from '../../components/management/ManagementList';

const Wrapper = styled.div` 
    width: 70vw;
    padding: 100px;
`
const Container = styled.div`
  padding: 50px 0;
`
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        return (
            <Wrapper>
                <Tabs transition={false} defaultActiveKey="link1" id="uncontrolled-tab-example">
              <Tab eventKey="link1" title="Aktualności" >
                <Container>
                <Title>Aktualności</Title>
                   <AdList/>
                </Container>
              </Tab>
              <Tab eventKey="link2" title="O nas">
              <Container>
              <Title>O nas</Title>
                    <AdDescription/>
              </Container>
                
              </Tab>
              <Tab eventKey="link3" title="Zarząd">
              <Container>
              <Title>Zarząd</Title>
                <CardColumns>
                     <ManagementList/>
                </CardColumns>
              </Container>
              </Tab>
              <Tab eventKey="link4" title="Rodo">
                <Container>
                  <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                  <AdRodo/>
              </Container>
              </Tab>
              <Tab eventKey="link5" title="Ustawy">
                <Container>
                  <Title>Ustawy</Title>
                  <i>Upload ustaw</i>
              </Container>
              </Tab>
          </Tabs>
            </Wrapper >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);