import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import { loginUser } from "../api/index";
import NavBar from '../components/NavBar'

import bg from './img/bgo.svg';
const Wrapper = styled.div`
    background-color: #f8f9fa;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 100vh;
`;

const Container = styled.div.attrs({
    className: 'form-group',
})` 
    width: 30vw;
    margin: 200px 400px;
`
const Title = styled.h3`
    padding-bottom:30px; 
    color: #0071BC;
`

const Span = styled.span`
    color: red;
    font-size: 80%;
`
const Link = styled.a`
    color: #0071BC;
`
const Button = styled.button`
    padding: 0 20px;
    color: white;
    background: #0071BC;
    border: 10px solid #0071BC;
`
const Label = styled(Form.Label)`
    padding-bottom: 10px;
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
            if (this.state.email === "edzialkowiec@gmail.com") {
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
                            <Label htmlFor="email">Email:
                        </Label>
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
                                className={classnames("", {
                                    invalid: errors.email || errors.emailnotfound
                                })} />

                        </Form.Group>
                        <Form.Group>
                            <Label htmlFor="password">Hasło:</Label>
                            <Span>
                                {errors.password}
                                {errors.passwordincorrect}
                            </Span>
                            <Form.Text style={{ float: "right" }}>
                                <Link href="/"> Nie pamiętasz hasła?</Link>
                            </Form.Text>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password || errors.passwordincorrect
                                })}
                            />
                            <Form.Text style={{ paddingTop: '10px' }}><Link href="/users/register">Nie masz konta? Zarejestruj się </Link></Form.Text>
                        </Form.Group>
                        {/* 
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Zapamietaj mnie" />
                        </Form.Group> */}

                        <Button className="float-right" type="submit" size="lg">Zaloguj</Button>
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
