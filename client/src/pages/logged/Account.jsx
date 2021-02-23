import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../api/index";
import EmailChange from '../../components/accountEditing/EmailChange';
import DataChange from '../../components/accountEditing/DataChange';
import PasswordChange from '../../components/accountEditing/PasswordChange';
import { Tab, Col, Row, Nav, Button } from 'react-bootstrap';
import { BlueButtonStyle, Title } from '../constants';
import styled from 'styled-components';

const Wrapper = styled.div` 
    padding: 20px;
    @media(min-width: 992px){
        // padding: 100px;
    }
    @media(min-width: 1366px){
        width: 70vw;
        padding: 100px;
    }
`;

const Container = styled.div`
  padding-top: 30px;
`

class Account extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {

        const { path } = this.props.match;

        return (
            <Wrapper>
                <Row>
                    <Col>
                        <Title>Konto</Title>
                            </Col>
                    <Col>
                        <Button size="sm"style={BlueButtonStyle} className="float-right" onClick={this.onLogoutClick} >Wyloguj</Button>
                            </Col>
                </Row>
                <hr></hr>
                
                <Tab.Container transition={false} defaultActiveKey="link1">
                    <Row>
                        <Col lg={{ span: 3 }} align="center">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="link1">
                                        Twoje dane 
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link2">
                                        Zmień e-mail
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link3">
                                        Zmień hasło
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={{ offset: 1, span: 5 }}>
                            <Tab.Content>
                                <Tab.Pane eventKey="link1">
                                    <Container>
                                        <DataChange/>
                                            </Container>
                                                </Tab.Pane>
                                <Tab.Pane eventKey="link2">
                                    <Container>
                                        <EmailChange/>
                                            </Container>
                                                </Tab.Pane>
                                <Tab.Pane eventKey="link3">
                                    <Container>
                                        <PasswordChange/>
                                            </Container>
                                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Wrapper >
        );
    };
};

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