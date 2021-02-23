import React from 'react';
import styled from 'styled-components';
import { Tab, Col, Row, Nav,  CardColumns } from 'react-bootstrap';
import NavBar from '../components/navigation/NavBar';
import { Title } from '../pages/constants';
import ManagementList from '../components/management/ManagementList';
import AdList from '../components/management/AdList';
import AdDescription from '../components/management/AdDescription'
import AdRodo from '../components/management/AdRodo';
import ActList from '../components/management/ActList';

const Wrapper = styled.div`
  min-width: 100vw;
`;

const Container = styled.div`
  padding: 20px;

  @media(min-width: 1365px){
    width: 90vw;
    margin: 0 auto;
    padding: 100px;
  }
`;

const About = () => {
    return (
      <Wrapper>
        <NavBar />
        <Container>
          <Tab.Container transition={false} defaultActiveKey="link1">
              <Row>
                <Col sm={{ span: 3 }} align="center" >
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                      <Nav.Link eventKey="link1">
                        Aktualności
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link2">
                        Ustawy
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link3">
                        O nas
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link4">
                        Skład zarządu
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link5">
                        RODO
                      </Nav.Link>
                  </Nav.Item>
              </Nav>
                </Col>
                <Col sm={{ offset: 1, span: 8 }}>
                  <Tab.Content>
                    <Tab.Pane eventKey="link1">
                      <Title>Aktualności</Title>
                        <AdList/>
                          </Tab.Pane>
                    <Tab.Pane eventKey="link2">
                      <Title>O nas</Title>
                        <AdDescription/>
                          </Tab.Pane>
                    <Tab.Pane eventKey="link3">
                      <Title>Zarząd</Title>
                        <CardColumns>
                          <ManagementList/>
                            </CardColumns>
                              </Tab.Pane>
                    <Tab.Pane eventKey="link4">
                      <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                        <AdRodo/>
                          </Tab.Pane>
                    <Tab.Pane eventKey="link5">
                      <Title>Ustawy</Title>
                          <ActList/>
                              </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
          </Tab.Container>
        </Container>
      </Wrapper>
    )
}

export default About
