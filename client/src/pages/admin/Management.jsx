import React, { Component } from "react";
import ManagementList from "../../components/management/ManagementList";
import AnnouncementList from "../../components/management/AnnouncementList";
import AddAnnouncementAdmin from '../../components/modal/AddAnnouncementAdmin';
import EditAddress from '../../components/management/EditAddress';
import EditDescription from "../../components/management/EditDescription";
import EditRodo from '../../components/management/EditRodo';
import EditAct from '../../components/management/EditAct';
import { Title, BlueButtonStyle, List } from '../constants';
import { Tab, ListGroup,Button, Row, Col, CardColumns } from 'react-bootstrap';

class Management extends Component {

    render() {
        const Announcements = () => {
            const [modalShow, setModalShow] = React.useState(false);
                return (
                    <>
                        <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj nowe ogłoszenie</Button>
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
                            <ListGroup.Item action href="#link6" >
                                Ustawy
                                </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                RODO
                                </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                Adres
                                </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Title>O nas</Title>
                                    <EditDescription/>
                                        </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <Title>Zarząd</Title>
                                    <CardColumns>
                                        <ManagementList/>
                                            </CardColumns>
                                                </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                <Title>Ogłoszenia</Title>
                                    <Announcements/>
                                        </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title> 
                                    <EditRodo/>
                                        </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                                <Title>Adres</Title>
                                    <EditAddress/>
                                        </Tab.Pane>
                            <Tab.Pane eventKey="#link6">
                                <Title>Ustawy</Title>
                                    <EditAct/>
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
