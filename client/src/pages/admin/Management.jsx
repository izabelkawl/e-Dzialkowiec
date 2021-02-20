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
import { Tab, ListGroup, Button, Row, Col, CardColumns } from 'react-bootstrap';

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
                <Tab.Container transition={false} id="list-group-tabs-example" defaultActiveKey="#link1" >
                    <Col align="center" lg={3}>
                        <ListGroup >
                            <ListGroup.Item action href="#link1">
                                Skład zarządu
                                    </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Ogłoszenia
                                    </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                O nas
                                    </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                Ustawy
                                    </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                Adres
                                    </ListGroup.Item>
                            <ListGroup.Item action href="#link6">
                                RODO
                                    </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Container>
                                    <Title>Zarząd</Title>
                                        <CardColumns>
                                            <ManagementList/>
                                                </CardColumns>
                                                    </Container>
                                                        <Information>*Skład zarządu można zmienić podczas edycji użytkownika</Information>
                                                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Container>
                                    <Title>Ogłoszenia</Title>
                                        <Announcements/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Container>
                                    <Title>O nas</Title>
                                        <EditDescription/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <Container>
                                    <Title>Ustawy</Title>
                                        <EditAct/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <Container>
                                    <Title>Adres</Title>
                                        <EditAddress/>
                                            </Container>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
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
