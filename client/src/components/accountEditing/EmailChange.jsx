import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import api, { updateUserEmail } from '../../api';
import { logoutUser } from "../../api/index";
import { Form, Button } from 'react-bootstrap';
import {BlueButtonStyle, Title, Span} from '../../pages/constants.jsx';

class EmailChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.auth.user.id,
            email: '',
            password: '',
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
            password: user.data.data.password
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
            
            email: this.state.email,
            password: this.state.password
        };

        this.props.updateUserEmail(id, userData)
    }

    render() {
        const { errors } = this.state;
        return (
                <>
                    <Title>Zmiana adresu email</Title>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="email">Nowy email:</Form.Label>
                            <Span>
                                {errors.email}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email
                                })}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="password">Hasło: </Form.Label >
                            <Span>
                                {errors.passwordincorrectemail}
                            </Span>
                            <Form.Control
                                onChange={this.onChange}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.passwordincorrectemail
                                })}
                            />
                        </Form.Group>
                        <Button style={BlueButtonStyle} type="submit"  className="float-right" onClick={this.handleUpdateUser} >Zapisz</Button>
                    </Form>
                </>
        );
    }
}

EmailChange.propTypes = {
    updateUserEmail: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { logoutUser, updateUserEmail }
)(EmailChange);