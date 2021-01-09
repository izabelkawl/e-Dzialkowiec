import React, {Component, useState, useEffect } from "react";
import api from "../../api";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import {Form,  Row, Col, Button  } from 'react-bootstrap';
import { List,Title, BlueButtonStyle } from '../../pages/constants';

const AdminData = () => {
    const [users, setUsers] = useState([]);
    const [allotments, setAllotments] = useState([]);
        useEffect(() => {
            const requestUsersList = async () => {
                const usersList = await api.getAllUsers();
                const { data } = usersList;
                setUsers(data.data);
            };
        const requestAllotmentsList = async () => {
            const allotmentsList = await api.getAllAllotments();
            const { data } = allotmentsList;
            setAllotments(data.data);
        };
        requestAllotmentsList();
        requestUsersList();
    }, []);

    var wol = 0;
    var zaj = 0;
    var rez = 0;
    
    var result = users.reduce(function(sum) {
        return sum = sum+1;
    },0 );

    const resultSum = allotments.map((allotment, index) => {
        const { status } = allotment;
            if (status === "Wolna"){
                wol++
            }
            return wol
        },)  
    const resultZaj = allotments.map((allotment, index) => {
            const { status } = allotment;
                if (status === "Zajęta"){
                    zaj++
                }
                return zaj
            })  
    const resultRez = allotments.map((allotment, index) => {
        const { status } = allotment;
        if (status === "Rezerwacja"){
                rez++
            }
            return rez
        })  
    return ( 
        <Form>
            <Form.Group>
                <Row>
                    <Col sm={{ span: 3 }}>
                        <Form.Label htmlFor="email">Liczba zarejestrowanych
                            </Form.Label>
                    </Col>
                    <Col sm={{ span: 1, offset: 3 }}>
                        <Form.Control
                            type="text"
                            value={result}
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
                            value={resultSum.slice(-1)}
                            disabled/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col sm={3}>
                        <Form.Label htmlFor="email">Zajęte działki 
                            </Form.Label>
                    </Col>
                    <Col sm={{ span: 1, offset: 3 }}>
                        <Form.Control
                                type="text"
                                value={resultZaj.slice(-1)}
                                disabled
                            />
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Row>
                    <Col sm={3}>
                        <Form.Label htmlFor="email">Ilość rezerwacji 
                            </Form.Label>
                    </Col>
                    <Col sm={{ span: 1, offset: 3 }}>
                        <Form.Control
                                type="text"
                                value={resultRez.slice(-1)}
                                disabled
                            />
                    </Col>
                </Row>
            </Form.Group>
    </Form>
    )
        
}

class Admin extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { user } = this.props.auth;
        if (user.email === "edzialkowiec@gmail.com") {
            return (
                <List >
                    <Title>Panel Adminstratora</Title>
                        <AdminData/>
                    <Title>Dane zalogowanego</Title>
                    <Row>
                        <Col><p>Email: <b> {user.email}  </b></p>
                            <p>Administrator: <b> {user.firstname+ ' ' +user.lastname}  </b></p></Col>
                        <Col>
                            <Button style={BlueButtonStyle} onClick={this.onLogoutClick} >Wyloguj</Button>
                        </Col>
                    </Row>
                </List>
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