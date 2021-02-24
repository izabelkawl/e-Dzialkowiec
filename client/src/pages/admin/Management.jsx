import React, { Component } from "react";
import styled from 'styled-components';
import ManagementList from "../../components/management/ManagementList";
import AnnouncementList from "../../components/management/AnnouncementList";
import AddAnnouncementAdmin from '../../components/modal/AddAnnouncementAdmin';
import EditAddress from '../../components/management/EditAddress';
import EditDescription from "../../components/management/EditDescription";
import EditRodo from '../../components/management/EditRodo';
import EditAct from '../../components/management/EditAct';
import { Title, BlueButtonStyle, List, Information } from '../constants';
import { Tab, Nav, Button, Row, Col, CardColumns } from 'react-bootstrap';

const Container = styled.div`
  padding-top: 30px;
`

class Management extends Component {

    render() {
        const Announcements = () => {
            const [modalShow, setModalShow] = React.useState(false);
            return (
                <>
                    <Button size="sm"style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj nowe ogłoszenie</Button>
                    <AddAnnouncementAdmin show={modalShow} onHide={() => setModalShow(false)}/>
                    <br></br>
                    <br></br>
                    <AnnouncementList/>
                </>
            );
        };

    return (
        <List>
            <Row className="justify-content-md-center" >
            <Tab.Container transition={false} defaultActiveKey="link1">
                <Col sm={{ span: 3 }} align="center" >
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="link1">
                            Ogłoszenia
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link2">
                                Skład zarządu
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link3">
                                O nas
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link4">
                                Ustawy
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link5">
                                Adres
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link6">
                                RODO
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="link2">
                                <Container>
                                    <Title>Zarząd</Title>
                                        <CardColumns>
                                            <ManagementList/>
                                                </CardColumns>
                                                    </Container>
                                                        <Information>*Skład członków zarządu można zmienić w zakładce "Użytkownicy".</Information>
                                                            </Tab.Pane>
                            <Tab.Pane eventKey="link1">
                                <Container>
                                    <Title>Ogłoszenia</Title>
                                        <Announcements/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="link3">
                                <Container>
                                    <Title>O nas</Title>
                                        <EditDescription/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="link4">
                                <Container>
                                    <Title>Ustawy</Title>
                                        <EditAct/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="link5">
                                <Container>
                                    <Title>Adres</Title>
                                        <EditAddress/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="link6">
                                <Container>
                                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title> 
                                        <EditRodo/>
                                            </Container>
                                                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
        </List>
        );
    };
};

export default Management
