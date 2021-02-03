import React from 'react';
import styled from 'styled-components';
import { Tab, Col, Row, ListGroup,  CardColumns } from 'react-bootstrap';
import NavBar from '../components/navigation/NavBar';
import Title from '../components/Title'
import ManagementList from '../components/management/ManagementList';
import AdList from '../components/management/AdList'
import AdDescription from '../components/management/AdDescription'
import AdRodo from '../components/management/AdRodo'
const Wrapper = styled.div`
  min-width: 100vh;
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 100px;
`;

const About = () => {
    return (
      <Wrapper>
        <NavBar />
        <Container>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={{ span: 2 }} align="center" >
                <ListGroup >
                <ListGroup.Item action href="#link1">
                    Aktualności
              </ListGroup.Item>
                  <ListGroup.Item action href="#link2"  >
                    O nas
              </ListGroup.Item>
                  <ListGroup.Item action href="#link3" >
                    Skład zarządu
              </ListGroup.Item>
                  
                  <ListGroup.Item action href="#link4">
                    RODO
              </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={{ offset: 1, span: 9 }}>
                <Tab.Content>
                <Tab.Pane eventKey="#link1">
                    <Title>Aktualności</Title>
                    <AdList/>
                  </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                        <Title>O nas</Title>
                          <AdDescription/>
                        </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                    <Title>Zarząd</Title>
                    <CardColumns>
                     <ManagementList/>
                    </CardColumns>
                  </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                  <AdRodo/>
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
