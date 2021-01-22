import React, { Component } from 'react';
import api from '../api'
import styled from 'styled-components';
import { Tab, Col, Row, ListGroup, Card, CardColumns } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Title from '../components/Title'
import ManagementList from '../components/management/ManagementList';
import AdList from '../components/management/AdList'

const Wrapper = styled.div`
  min-width: 100vh;
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 100px;
`;

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: "6009bbfedb3f5e215007b7e0",
        description: '',
        rodo: '',
        errors: {}
    }
  }
  componentDidMount = async () => {
    const { id } = this.state
    const management = await api.getManagementById(id)

    this.setState({
        description: management.data.data.description,
        rodo: management.data.data.rodo,
    })
  }

  render() {
    const {  description, rodo } = this.state

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
                          {description}
                        </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                    <Title>Zarząd</Title>
                    <CardColumns>
                     <ManagementList/>
                    </CardColumns>
                  </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                  {rodo}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Wrapper>
    )
  }
}

export default About
