import React, { Component } from "react";
import { Tab, ListGroup,Button, Row, Col, CardColumns } from 'react-bootstrap';
import styled from "styled-components";
import {  Title, BlueButtonStyle } from '../constants';
import ManagementList from "../../components/management/ManagementList"
import AnnouncementList from "../../components/management/AnnouncementList"
import AddAnnouncementAdmin from '../../components/modal/AddAnnouncementAdmin';
import EditAddress from '../../components/management/EditAddress'
import EditDescription from "../../components/management/EditDescription";
import EditRodo from '../../components/management/EditRodo'

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:50px;
    margin-top: 50px;
    background-color: white; 
`;

class Management extends Component {

    render() {
        const Announcements = () => {
        const [modalShow, setModalShow] = React.useState(false);
            return <>
                 <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj nowe ogłoszenie</Button>
                <AddAnnouncementAdmin show={modalShow} onHide={() => setModalShow(false)}
                />
                <br></br>
                <br></br>
                 <AnnouncementList/>
            </>
        }

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
                                            {/* <Button style={BlueButtonStyle} href={"/admin/users/list"}>Edytuj</Button> */}
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
                            </Tab.Content>
                        </Col>
                </Tab.Container>
            </Row>
        </Wrapper>
        )
    }
};

export default Management
