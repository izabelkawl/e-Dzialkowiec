import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import {Tab, Col, Row, ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Wrapper from '../../components/Wrapper/Wrapper';
import Title from '../../components/Title';
import {BlueButtonStyle} from '../constants';
import EmailChange from '../../components/accountEditing/EmailChange'
import DataChange from '../../components/accountEditing/DataChange'
import PasswordChange from '../../components/accountEditing/PasswordChange'

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
                        <Col><Button style={BlueButtonStyle} className="float-right" onClick={this.onLogoutClick} >Wyloguj</Button></Col>
                    </Row>
                    <hr></hr>
                    <Tab.Container transition={false} defaultActiveKey="#link1">
                        <Row>
                            <Col sm={{ span: 3 }} align="center" >
                                <ListGroup>
                                    <ListGroup.Item action  href="#link1" >
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
                                        <EmailChange/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        <PasswordChange/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link3">
                                        < DataChange/>
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
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Account);