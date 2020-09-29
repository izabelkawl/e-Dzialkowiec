import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../api/index";
import classnames from "classnames";

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    width: 600px;
    margin-top: 150px;
    background-color: white;
    padding: 50px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
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
                <form noValidate onSubmit={this.onSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <InputText
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        placeholder="jankowalski@gmail.com"
                        className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                        })}

                    />
                    <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                    </span>
                    <Label htmlFor="password">Password</Label>
                    <InputText
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
                    <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                    </span>
                    <Button onClick={this.handleIncludeProduct}>Zaloguj</Button>
                    <CancelButton href="/users/register">Zarejestruj</CancelButton>

                </form>

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
