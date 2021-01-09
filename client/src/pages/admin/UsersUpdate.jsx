import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserById } from '../../api';
import classnames from "classnames";
import { Form, Button } from 'react-bootstrap';
import { Wrapper, BlueButtonStyle, RedButtonStyle, Title, Span } from '../constants';

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
            password: '',
            password2: '',
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
        const { errors, email, firstname, lastname, address, phone } = this.state;
        return (
            <Wrapper>
                <Title>Edycja</Title>

                <Form.Group >
                    <Form.Label htmlFor="email" >Email: </Form.Label >
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

                    />
                </Form.Group >
                <Form.Group >
                    <Form.Label htmlFor="firstname" >Imię: </Form.Label >
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
                </Form.Group >
                <Form.Group >
                    <Form.Label htmlFor="lastname">Nazwisko: </Form.Label >
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
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="address">Adres: </Form.Label >
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
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="phone">Telefon: </Form.Label >
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
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Hasło: </Form.Label >
                    <Span>{errors.password}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                            invalid: errors.password
                        })}

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password2">Powtórz hasło: </Form.Label >
                    <Span>{errors.password2}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("", {
                            invalid: errors.password2
                        })}
                    />
                </Form.Group>

                <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateUser}>Edytuj</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/users/list'}>Powrót</Button>
            </Wrapper>
        )
    }
}


UsersUpdate.propTypes = {
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
)(withRouter(UsersUpdate));