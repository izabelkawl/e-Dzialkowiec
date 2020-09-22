import React, { Component } from 'react'
import api from '../api'

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
    margin-top: 50px;
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


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
        }
    }

    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }
    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
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

    handleIncludeUser = async () => {
        const { email, password, firstname, lastname, address, phone } = this.state
        const payload = { email, password, firstname, lastname, address, phone }

        await api.insertUser(payload).then(res => {
            window.alert(`User inserted successfully`)
            this.setState({
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
            })
        })
    }

    render() {
        const { email, password, firstname, lastname, address, phone } = this.state
        return (
            <Wrapper>
                <Title>Rejestracja</Title>
                <Label>Email: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={firstname}
                    onChange={this.handleChangeInputFirstName}
                />

                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={lastname}
                    onChange={this.handleChangeInputLastName}
                />
                <Label>Address: </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />
                <Label>Phone: </Label>
                <InputText
                    type="text"
                    value={phone}
                    onChange={this.handleChangeInputPhone}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />
                <Label>Repet Password: </Label>
                <InputText
                    type="text"

                />
                <Button onClick={this.handleIncludeUser}>Rejestracja</Button>
                {/* <CancelButton href={'/users/list'}>Cancel</CancelButton> */}
            </Wrapper>
        )
    }
}

export default Register