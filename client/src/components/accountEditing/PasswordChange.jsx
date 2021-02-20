import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserPassword } from '../../api';
import { logoutUser } from "../../api/index";
import { Form, Button } from 'react-bootstrap';
import classnames from "classnames";
import {BlueButtonStyle, Title, Span} from '../../pages/constants.jsx';

class PasswordChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.auth.user.id,
            password: '',
            passwordchange: '',
            passwordchange2: '',
            errors: {}
        }
    }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
  
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
        const { id } = this.state
        e.preventDefault();
        const userData = {
            
            password: this.state.password,
            passwordchange: this.state.passwordchange,
            passwordchange2: this.state.passwordchange2
        };
        
        this.props.updateUserPassword(id, userData)

    }

    render() {
        const { errors } = this.state;
        return (
                <>
                      <Title>Zmiana hasła</Title>
                        <Form>
                        <Form.Group>
                            <Form.Label htmlFor="password">Obecne Hasło: </Form.Label >
                            <Span> {errors.password}
                                {errors.passwordincorrectpassword}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid:  errors.password
                                })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="passwordchange">Nowe hasło:</Form.Label>
                            <Span>
                                    {errors.passwordchange}
                                </Span>
                                <Form.Control
                                    onChange={this.onChange}
                                    error={errors.passwordchange}
                                    id="passwordchange"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.passwordchange
                                    })}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="passwordchange2">Powtórz hasło:</Form.Label>
                            <Span>
                                    {errors.passwordchange2}
                                </Span>
                                <Form.Control
                                    onChange={this.onChange}
                                    error={errors.passwordchange2}
                                    id="passwordchange2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.passwordchange2
                                    })}
                                />
                                
                        </Form.Group>
                        <Button size="sm"style={BlueButtonStyle} type="submit"  className="float-right" onClick={this.handleUpdateUser} >Zapisz</Button>
                    </Form>
                </>
        );
    }
}
PasswordChange.propTypes = {
    updateUserPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { logoutUser, updateUserPassword }
)(PasswordChange);