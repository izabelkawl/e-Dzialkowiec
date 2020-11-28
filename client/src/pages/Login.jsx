import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import { loginUser } from "../api/index";
import bg from './img/bglr.png';

const Wrapper = styled.div`
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
`;

const Title = styled.h1.attrs({
    className: 'h1',
})`font-size: 50px;
    padding-bottom:10px; `

const Container = styled.div.attrs({
    className: 'form-group',
})` 
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto; 
    width: 500px;
`
const Span = styled.span`
    color: red;
    font-size: 80%;`


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
            if (this.state.email === "izabelawlazlo9@gmail.com") {
                this.props.history.push("/admin");
            } else

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
                <NavBar />
                <Container>
                    <Title>Logowanie</Title>
                    <Form noValidate onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email
                        </Form.Label><Span>
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
                            <Form.Text style={{ float: "right" }}>
                                <a href="/"> Nie pamiętasz hasła?</a>
                            </Form.Text>
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
                        {/* 
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Zapamietaj mnie" />
                        </Form.Group> */}

                        <Button variant="success" type="submit" size="lg" block>Zaloguj</Button>

                        <Button variant="danger" href="/users/register" size="lg" block>Nie masz konta? Zarejestruj się</Button>

                    </Form>

                </Container>
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
