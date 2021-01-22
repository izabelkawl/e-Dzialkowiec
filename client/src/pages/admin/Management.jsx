import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Form, Tab, ListGroup,Button, Row, Col, CardColumns } from 'react-bootstrap';
import styled from "styled-components";
import api, { updateManagementById } from '../../api';
import {  Span, Title, BlueButtonStyle } from '../constants';
import classnames from "classnames";
import ManagementList from "../../components/management/ManagementList"
import AnnouncementList from "../../components/management/AnnouncementList"
import AddAnnouncementAdmin from '../../components/modal/AddAnnouncementAdmin';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:50px;
    margin-top: 50px;
    background-color: white; 
`;

class Management extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "6009bbfedb3f5e215007b7e0",
            description: '',
            rodo: '',
            errors: {}
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const management = await api.getManagementById(id)

        this.setState({
            description: management.data.data.description,
            rodo: management.data.data.rodo,
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    
    handleUpdateManagement = e => {

        e.preventDefault();
        const {id, description, rodo } = this.state
        const payload = { description, rodo }

        this.props.updateManagementById(id, payload)
    }

    render() {
        const { errors, description, rodo } = this.state
        const AddView = () => {
            
        const [modalShow, setModalShow] = React.useState(false);
            return <div>
                 <Button style={BlueButtonStyle} onClick={() => setModalShow(true)}>Dodaj nowe ogłoszenie</Button>
                <AddAnnouncementAdmin show={modalShow} onHide={() => setModalShow(false)}
                />
                <br></br>
                <br></br>
                 <AnnouncementList/>
            </div>
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
                        </ListGroup>
                    </Col>
                    <Col xs={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <Form >
                                        <Title>O nas</Title>
                                        <Form.Group>
                                            <Span>{errors.description}</Span>
                                            <Form.Control
                                                onChange={this.onChange}
                                                error={errors.description}
                                                id="description"
                                                as="textarea"
                                                className={classnames("", {
                                                    invalid: errors.description
                                                })}
                                                value={description}
                                                rows={10}
                                            />
                                        </Form.Group>
                                        <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateManagement}>Zapisz</Button>
                    </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <Title>Zarząd</Title>
                                    <CardColumns><ManagementList/></CardColumns>
                                    {/* <Button style={BlueButtonStyle} href={"/admin/users/list"}>Edytuj</Button> */}
                   
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link3">
                                    <Title>Ogłoszenia</Title>
                                   
                                   <AddView/>
                                        
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link4">
                                    <Title>INFORMACJA DOTYCZĄCA DANYCH OSOBOWYCH PRZETWARZANYCH</Title> 
                                            <Span>{errors.rodo}</Span>
                                            <Form.Control
                                                onChange={this.onChange}
                                                error={errors.description}
                                                id="rodo"
                                                as="textarea"
                                                className={classnames("", {
                                                    invalid: errors.rodo
                                                })}
                                                value={rodo}
                                                rows={10}
                                            />
                                            <br></br>
                                             <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateManagement}>Zapisz</Button>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                </Tab.Container>
            </Row>
        </Wrapper>
        )
    }
};

Management.propTypes = {
    updateManagementById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateManagementById }
)(withRouter( Management));
