import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { loginUser } from "../api/index";
const Title = styled.h1.attrs({
    className: 'h1',
})`font-size: 32px`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})` 
    margin: 100px;
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    background-color: white;
    padding: 50px;
`

const Span = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
`

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);

    };

    render() {
        const { errors } = this.state;
        return (
            <Wrapper>
                <Title>Logowanie</Title>
                <Form noValidate onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Span>
                            {errors.email}
                            {errors.emailnotfound}
                        </Span>
                        <Form.Control
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="jankowalski@gmail.com"
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Hasło</Form.Label>
                        <Span>
                            {errors.password}
                            {errors.passwordincorrect}
                        </Span>
                        <Form.Control
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;"
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Zapamietaj mnie" />
                    </Form.Group>

                    <Button variant="success" type="submit" >Zaloguj</Button>&nbsp;&nbsp;
                    <Button variant="danger" href="/users/register">Zarejestruj</Button>

                </Form>

            </Wrapper>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
