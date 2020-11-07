import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../api/index";
import classnames from "classnames";

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
font-size: 32px`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})` margin: 100px;
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    background-color: white;
    padding: 50px;
`

const Label = styled.label`
    margin: 5px;
`

const Input = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-success`,
})`
    margin: 15px 15px 15px 5px;
`

const Span = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
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
                <Title>Rejestracja</Title>

                <form noValidate onSubmit={this.onSubmit}>

                    <Label htmlFor="email">Adres email</Label>
                    <Span>{errors.email}</Span>
                    <Input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                            invalid: errors.email
                        })}
                        placeholder="jankowalski@gmail.com"
                    />

                    <Label htmlFor="firstname">Imię</Label>
                    <Span>{errors.firstname}</Span>
                    <Input
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
                    <Label htmlFor="lastname">Nazwisko</Label>
                    <Span>{errors.lastname}</Span>
                    <Input
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
                    <Label htmlFor="address">Adres</Label>
                    <Span>{errors.address}</Span>
                    <Input
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
                    <Label htmlFor="phone">Telefon</Label>
                    <Span>{errors.phone}</Span>
                    <Input
                        onChange={this.onChange}
                        value={this.state.phone}
                        error={errors.phone}
                        id="phone"
                        type="text"
                        className={classnames("", {
                            invalid: errors.phone
                        })}
                        placeholder="+48 123456789"
                    />
                    <Label htmlFor="password">Hasło</Label>
                    <Span>{errors.password}</Span>
                    <Input
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

                    <Label htmlFor="password2">Powtórz hasło</Label>
                    <Span >{errors.password2}</Span>
                    <Input
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
                    <Button >Rejestracja</Button>
                </form>
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