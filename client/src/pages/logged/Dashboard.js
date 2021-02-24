import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import styled from 'styled-components';
import AdList from '../../components/management/AdList';
import AdDescription from '../../components/management/AdDescription'
import AdRodo from '../../components/management/AdRodo';
import ManagementList from '../../components/management/ManagementList';
import ActList from '../../components/management/ActList';
import { Title } from '../constants';
import { Tab, Tabs, CardColumns } from 'react-bootstrap';
import bg from '../../app/img/bg.svg';

const Wrapper = styled.div` 
  padding: 20px;
  @media(min-width: 992px){
      padding: 100px;
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      background-attachment: fixed;
  }
`;

const WrapperContainer = styled.div`
    @media(min-width: 992px){
        width: 60vw;
}
`;

const Container = styled.div`
  padding-top: 30px;
`
class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
      return (
          <Wrapper>
            <WrapperContainer>
              <Tabs transition={false} defaultActiveKey="link1" id="uncontrolled-tab-example">
                <Tab eventKey="link1" title="Aktualności" >
                  <Container>
                    <Title>Aktualności</Title>
                    <AdList/>
                      </Container>
                </Tab>
                <Tab eventKey="link5" title="Ustawy">
                  <Container>
                    <Title>Ustawy</Title>
                    <ActList/>
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
            </Tabs>
            </WrapperContainer>
          </Wrapper >
    );
  };
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);