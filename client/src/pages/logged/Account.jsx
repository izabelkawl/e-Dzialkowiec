import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import { Form, Tab, Col, Row, ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title'
import {BlueButtonStyle} from '../constants';

const Container = styled.div.attrs({
    className: 'form-group',
})`
   
`

class Account extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        return (
            <Wrapper >

                <Container>
                    <Row>
                        <Col><Title>Konto</ Title></Col>
                        <Col><Button style={BlueButtonStyle} className="float-right"  
                            onClick={this.onLogoutClick}
                        >
                            Wyloguj
           </Button></Col>

                    </Row>
                    <hr></hr>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={{ span: 3 }} align="center" >
                                <ListGroup >
                                    <ListGroup.Item action href="#link1" >
                                        Zmień e-mail
              </ListGroup.Item>
                                    <ListGroup.Item action href="#link2" >
                                        Zmień hasło
              </ListGroup.Item>
                                    <ListGroup.Item action href="#link3" >
                                        Edytuj dane
              </ListGroup.Item>

                                </ListGroup>
                            </Col>
                            <Col sm={{ offset: 1, span: 5 }}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                        <Title>Zmiana adresu email</Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label htmlFor="email">Nowy email:
                        </Form.Label>

                                                <Form.Control


                                                    type="email"
                                                    placeholder="jankowalski@gmail.com"
                                                />

                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label htmlFor="email">Powtórz email:
                        </Form.Label>

                                                <Form.Control


                                                    type="email"
                                                    placeholder="jankowalski@gmail.com"
                                                />

                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label htmlFor="password">Hasło:</Form.Label>

                                                <Form.Control


                                                    type="password"
                                                    placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;"

                                                />
                                            </Form.Group>

                                            <Button style={BlueButtonStyle} type="submit"  className="float-right">Zapisz</Button>

                                        </Form>  </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <Title>Zmiana hasła</Title>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label htmlFor="password">Obecne hasło:</Form.Label>

                                                <Form.Control


                                                    type="password"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label htmlFor="password">Nowe hasło:</Form.Label>

                                                <Form.Control


                                                    type="password"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label htmlFor="password">Powtórz hasło:</Form.Label>

                                                <Form.Control


                                                    type="password"
                                                />
                                            </Form.Group>

                                            <Button type="submit" style={BlueButtonStyle} className="float-right">Zapisz</Button>

                                        </Form>


                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        <Title>Edytuj dane</Title>

                                        <Form noValidate >

                                            <Form.Group >
                                                <Form.Label htmlFor="firstname">Imię
                                </Form.Label>

                                                <Form.Control

                                                    type="text"

                                                    placeholder="Jan"
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label htmlFor="lastname">Nazwisko</Form.Label>

                                                <Form.Control


                                                    type="text"

                                                    placeholder="Kowalski"
                                                />


                                            </Form.Group>

                                            <Form.Group >
                                                <Form.Label htmlFor="address">Adres</Form.Label>

                                                <Form.Control


                                                    type="text"

                                                    placeholder="ul. Wspólna 2, Warszawa 00-000"
                                                />

                                            </Form.Group>

                                            <Form.Group >
                                                <Form.Label htmlFor="phone">Telefon</Form.Label>

                                                <Form.Control


                                                    type="text"

                                                    placeholder="123 456 789"
                                                />

                                            </Form.Group>

                                            <Form.Group >
                                                <Form.Label htmlFor="password">Hasło</Form.Label>

                                                <Form.Control


                                                    type="password"

                                                    placeholder="********"
                                                />

                                            </Form.Group>

                                            <Button style={BlueButtonStyle}  type="submit" className="float-right">Zapisz</Button>

                                        </Form>


                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>


                </Container>
            </Wrapper >
        );
    }
}
Account.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Account);