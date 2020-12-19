import React, { Component } from "react";
import { Table, Form, Tab, Col, Row, ListGroup, Button} from 'react-bootstrap';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:50px;
    margin-top: 50px;
    background-color: white; 
`;

const Title = styled.h1`
    font-size: 32px
`;

class Management extends Component {
    render() {
        return (
        <Wrapper>
            <Row className="justify-content-md-center" >
                <Tab.Container  id="list-group-tabs-example" defaultActiveKey="#link1" >
                    <Col align="center" xs={3}>
                        <ListGroup >
                            <ListGroup.Item action href="#link1">
                                O nas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" >
                                Skład zarządu
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3" >
                                Ogłoszenia zarządu
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                RODO
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey="#link1">
                                    <Form >
                                        <Form.Group>
                                            <Title>O nas</Title>
                                            <Form.Control as="textarea" rows={10}  />
                                        </Form.Group>
                                        <Button className="float-right">Zapisz</Button>
                                    </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <Title>Zarząd</Title>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>Stopień</th>
                                                    <th>Osoba</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Prezes zarządu</td>
                                                    <td>Małgorzata Wolak</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Wiceprezes</td>
                                                    <td>Piotr Skrzypiński</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Sekretarz</td>
                                                    <td>Monika Sekuła</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    <Title>Dodaj osobę</Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Stopień</Form.Label>
                                                <Form.Control />
                                                <Form.Label>Osoba</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                            <Button className="float-right">Dodaj</Button>
                                        </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link3">
                                    <Title>Ogłoszenia</Title>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>Tytuł</th>
                                                    <th>treść</th>
                                                    <th>Data</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Quote</td>
                                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                                    <td>Someone famous in Source Title</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Quote</td>
                                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                                    <td>Someone famous in Source Title</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td>Quote</td>
                                                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</td>
                                                    <td>Someone famous in Source Title</td>
                                                    <td><Button variant="danger">Usuń</Button></td>
                                                    <td><Button variant="success">Aktualizuj</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    <Title>Dodaj ogłoszenie</Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Tytuł</Form.Label>
                                                <Form.Control />
                                                <Form.Label>Treść</Form.Label>
                                                <Form.Control as="textarea" rows={5} />
                                            </Form.Group>
                                            <Button className="float-right">Dodaj</Button>
                                        </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link4">
                                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Treść</Form.Label>
                                                <Form.Control as="textarea" rows={10}  />
                                            </Form.Group>
                                            <Button className="float-right">Zapisz</Button>
                                        </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                </Tab.Container>
            </Row>
        </Wrapper>
        )
    }
};

export default Management;
