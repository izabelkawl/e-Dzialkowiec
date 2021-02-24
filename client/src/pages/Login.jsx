import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Title, BlueButtonStyle, Span, linkColor }  from '../pages/constants';
import { loginUser } from "../api/index";
import NavBar from '../components/navigation/NavBar';
import bg from './img/bgo.svg';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    background-color: white;
    margin: 0 auto;
    height: 100vh;
    @media(min-width: 400px) and (max-width: 767px){
        width: 100vw;
    };
    @media(min-width: 768px) and (max-width: 1364px){
        background-color: toamto;
        margin: 0 auto;
    };
    @media(min-width: 1365px){
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
    };
`;

const Container = styled.div.attrs({
    className: 'form-group',
})` 
    padding: 20px;
    padding-top: 100px;
    @media(min-width: 400px) and (max-width: 767px){
        margin: 0 auto;
    };
    @media(min-width: 768px) and (max-width: 1364px){
        width: 50vw;
        margin: 0 auto;
    };
    @media(min-width: 1365px) and (max-width: 1919px){
        padding-top: 0px;
        width: 30vw;
        margin: 10vh 20vw;}
    }
    @media(min-width: 1920px){
        padding-top: 0px;
        width: 30vw;
        margin: 20vh 20vw;}
    }
`;

const Label = styled(Form.Label)`
    padding-bottom: 10px;
`;

const LinkItem = styled.a`
    color: ${linkColor};
`;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            if (nextProps.auth.user.position !== "Działkowiec") {
                this.props.history.push("/admin");
               
            } else
            this.props.history.push("/dashboard");
        }

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
                            <Label htmlFor="email">Email: </Label>
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
                            <Form.Text style={{ paddingTop: '10px' }}><Link to="/users/register"><LinkItem>Nie masz konta? Zarejestruj się </LinkItem></Link></Form.Text>
                        </Form.Group>
                        <Button size="sm" style={BlueButtonStyle} className="float-right" type="submit" >Zaloguj</Button>
                    </Form>
                </Container>
            </Wrapper>
              );
    };
};

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
