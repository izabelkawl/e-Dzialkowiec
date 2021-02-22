import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../api/index";
import classnames from "classnames";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BlueButtonStyle, Title, Span, Link } from './constants';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavBar';
import bg from './img/bgo.svg';

const Wrapper = styled.div`
    min-height: 100vh;

    @media(min-width: 1365px){
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
        height: 100%;
    }
`;

const Container = styled.div.attrs({
    className: 'form-group',
})` 
    padding: 20px;
    @media(min-width: 400px) and (max-width: 767px){
        margin: 0 auto;
    };
    @media(min-width: 768px) and (max-width: 1364px){
        width: 80vw;
        margin: 0 auto;
    };
    @media(min-width: 1365px){
        width: 50vw;
        margin: 50px 200px 0;
    }
`;

const Label = styled(Form.Label)`
    padding-bottom: 10px;
`;

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            password: '',
            password2: '',
            errors: {}
        };
    };

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/login");
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {

        e.preventDefault();
        const newUser = {

            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            phone: this.state.phone,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history)
    };

    render() {

        const { errors } = this.state;

        return (
            <Wrapper>
                <NavBar />
                <Container>
                    <Title>Rejestracja</Title>
                    <Form noValidate onSubmit={this.onSubmit}>
                        <Form.Group >
                            <Label htmlFor="email">Adres email: </Label>
                            <Span>
                                {errors.email}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                                placeholder="jankowal@gmail.com"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Row>
                                <Col>
                                    <Label htmlFor="firstname">Imię:</Label>
                                    <Span>
                                        {errors.firstname}
                                    </Span>
                                    <Form.Control
                                        onChange={this.onChange}
                                        value={this.state.firstname}
                                        error={errors.firstname}
                                        id="firstname"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.firstname
                                        })}
                                        placeholder="Jan"
                                    />
                                </Col>
                                <Col>
                                    <Label htmlFor="lastname">Nazwisko:</Label>
                                    <Span>
                                        {errors.lastname}
                                    </Span>
                                    <Form.Control
                                        onChange={this.onChange}
                                        value={this.state.lasttname}
                                        error={errors.lastname}
                                        id="lastname"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.lastname
                                        })}
                                        placeholder="Kowalski"
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group >
                            <Label htmlFor="address">Adres:</Label>
                            <Span>
                                {errors.address}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.address}
                                error={errors.address}
                                id="address"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.address
                                })}
                                placeholder="ul. Wspólna 2, Warszawa 00-000"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Label htmlFor="phone">Telefon:</Label>
                            <Span>
                                {errors.phone}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.phone}
                                error={errors.phone}
                                id="phone"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.phone
                                })}
                                placeholder="123 456 789"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Label htmlFor="password">Hasło:</Label>
                            <Span>
                                {errors.password}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password
                                })}
                                placeholder="********"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Label htmlFor="password2">Powtórz hasło:</Label>
                            <Span>
                                {errors.password2}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password2
                                })}
                                placeholder="********"
                            />
                        </Form.Group>
                        <Button
                            style={ BlueButtonStyle }
                            variant="info" block
                            type="submit"
                            >
                            Rejestracja
                        </Button>   
                        <Form.Text ><Link to={'/dashboard'}>Powrót do logowania</Link></Form.Text>
                        <br></br>
                    </Form>
                </Container>
            </Wrapper>
        );
    };
};

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));