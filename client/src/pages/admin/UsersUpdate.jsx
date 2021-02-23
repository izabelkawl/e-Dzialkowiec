import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserByIdA } from '../../api';
import classnames from "classnames";
import { Form, Button, Col, Row } from 'react-bootstrap';
import { List, BlueButtonStyle, RedButtonStyle, Title, Span, Container60 } from '../constants';
import { Link } from "react-router-dom";

class UsersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            position: '',
            errors: {}
        };
    };

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            email: user.data.data.email,
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname,
            address: user.data.data.address,
            phone: user.data.data.phone,
            position: user.data.data.position,
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleUpdateUser = e => {

        e.preventDefault();
        const { id, email, firstname, lastname, address, phone, position} = this.state
        const payload = { email, firstname, lastname, address, phone, position }

        this.props.updateUserByIdA(id, payload)
    };

    render() {
        const { errors, email, firstname, lastname, address, phone, position } = this.state;

        return (
            <Container60>
            <List>
                <Title>Edycja</Title>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="email" >Email: </Form.Label >
                            <Col sm="8">
                            <Span>{errors.email}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                                value={email}
                                readOnly
                            />
                        </Col>
                    </Form.Group >
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="firstname" >Imię: </Form.Label >
                        <Col sm="8">
                            <Span>{errors.firstname}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.firstname}
                                id="firstname"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.firstname
                                })}
                                value={firstname}
                            />
                        </Col>
                    </Form.Group >
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="lastname">Nazwisko: </Form.Label >
                        <Col sm="8">
                            <Span>{errors.lastname}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.lastname}
                                id="lastname"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.lastname
                                })}
                                value={lastname}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="address">Adres: </Form.Label >
                        <Col sm="8">
                            <Span>{errors.address}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.address}
                                id="address"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.address
                                })}
                                value={address}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="phone">Telefon: </Form.Label >
                        <Col sm="8">
                            <Span>{errors.phone}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.phone}
                                id="phone"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.phone
                                })}
                                value={phone}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="4" htmlFor="position">Stanowisko: </Form.Label >
                        <Col sm="8">
                            <Span>{errors.position}</Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.position}
                                id="position"
                                as="select"
                                className={classnames("", {
                                    invalid: errors.position
                                })}
                                defaultChecked={position}
                                >
                                <option>Działkowiec</option>
                                <option>Członek</option>
                                <option>Skarbnik</option>
                                <option>Sekretarz</option>
                                <option>Wiceprezes Ogrodu</option>
                                <option>Prezes Ogrodu</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
                <Link to={'/admin/users/list'}>
                    <Button size="sm"style={RedButtonStyle}>Powrót</Button>
                </Link>
                {' '}
                <Button size="sm"style={BlueButtonStyle} type="submit" onClick={this.handleUpdateUser}>Aktualizuj</Button>
            </List>
        </Container60>
        );
    };
};

UsersUpdate.propTypes = {
    updateUserByIdA: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateUserByIdA }
)(withRouter(UsersUpdate));