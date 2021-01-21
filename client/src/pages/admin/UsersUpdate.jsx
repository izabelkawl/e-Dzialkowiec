import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserByIdA } from '../../api';
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
            position: '',
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
            phone: user.data.data.phone,
            position: user.data.data.position,
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
        const { id, email, firstname, lastname, address, phone, position} = this.state
        const payload = { email, firstname, lastname, address, phone, position }

        this.props.updateUserByIdA(id, payload)

    }


    render() {
        const { errors, email, firstname, lastname, address, phone, position } = this.state;
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
                    <Form.Label htmlFor="position">position: </Form.Label >
                    <Span>{errors.position}</Span>
                    <Form.Control
                        onChange={this.onChange}
                        error={errors.position}
                        id="position"
                        type="text"
                        className={classnames("", {
                            invalid: errors.position
                        })}
                    // defaultChecked={position}
                    value={position}
                    >
                    {/* <option>customer</option>
                    <option>Członek</option>
                    <option>Skarbnik</option>
                    <option>Sekretarz</option>
                    <option>Wiceprezes Ogrodu</option>
                    <option>Prezes Ogrodu</option> */}
                    </Form.Control>
                </Form.Group>

                <Button style={BlueButtonStyle} type="submit" onClick={this.handleUpdateUser}>Edytuj</Button>{' '}
                <Button style={RedButtonStyle} href={'/admin/users/list'}>Powrót</Button>
            </Wrapper>
        )
    }
}


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