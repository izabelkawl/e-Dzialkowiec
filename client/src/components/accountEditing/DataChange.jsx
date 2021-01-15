import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserById } from '../../api';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Title from '../Title';
import classnames from "classnames";
import {BlueButtonStyle} from '../../pages/constants.jsx';

const Container = styled.div.attrs({
    className: 'form-group',
})`
   
`
const Span = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
`
class DataChange extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            id: this.props.auth.user.id,
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            password: '',
            errors: {}
        }
    }
    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            email: user.data.data.email,
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname,
            address: user.data.data.address,
            phone: user.data.data.phone
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

    handleUpdateUser = e => {

        e.preventDefault();
        const { id, email, firstname, lastname, address, phone, password, password2 } = this.state
        const payload = { email, firstname, lastname, address, phone, password, password2 }

        this.props.updateUserById(id, payload)

    }

    render() {
        const { errors, lastname, firstname, address, phone } = this.state;
        return (
            <Container>
                <Title>Edytuj dane</Title>
                    <Form noValidate >
                        <Form.Group >
                            <Form.Label htmlFor="firstname">Imię</Form.Label>
                            <Span>
                                {errors.firstname}
                                </Span>
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
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="lastname">Nazwisko</Form.Label>
                            <Span>
                                {errors.lastname}
                                </Span>
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
                        </Form.Group>
                        <Form.Group >
                            <Form.Label htmlFor="address">Adres</Form.Label>
                            <Span>
                                {errors.address}
                                </Span>
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
                        </Form.Group>
                        <Form.Group >
                            <Form.Label htmlFor="phone">Telefon</Form.Label>
                            <Span>
                                {errors.phone}
                                </Span>
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
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Hasło: </Form.Label >
                            <Span>
                                {errors.passwordincorrect}
                                </Span>
                            <Form.Control
                                onChange={this.onChange}
                                id="password"
                                type="password"
                                className={classnames("", {
                                invalid: errors.passwordincorrect
                                })}
                            />
                        </Form.Group>
                        <Button 
                            style={BlueButtonStyle}  
                            type="submit" 
                            onClick={this.handleUpdateUser} 
                            className="float-right">
                            Zapisz
                        </Button>
                    </Form>
                </Container>
            );
        }
    }

DataChange.propTypes = {
    updateUserById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateUserById }
)(DataChange);