import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../api/index";
import classnames from "classnames";
import { Form, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from '../components/NavBar'
const Wrapper = styled.div`
  height: 100vh;
`;

const Title = styled.h1.attrs({
    className: 'h1',
})`
font-size: 32px`

const Container = styled.div.attrs({
    className: 'form-group',
})` border-radius: 25px;
    margin: 100px;
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    background-color: white;
    padding: 50px;
`


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
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
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
                            <Form.Label htmlFor="email">Adres email</Form.Label>

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
                            <Form.Text style={{ color: "red" }}>
                                {errors.email}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="firstname">Imię
                                </Form.Label>

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
                                    <Form.Text style={{ color: "red" }}>
                                        {errors.firstname}
                                    </Form.Text>
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="lastname">Nazwisko</Form.Label>

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
                                    <Form.Text style={{ color: "red" }}>
                                        {errors.lastname}
                                    </Form.Text>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label htmlFor="address">Adres</Form.Label>

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
                            <Form.Text style={{ color: "red" }}>
                                {errors.address}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label htmlFor="phone">Telefon</Form.Label>

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
                            <Form.Text style={{ color: "red" }}>
                                {errors.phone}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label htmlFor="password">Hasło</Form.Label>

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
                            <Form.Text style={{ color: "red" }}>
                                {errors.password}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password2">Powtórz hasło</Form.Label>

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
                            <Form.Text style={{ color: "red" }}>
                                {errors.password2}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="success" type="submit" >Rejestracja</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}


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