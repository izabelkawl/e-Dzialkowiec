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

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputFirstName = async event => {
        const firstname = event.target.value
        this.setState({ firstname })
    }
    handleChangeInputLastName = async event => {
        const lastname = event.target.value
        this.setState({ lastname })
    }
    handleChangeInputAddress = async event => {
        const address = event.target.value
        this.setState({ address })
    }
    handleChangeInputPhone = async event => {
        const phone = event.target.validity.valid
            ? event.target.value
            : this.state.phone

        this.setState({ phone })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }
    handleChangeInputPassword2 = async event => {
        const password2 = event.target.value
        this.setState({ password2 })
    }

    handleUpdateUser = async () => {
        const { id, email, firstname, lastname, address, phone, password, password2 } = this.state
        const payload = { email, firstname, lastname, address, phone, password, password2 }

        await api.updateUserById(id, payload).then(res => {
            window.alert(`Zaaktualizowano pomyślnie!`)
            this.setState({
                email: '',
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
                password: '',
                password2: ''
            })
        })
    }

    render() {
        const { email, firstname, lastname, address, phone, errors } = this.state;
        return (
            <Wrapper>
                <Title>Edycja</Title>

                <Label htmlFor="email" >Email: </Label>
                <Span>{errors.email}</Span>
                <InputText
                    onChange={this.handleChangeInputEmail}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                        invalid: errors.email
                    })}
                    value={email}

                />

                <Label htmlFor="firstname" >Imię: </Label>

                <InputText
                    onChange={this.handleChangeInputFirstName}

                    id="firstname"
                    type="text"

                    value={firstname}
                />

                <Label htmlFor="lastname">Nazwisko: </Label>

                <InputText
                    onChange={this.handleChangeInputLastName}

                    id="lastname"
                    type="text"

                    value={lastname}
                />
                <Label htmlFor="address">Adres: </Label>

                <InputText
                    onChange={this.handleChangeInputAddress}

                    id="address"
                    type="text"

                    value={address}
                />
                <Label htmlFor="phone">Telefon: </Label>

                <InputText
                    onChange={this.handleChangeInputPhone}

                    id="phone"
                    type="text"

                    value={phone}
                />

                <Label htmlFor="password">Hasło: </Label>
                <Span>{errors.password}</Span>
                <InputText
                    onChange={this.handleChangeInputPassword}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password
                    })}
                    placeholder="********"
                />
                <Label htmlFor="password2">Powtórz hasło: </Label>
                <Span>{errors.password2}</Span>
                <InputText
                    onChange={this.handleChangeInputPassword2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                        invalid: errors.password2
                    })}
                    placeholder="********"
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