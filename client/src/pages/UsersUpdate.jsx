import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api, { updateUserById } from '../api';
import classnames from "classnames";


import styled from 'styled-components';
const Title = styled.h1.attrs({
    className: 'h1',
})`font-size: 32px`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-left: auto;
    margin-right: auto; 
    background-color: white;
    padding: 50px;
    width: 600px;
    margin-top: 50px;
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

const Span = styled.span.attrs({
    className: `red-text`,
})`
    color: red;
`
class UsersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            email: user.data.data.email,
            firstname: user.data.data.firstname,
            lastname: user.data.data.lastname,
            address: user.data.data.address,
            phone: user.data.data.phone
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

        e.preventDefault();
        const { id, email, firstname, lastname, address, phone, password, password2 } = this.state
        const payload = { email, firstname, lastname, address, phone, password, password2 }

        this.props.updateUserById(id, payload)

    }


    render() {
        const { errors, email, firstname, lastname, address, phone } = this.state;
        return (
            <Wrapper>
                <Title>Edycja</Title>

                <Label htmlFor="email" >Email: </Label>
                <Span>{errors.email}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                        invalid: errors.email
                    })}
                    value={email}

                />

                <Label htmlFor="firstname" >Imię: </Label>
                <Span>{errors.firstname}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.firstname}
                    id="firstname"
                    type="text"
                    className={classnames("", {
                        invalid: errors.firstname
                    })}
                    value={firstname}
                />

                <Label htmlFor="lastname">Nazwisko: </Label>
                <Span>{errors.lastname}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.lastname}
                    id="lastname"
                    type="text"
                    className={classnames("", {
                        invalid: errors.lastname
                    })}
                    value={lastname}
                />
                <Label htmlFor="address">Adres: </Label>
                <Span>{errors.address}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.address}
                    id="address"
                    type="text"
                    className={classnames("", {
                        invalid: errors.address
                    })}
                    value={address}
                />
                <Label htmlFor="phone">Telefon: </Label>
                <Span>{errors.phone}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.phone}
                    id="phone"
                    type="text"
                    className={classnames("", {
                        invalid: errors.phone
                    })}
                    value={phone}
                />

                <Label htmlFor="password">Hasło: </Label>
                <Span>{errors.password}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password
                    })}

                />
                <Label htmlFor="password2">Powtórz hasło: </Label>
                <Span>{errors.password2}</Span>
                <InputText
                    onChange={this.onChange}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password2
                    })}
                />
                <Button onClick={this.handleUpdateUser}>Update User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}


UsersUpdate.propTypes = {
    updateUserById: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { updateUserById }
)(withRouter(UsersUpdate));