import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px;
    margin-top: 50px;
    background-color: white; 
`
const Title = styled.h1.attrs({
    className: 'h1',
})`font-size: 32px;
padding-bottom: 20px;`

class Admin extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {

        const { user } = this.props.auth;
        if (user.email === "izabelawlazlo9@gmail.com") {
            return (
                <Wrapper >
                    <Title>Panet Adminstratora</Title>
                    <Form noValidate onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Row>
                                <Col sm={{ span: 3 }}>
                                    <Form.Label htmlFor="email">Liczba zarejestrowanych
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 1, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        value="164"
                                        disabled
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={3}>
                                    <Form.Label htmlFor="email">Wolne działki
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 1, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        value="54"
                                        disabled
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={3}>
                                    <Form.Label htmlFor="email">Działki na sprzedaż
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 1, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        value="12"
                                        disabled
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col sm={3}>
                                    <Form.Label htmlFor="email">Liczba ogłoszeń
                        </Form.Label>
                                </Col>
                                <Col sm={{ span: 1, offset: 3 }}>
                                    <Form.Control
                                        type="text"
                                        value="17"
                                        disabled
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                    <Title>Dane administratora</Title>
                    <Row>
                        <Col><p>Email <b> {user.email}  </b></p>
                            {/* <p>Imię <b> {user.firstname}  </b></p>
                    <p>Nazwisko <b> {user.lastname}  </b></p> */}

                            <p>Telefon <b> {user.phone}  </b></p></Col>
                        <Col><Button
                            onClick={this.onLogoutClick}
                        >
                            Wyloguj
            </Button>
                        </Col>
                    </Row>
                </Wrapper>
            );
        }
    }
}

Admin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Admin);