import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserById } from '../../api';
import { logoutUser } from "../../api/index";
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
class EmailChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.auth.user.id,
            password: '',
            password1: '',
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
            phone: user.data.data.phone,
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
    // onSubmit = e => {
    //     const { id } = this.state
    //     e.preventDefault();
    //     const payload = {
    //         email: this.state.email,
    //         firstname: this.state.firstname,
    //         lastname: this.state.lastname,
    //         address: this.state.address,
    //         phone: this.state.phone,
    //         password1: this.state.password1,
    //         password2: this.state.password2
    //     };
    //     this.props.updateUserById(id, payload)
    // };

    render() {
        const { errors, password } = this.state;
        return (
                <Container>
                    <Title>Zmiana hasła</Title>
                        <Form>
                        <Form.Group>
                            <Form.Label htmlFor="password">Obecne Hasło: </Form.Label >
                            <Span> {errors.password}
                                {errors.passwordincorrect}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid:  errors.passwordincorrect
                                })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password1">Nowe hasło:</Form.Label>
                            <Span>
                                    {errors.password1}
                                </Span>
                                <Form.Control
                                    onChange={this.onChange}
                                    error={errors.password1}
                                    id="password1"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password1
                                    })}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password2">Powtórz hasło:</Form.Label>
                            <Span>
                                    {errors.password2}
                                </Span>
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
                        <Button type="submit" style={BlueButtonStyle} onClick={this.handleUpdateUser} className="float-right">Zapisz</Button>
                    </Form>
                </Container>
            );
        }
    }
EmailChange.propTypes = {
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
    { logoutUser, updateUserById }
)(EmailChange);